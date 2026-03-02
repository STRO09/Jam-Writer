"use client";
import Link from "next/link";
import {CartContext} from "../layout";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function CartPage() {

    const { state, dispatch } = React.useContext(CartContext);
    return (
        <div>
            <Toaster
                position="top-center"
                gutter={8}
                toastOptions={{
                    duration: 5000,
                    removeDelay: 1000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />

            <h1 className="text-center">Cart Page</h1>
            {state.cart.map((product) => {
                if(product.quantity > 0) {
                    return (
                    <div key={product.id} className="border p-4 rounded-md m-5 text-center">
                        <h1> {product.id} : {product.name} </h1>
                        <p> Price : {product.price} </p>
                        <p> Quantity : {product.quantity} </p>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => {
                            if (product.quantity > 0) {
                                toast.success(`${product.name} removed from cart`);
                                dispatch({ type: "REMOVE_FROM_CART", payload: product });
                            }
                            else
                                toast.error("Out of Stock")
                        }}> Remove from Cart </button>
                    </div>
                )
            }
            else return null;
                })}

            <Link href="/products" className="bg-green-500 text-white px-4 py-2 rounded-md">Go to Products</Link>
        </div>
    )
}