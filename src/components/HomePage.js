import ProductListPage from "./ProductListPage";
import { useLoaderData } from "react-router-dom"

function HomePage() {
    const products = useLoaderData();

    return (
        <div>
            <ProductListPage></ProductListPage>
        </div>)
}
export default HomePage;

export async function loader() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
}