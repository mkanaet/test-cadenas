import ProductListPage from './ProductListPage';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = "https://dummyjson.com/products";

function HomePage() {

    const [pageNumber, setPageNumber] = useState({
        id: "p1",
        page: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    });
    const [firstPage, setFirstPage] = useState(true)
    const [secondPage, setSecondPage] = useState(false)
    const [thirdPage, setThirdPage] = useState(false)
    const [fourthPage, setFourthPage] = useState(false)
    const [fifthPage, setFifthPage] = useState(false)
    const [sixtPage, setSixtPage] = useState(false)
    const [seventhPage, setSeventhPage] = useState(false)
    const [eightPage, setEightPage] = useState(false)
    const [ninethPage, setNinethPage] = useState(false)
    const [tenthPage, setTenthPage] = useState(false)

    const firstHandler = (event) => {
        event.preventDefault();
        setFirstPage(true)
        setPageNumber({
            id: "p1",
            page: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        })
    }

    const secondHandler = (event) => {
        event.preventDefault();
        setFirstPage(false)
        setSecondPage(true)
        setPageNumber({
            id: "p2",
            page: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        })
    }

    const thirdHandler = (event) => {
        event.preventDefault();
        setFirstPage(false)
        setThirdPage(true)
        setPageNumber({
            id: "p3",
            page: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        })
    }

    const fourthHandler = (event) => {
        event.preventDefault();
        setFirstPage(false)
        setFourthPage(true)
        setPageNumber({
            id: "p4",
            page: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
        })
    }

    const fifthHandler = (event) => {
        event.preventDefault();
        setFirstPage(false)
        setFifthPage(true)
        setPageNumber({
            id: "p5",
            page: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
        })
    }

    const sixtHandler = (event) => {
        event.preventDefault();
        setFirstPage(false)
        setSixtPage(true)
        setPageNumber({
            id: "p6",
            page: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
        })
    }
    const seventhHandler = (event) => {
        event.preventDefault();
        setFirstPage(false)
        setSeventhPage(true)
        setPageNumber({
            id: "p7",
            page: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70]
        })
    }

    const eightHandler = (event) => {
        event.preventDefault();
        setFirstPage(false)
        setEightPage(true)
        setPageNumber({
            id: "p8",
            page: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80]
        })
    }

    const ninethHandler = (event) => {
        event.preventDefault();
        setFirstPage(false)
        setNinethPage(true)
        setPageNumber({
            id: "p9",
            page: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
        })
    }

    const tenthHandler = (event) => {
        event.preventDefault();
        setFirstPage(false)
        setTenthPage(true)
        setPageNumber({
            id: "p10",
            page: [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
        })
    }

    return (
        <>
            {pageNumber.page.map((page, i) => {
                { return <ProductListPage page={page} key={i}></ProductListPage> }
            })}

            <div>
                <button onClick={firstHandler}>1</button>
                <button onClick={secondHandler}>2</button>
                <button onClick={thirdHandler}>3</button>
                <button onClick={fourthHandler}>4</button>
                <button onClick={fifthHandler}>5</button>
                <button onClick={sixtHandler}>6</button>
                <button onClick={seventhHandler}>7</button>
                <button onClick={eightHandler}>8</button>
                <button onClick={ninethHandler}>9</button>
                <button onClick={tenthHandler}>10</button>
            </div>
        </>
    );
}


export default HomePage;