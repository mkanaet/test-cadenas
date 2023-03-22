import { useState, useEffect } from "react";
import SingleProductPage from "./SingleProductPage";
import { useParams } from "react-router-dom";

function ProductListPage(props) {
    const params = useParams()

    const URL = `https://dummyjson.com/products/${props.page}`;
    console.log(URL)
    const [productList, setProductList] = useState({
        "id": 0,
        "title": "",
        "description": "",
        "price": 0,
        "discountPercentage": 0,
        "rating": 0,
        "stock": 0,
        "brand": "",
        "category": "",
        "thumbnail": "",
        "images": ["", "", "", "", ""]
    })

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => setProductList(data))
    }, [URL])

    console.log(productList)

    return (
        <div>
            <h2>{productList.title}</h2>
            <img src={productList.images[0]} alt="Slika"></img>
            <div>{productList.description}</div>
        </div>
    );
}

export default ProductListPage;