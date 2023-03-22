import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {product, setProduct} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
            .then((res)=> {
                setProduct([...product, res.data]);
                console.log(res)}) 
            .catch(err=>console.log(err))
            setTitle("");
            setPrice("");
            setDescription("");

    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)}
                value={title}
                name="title"
                 />
            </p>
            <p>
                <label>Price</label><br />
                <input type="number" onChange={(e) => setPrice(e.target.value)} 
                value = {price}
                name="price"
                />
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)}
                value={description}
                name="description"
                 />
            </p>
            <input type="submit" value= "Create"/>
        </form>
    )
}

export default ProductForm;