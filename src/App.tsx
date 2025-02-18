import {Outlet} from "react-router-dom";
import Header from "./components/common/Header.tsx";
import Footer from "./components/common/Footer.tsx";
import ModalForm from "./components/ModalForm.tsx";


export default function App () {

    return (
        <>
            <Header />
            <ModalForm />
            <Outlet />
            <Footer />
        </>
    )
}