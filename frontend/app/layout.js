"use client";
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react';
import { useReducer } from 'react';

const inter = Inter({ subsets: ['latin'] })
export const CartContext = React.createContext();
export default function RootLayout({ children }) {

  const initialState = {
    products: [
      { id: 1, name: "Oxfords Shoes", price: 7000, stock: 5 },
      { id: 2, name: "Nike Airforce 1", price: 5000, stock: 10 },
      { id: 3, name: "Adidas Yeezy", price: 10000, stock: 2 }
    ],
    cart: []
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        const product = state.products.find(p => p.id === action.payload.id);

        if (!product || product.stock <= 0) return state;

        const existing = state.cart.find(item => item.id === product.id);

        return {
          ...state,
          products: state.products.map(p =>
            p.id === product.id
              ? { ...p, stock: p.stock - 1 }
              : p
          ),
          cart: existing
            ? state.cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
            : [
              ...state.cart,
              {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
              }
            ]
        };
      }


      case "REMOVE_FROM_CART": {
        // const product = state.products.find(p => p.id === action.payload.id);
        // if (!product || product.stock <= 0) return state;

        return {
          ...state,
          products: state.products.map(p =>
            p.id === action.payload.id
              ? { ...p, stock: p.stock + 1 }
              : p
          ),
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )

        };

      }

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);


  return (
    <html lang="en">
      <CartContext.Provider value={{ state, dispatch }}>
        <body className={inter.className}>{children}</body>
      </CartContext.Provider>
    </html>
  )
}
