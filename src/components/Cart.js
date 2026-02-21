
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList.js";
import { clearCard } from "../utils/cartSlice.js";

const Cart = () => {
    debugger;
    const cardItems = useSelector((store) => store?.cart?.items || []);
const category = {
    "itemCards" : cardItems
}
const dispatch = useDispatch();

const handleClearCart = () => {
    dispatch(clearCard());
}

    if (cardItems.length === 0) {
        return <div className="text-center m-4 p-4">Your cart is empty.</div>;
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl mb-4">Cart Items</h1>
            <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => handleClearCart()}
                       
                    >
                        Clear Cart
                    </button>
            <div className="w-6/12 m-auto">
        <ItemList category={category} />
            </div>
        </div>
    );
};

export default Cart;