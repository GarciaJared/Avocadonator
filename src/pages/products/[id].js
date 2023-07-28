import React from "react";
import {useRouter} from "next/router"

const ProductItem = () => {
const {query} = useRouter();

    return (
        <div>
            <h1>Product Item: {query.id}</h1>
        </div>
    );
}
export default ProductItem;