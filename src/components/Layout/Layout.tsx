import { Header } from "../Header/Header";
import { Outlet } from "react-router";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
    return(
        <>
            <Header />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </>
    )
}