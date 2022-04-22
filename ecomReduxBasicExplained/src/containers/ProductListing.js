import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts, setLoader } from '../../src/reedux/actions/productAction';
import axios from "axios"
import ProductComponents from './ProductComponents';

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const loader = useSelector((state) => state.allProducts.Loader);

    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
        console.log(response.data)
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => { 
        if(products.length > 0) {
            dispatch(setLoader(false));
        }
    }, [products, dispatch]);

    return (
        <div className="ui grid container">
            {loader ? "Loading..." : <ProductComponents />}
        </div>
    )
}

export default ProductListing
