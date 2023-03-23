import { NavLink } from "react-router-dom";
import classes from "./ProductDetails.module.css";

function ProductDetails(props) {
    return (
        <article className={classes.details}>
            <h2>{props.details.title}</h2>
            <img className={classes.mainimg} src={props.details.thumbnail} alt="Slika proizvoda"></img>
            <div className={classes.container}>
                <div className={classes.div}><img className={classes.img} src={props.details.images[0]} alt="Slika proizvoda"></img></div>
                <div className={classes.div}><img className={classes.img} src={props.details.images[1]} alt="Slika proizvoda"></img></div>
                <div className={classes.div}><img className={classes.img} src={props.details.images[2]} alt="Slika proizvoda"></img></div>
                <div className={classes.div}><img className={classes.img} src={props.details.images[3]} alt="Slika proizvoda"></img></div>
            </div>
            <p>Description:{props.details.description}</p>
            <p>Brand:{props.details.brand}</p>
            <p>Category:{props.details.category}</p>
            <p>Price:{props.details.price}</p>
            <p>Rating:{props.details.rating}</p>
            <p>In stock:{props.details.stock}</p>
            <br></br>
            <button className={classes.button}>
                <NavLink className={classes.link} to="..">Go back</NavLink>
            </button>
        </article>
    )
}
export default ProductDetails;