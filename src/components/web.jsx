import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BackButon } from './back_Buton';

/*The Web function is a function component that accepts a setView prop.
The setView prop is a function used to change the view of the web.*/
export function Web({ setView }) {

    /*this initializes the products state to null and makes a GET request to an API
    to get the list of products when the component is mounted, updating the products state with the data received.*/
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const productsAxios = axios
            .get("https://dummyjson.com/products")
            .then((res) => {
                console.log(res);
                setProducts(res.data.products);
            });
    }, []);

    return (
        <>
            <div>
                <h2>Hola soy una web</h2>
                <br />
                {products && (
                    <ul className="list-group list-group-horizontal">
                        {products.slice(0, 5).map((product, index) => (
                            <div key={index}>
                                <li className="list-group-item">
                                    <img src={product.thumbnail} class="card-img-top" style={{ width: "200px", height: "200px" }} />
                                </li>
                                <li className="list-group-item">
                                    <h5>{product.title}</h5>
                                </li>
                                <li className="list-group-item">
                                    <p>{product.description}</p>
                                </li>
                                <li className="list-group-item">
                                    <p>{product.price}</p>
                                </li>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
            <br></br>
            <BackButon setView={setView} />
        </>

    );
}