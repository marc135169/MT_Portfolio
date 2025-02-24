import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import ModalForm from "../ModalForm.tsx";
import 'animate.css'

export default function Header() {

    const location = useLocation();
    const navigate = useNavigate();
    const isActive = (path: string) => location.pathname === path ? "active-link" : "";


    useEffect(() => {
        if (location.hash) {
            console.log(location.hash);
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({behavior: 'smooth'});
                }, 100);
            }
        }
    }, [location]);

    const handleNavigation = (anchor: string) => {
        if (location.pathname === '/') {
            const element = document.getElementById(anchor);
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        } else {
            navigate(`/#${anchor}`);
        }
    }

    function handleTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const [toggleModal, setToggleModal] = useState(false);

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 1000);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (<>
            <header className="header w-full flex direction-row justify-between items-center bg-[#001932] fixed
                                shadow-[0_2px_1px_2px_rgba(0,0,0,0.3)] inset-shadow z-10">
                <nav className="navbar w-full flex direction-row justify-between items-center xl:mx-[15%]">
                    <Link to={"/"}><img
                        src="/img/Logo.png"
                        alt="Sunstra's Logo"
                        className="logo w-[3.125rem] h-[3.125rem] ml-[0.7rem] my-[0.5rem] logo-spin
                        s:ml-8.5
                        m:ml-13.5
                        l:ml-18.5
                        xl:ml-0
                        "
                        onClick={() => {
                            handleTop()
                        }}
                    /></Link>

                    <ul className="nav-links text-white flex direction-row gap-x-3 font-extrabold text-[11px] mx-[1rem]
                        s:mx-10
                        m:text-[12px] m:mx-15
                        l:text-[18px] l:mx-[8%] l:gap-x-10
                        xl:mx-0">
                        <li className={`nav-item ${isActive("/")}`}>
                            <Link to={"/"} className="nav-link" onClick={handleTop}>Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link no-select" onClick={() => handleNavigation("aboutMe")}>A propos</p>
                        </li>
                        <li className={`nav-item ${isActive("/project")}`}>
                            <Link to={"/project"} className="nav-link" onClick={handleTop}>Projets</Link>
                        </li>
                        <li className={`nav-item ${isActive("/cv")}`}>
                            <Link to={"/cv"} className="nav-link" onClick={handleTop}>CV</Link>
                        </li>
                        <li className={`nav-item ${animate ? "animate__animated animate__heartBeat" : ""}`}>
                            <a className="nav-link" href="#" onClick={() => setToggleModal(true)}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <ModalForm toggleModal={toggleModal} setToggleModal={setToggleModal}/>
        </>)
}