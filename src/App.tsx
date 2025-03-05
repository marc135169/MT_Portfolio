import {Outlet} from "react-router-dom";
import Header from "./components/common/Header.tsx";
import Footer from "./components/common/Footer.tsx";
import { ToastContainer } from 'react-toastify';


export default function App () {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <ToastContainer
                theme="dark"
                position="bottom-right"
                closeOnClick={true}
                style={{maxWidth:"80%"}}
            />
        </>
    )
}

