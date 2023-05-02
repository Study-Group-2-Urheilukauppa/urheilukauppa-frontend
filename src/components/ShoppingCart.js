import React, { useState, useEffect } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function ShoppingCart() {

    const navigate = useNavigate()
    const [itemCount, setItemCount] = useState("0");

    useEffect(() => {
        let cartList = CartGetList();
        if (cartList) {
            let count = cartList.split(",").reduce((sum, key) => {
                let amount = CartRead(key);
                return sum + parseInt(amount);
            }, 0);
            setItemCount(count.toString());
        }
    }, []);

    function handleStorageChange() {
        let cartList = CartGetList();
        if (cartList) {
            let count = cartList.split(",").reduce((sum, key) => {
                let amount = CartRead(key);
                return sum + parseInt(amount);
            }, 0);
            setItemCount(count.toString());
        } else {
            setItemCount("0");
        }
    }

    useEffect(() => {
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleCheckout = () => {
        
        const role = Cookies.get('role');
        const token = Cookies.get('token');
        if (!role || !token) {
            // User is not logged in, redirect them to login page
            alert("Kirjaudu sisään tilataksesi")
            navigate('../login');
        } else {
            // User is logged in, allow them to proceed to checkout
            navigate('../Checkout');
        }
    };

    return (
        <>
            <div className="ml-4 flow-root lg:ml-6">
                <div className="group -m-2 flex items-center p-2">
                    <button onClick={handleCheckout}>
                        <ShoppingBagIcon
                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                        />
                    </button>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{itemCount}</span>
                    <span className="sr-only">items in cart, view bag</span>
                </div>
            </div>
        </>
    );
}

function CartRead(id) {
    let cart = {};

    if (window.localStorage.getItem("cart")) {
        cart = JSON.parse(window.localStorage.getItem("cart"));
    }
    
    if (cart[id]) {
        let tempItem = cart[id];
        return tempItem.amount;

    } else {
        return false;
    }

}

function CartUpdate(id, amount) {
    let cart = {};
        
    if (window.localStorage.getItem("cart")) {
        cart = JSON.parse(window.localStorage.getItem("cart"));
    }
    
    if (cart[id]) {

        let tempItem = cart[id];
        tempItem.amount = amount;
        cart[id] = tempItem;

    } else {

        cart[id] = {amount: 1};
    }

    window.localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event('storage'));
}

function CartGetList() {
    let cart = {};
    let cartList = [];
    let cartStr = "";
        
    if (window.localStorage.getItem("cart")) {
        cart = JSON.parse(window.localStorage.getItem("cart"));
        cartList = Object.keys(cart);
        cartStr = cartList.toString();

        return cartStr;
        
    } else {

        return false;
    }
}

function CartButton({id}) {

    const [isCarted, setIsCarted] = useState(false);

    function setCart() {
        CartUpdate(id);
        setIsCarted(true);
        CartGetList();
    }
   
   
    return (
        <>
        {CartRead(id) || isCarted ? (
        <button disabled className="bg-secondary opacity-60 text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
        Tuote korissa
        </button>
        ): (
        <button onClick={() => setCart()} className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
        Lisää ostoskoriin
        </button>
        )}
        
        </>
    )
}


function CartDeleteButton({id}) {

    function handleClick() {
        CartDelete(id);
    }
   
    return (
        <>
        <button onClick={() => handleClick()} className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
        Poista korista
        </button>
        </>
    )
}

function CartDelete(id) {
    let cart = {};
    console.log(id);
        
    if (window.localStorage.getItem("cart")) {
        cart = JSON.parse(window.localStorage.getItem("cart"));
    }
    
    if (cart[id]) {
        delete cart[id]
        window.localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload(); // Refresh the page after deleting the item
    }
}

export {ShoppingCart, CartButton, CartDeleteButton, CartGetList, CartRead}