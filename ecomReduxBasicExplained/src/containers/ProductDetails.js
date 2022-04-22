import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { selectedProduct } from '../src/reedux/actions/productAction';?
import { selectedProduct, setLoader } from '../../src/reedux/actions/productAction'

import axios from 'axios';

const ProductDetails = () => {

    const [returnedProductObject, setReturnedProductObject] = useState({});
    
    const product = useSelector((state) => state.product);
    console.log('initial --- ', product)
    const loader = useSelector((state) => state.allProducts.Loader);

    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchSingleProducts = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedProduct(response.data));
        // console.log();
    };

    useEffect(() => {
        fetchSingleProducts();
    }, []);

    useEffect(() => {
        setReturnedProductObject(product);
        if (Object.keys(product) !== {}) {
            dispatch(setLoader(false))
        }
    }, [dispatch]);

    console.log('product --- ', product)

    console.log("Selected Product", loader);

    return (
        <div>
            <div className="container">
                {loader ? "Loading..." : (
                    <div className="col-lg-8 border p-3 main-section bg-white">
                        <div className="row hedding m-0 pl-3 pt-0 pb-3">
                            {returnedProductObject?.title}
                        </div>
                        <div className="row m-0">
                            <div className="col-lg-4 left-side-product-box pb-3">
                                <img src={returnedProductObject?.image} className="border p-3" alt='' />
                                <span className="sub-img">
                                    <img src={returnedProductObject?.image} className="border p-2" alt='' />
                                    <img src={returnedProductObject?.image} className="border p-2" alt='' />
                                    <img src={returnedProductObject?.image} className="border p-2" alt='' />
                                </span>
                            </div>
                            <div className="col-lg-8">
                                <div className="right-side-pro-detail border p-3 m-0">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <span>Who What Wear</span>
                                            <p className="m-0 p-0">{returnedProductObject?.title}</p>
                                        </div>
                                        <div className="col-lg-12">
                                            <p className="m-0 p-0 price-pro">${returnedProductObject?.price}</p>
                                            <hr className="p-0 m-0" />
                                        </div>
                                        <div className="col-lg-12 pt-2">
                                            <h5>Product Detail</h5>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris.</span><hr className="m-0 pt-2 mt-2" />
                                        </div>
                                        <div className="col-lg-12">
                                            <p className="tag-section"><strong>Tag : </strong><a href>{returnedProductObject?.category}</a></p>
                                        </div>
                                        <div className="col-lg-12">
                                            <h6>Quantity :</h6>
                                            <input type="number" className="form-control text-center w-100" defaultValue={1} />
                                        </div>
                                        <div className="col-lg-12 mt-3">
                                            <div className="row">
                                                <div className="col-lg-6 pb-2">
                                                    <a href="#" className="btn btn-danger w-100">Add To Cart</a>
                                                </div>
                                                <div className="col-lg-6">
                                                    <a href="#" className="btn btn-success w-100">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductDetails
