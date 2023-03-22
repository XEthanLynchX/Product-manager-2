import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAll = (props) => {
    const { product, setProduct} = props;

    
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res)
                setProduct(res.data.products)
                
            })
            .catch((err) => console.log(err));
    }, []); 

    return (
        <div>
            <header>
                All Products:
            </header>
            {
                product.map((aProduct, index) => (
                    <div key={index}>
                    
                        <Link to={`/products/${aProduct._id}`}>
                            {aProduct.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default DisplayAll;