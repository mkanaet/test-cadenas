import { Outlet } from "react-router-dom";

function RootLayout() {
    return <>
        <main>
            <Outlet></Outlet>
        </main>
    </>
}
export default RootLayout;