import React, { useState } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

function ShoppingCart() {

    const [itemCount, setItemCount] = useState("0");

    let cart = {};
    cart = JSON.parse(window.localStorage.getItem("cart"));

   // setItemCount();

    return (
        <>
            <div className="ml-4 flow-root lg:ml-6">
                <div className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{itemCount}</span>
                <span className="sr-only">items in cart, view bag</span>
            </div>
            </div>
        </>
    )
}

function CartButton({id}) {

    function setCart() {

        let cart = {};
        
        if (window.localStorage.getItem("cart")) {
            cart = JSON.parse(window.localStorage.getItem("cart"));
        }
        
        if (cart[id]) {

            let tempItem = cart[id];
            tempItem.amount += 1;
            cart[id] = tempItem;

        } else {

            cart[id] = {amount: 1};
        }
    
        window.localStorage.setItem("cart", JSON.stringify(cart));
    }
   
    return (
        <>
        <button onClick={() => setCart({id})} class="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
            Lisää ostoskoriin
        </button>
        </>
    )
}

export {ShoppingCart, CartButton}