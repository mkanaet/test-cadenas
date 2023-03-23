import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams, useLoaderData } from "react-router-dom";
import classes from "./ProductListPage.module.css"


function ProductListPage() {
    const params = useParams()
    const products = useLoaderData();
    const firstTen = products.slice(0, 10)
    const secondTen = products.slice(10, 20)
    const thirdTen = products.slice(20, 30)

    const [firstPage, setFirstPage] = useState(true)
    const [secondPage, setSecondPage] = useState(false)
    const [thirdPage, setThirdPage] = useState(false)

    const firstHandler = (event) => {
        event.preventDefault();
        setFirstPage(true)
    }

    const secondHandler = (event) => {
        event.preventDefault();
        setFirstPage(false)
        setSecondPage(true)
    }

    const thirdHandler = (event) => {
        event.preventDefault();
        setFirstPage(false)
        setSecondPage(false)
        setThirdPage(true)
    }

    return (
        <>
            {firstPage && firstTen.map((prod) => {
                return (
                    <div className={classes.products} key={prod.id}>
                        <NavLink className={classes.navlinkimg} to={`${prod.id}`}><img src={prod.thumbnail} alt="Slika"></img></NavLink>
                        <div className={classes.about}>
                            <NavLink className={classes.navlink} to={`${prod.id}`}><h2>{prod.title}</h2></NavLink>
                            <div>{prod.description}</div>
                        </div>
                    </div>
                )
            })}
            {!firstPage && secondPage && secondTen.map((prod) => {
                return (
                    <div className={classes.products} key={prod.id}>
                        <NavLink className={classes.navlinkimg} to={`${prod.id}`}><img src={prod.thumbnail} alt="Slika"></img></NavLink>
                        <div className={classes.about}>
                            <NavLink className={classes.navlink} to={`${prod.id}`}><h2>{prod.title}</h2></NavLink>
                            <div>{prod.description}</div>
                        </div>
                    </div>
                )
            })}
            {!firstPage && !secondPage && thirdPage && thirdTen.map((prod) => {
                return (
                    <div className={classes.products} key={prod.id}>
                        <NavLink className={classes.navlinkimg} to={`${prod.id}`}><img src={prod.thumbnail} alt="Slika"></img></NavLink>
                        <div className={classes.about}>
                            <NavLink className={classes.navlink} to={`${prod.id}`}><h2>{prod.title}</h2></NavLink>
                            <div>{prod.description}</div>
                        </div>
                    </div>
                )
            })}

            <div className={classes.link}>
                <button className={classes.button} onClick={firstHandler}>1</button>
                <button className={classes.button} onClick={secondHandler}>2</button>
                <button className={classes.button} onClick={thirdHandler}>3</button>
            </div>

        </>
    );
}


export default ProductListPage;