'use client';
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CartContext } from "../layout";
import Link from 'next/link'

export default function ProductsPage() {

    const { state, dispatch } = React.useContext(CartContext);

    useEffect(() => {
        console.log("Cart Updated : ", state.cart);
    }, [state.cart]);

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
            <h1 className="text-center"> Products Page</h1>
            {state.products.map((product) => {
                return (
                    <div key={product.id} className="border p-4 rounded-md m-5 text-center">
                        <h1> {product.id} : {product.name} </h1>
                        <p> Price : {product.price} </p>
                        <p> Stock : {product.stock} </p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => {
                            if (product.stock > 0) {
                                toast.success(`${product.name} added to cart`);
                                dispatch({ type: "ADD_TO_CART", payload: product });
                            }
                            else
                                toast.error("Out of Stock")
                        }}> Add to Cart </button>
                    </div>
                )


            })}

            <div className="text-center">
                <Link href="/cart" className="bg-green-500 text-white px-4 py-2 rounded-md">Go to Cart</Link>
            </div>
        </div>
    );

}