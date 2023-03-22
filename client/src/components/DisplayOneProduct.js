import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const OneProduct = (props) => {

    const {id} = useParams();
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {     
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneProduct(res.data.oneProduct); // You have to have this .oneProduct at the end of res.data because of what you name it in the controller file and you want to step into the object that is console logged when you open the inspect element in the browser console. So for this one specifically in the console on our browser it gives us data then inside of data it gives us oneProduct. So we have to step into that object to get the data we want.
        })
        .catch((err) => {
            console.log(err);
        });
}, [id]);

    return (
        <div>
            <p>Title: {oneProduct.title}</p>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
        </div>
    );
};

export default OneProduct;