import ProductDetails from "./ProductDetails";
import { useLoaderData } from "react-router-dom";

function SingleProductPage() {
    const data = useLoaderData()
    return (
        <ProductDetails details={data}></ProductDetails>
    )
}
export default SingleProductPage;

export async function loader({ request, params }) {
    const id = params.productId;
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return response;
}