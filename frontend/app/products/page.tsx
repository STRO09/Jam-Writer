import { useReducer, Dispatch} from "react";

export default function ProductsPage () { 

        const initialProducts = [
        {
            id : 1,
            name : "Oxfords Shoes",
            price : 7000,
            stock : 5

        }, {
            id : 2 , 
            name : "Nike Airforce 1",
            price : 5000,
            stock : 10
        },
        {
            id : 3 ,
            name : "Adidas Yeezy",
            price : 10000,
            stock : 2
        }
    ];



    return (
        <div> 
            <h1> Products Page</h1>
            {initialProducts.map((product) => {
                return (
                <div key= {product.id} className="border p-4 rounded-md"> 
                <h1> {product.id} : {product.name} </h1>
                <p> Price : {product.price} </p>
                <p> Stock : {product.stock} </p>
                </div>
                )
            } )}
        </div>
    );

}