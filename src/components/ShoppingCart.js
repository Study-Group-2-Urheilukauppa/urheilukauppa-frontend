import React, { useReducer, useState } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function ShoppingCart() {

    const [itemCount, setItemCount] = useState("0");

    let cart = {};
    cart = JSON.parse(window.localStorage.getItem("cart"));

    return (
        <>
            <div className="ml-4 flow-root lg:ml-6">
                <div className="group -m-2 flex items-center p-2">
                    <Link to="/Checkout">
                    <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                /></Link>
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{itemCount}</span>
                <span className="sr-only">items in cart, view bag</span>
            </div>
            </div>
        </>
    )
}

function CartRead(id) {
    let cart = {};

    if (window.localStorage.getItem("cart")) {
        cart = JSON.parse(window.localStorage.getItem("cart"));
    }
    
    if (cart[id]) {
        let tempItem = cart[id];
        return tempItem.amount

    } else {
        return false
    }

}

function CartUpdate(id, amount) {
    let cart = {};
        
    if (window.localStorage.getItem("cart")) {
        cart = JSON.parse(window.localStorage.getItem("cart"));
    }
    
    if (cart[id]) {

        let tempItem = cart[id];
        tempItem.amount = amount
        cart[id] = tempItem;

    } else {

        cart[id] = {amount: 1};
    }

    window.localStorage.setItem("cart", JSON.stringify(cart));
}

function CartGetList() {
    let cart = {};
    let cartList = [];
    let cartStr = ""
        
    if (window.localStorage.getItem("cart")) {
        cart = JSON.parse(window.localStorage.getItem("cart"));
        cartList = Object.keys(cart)
        cartStr = cartList.toString()

        return cartStr
        
    } else {

        return false
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
        <button disabled class="bg-secondary opacity-60 text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
        Tuote korissa
        </button>
        ): (
        <button onClick={() => setCart()} class="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
        Lisää ostoskoriin
        </button>
        )}
        
        </>
    )
}

export {ShoppingCart, CartButton, CartGetList, CartRead}