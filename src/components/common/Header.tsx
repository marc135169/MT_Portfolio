import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";


export default function Header () {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.hash) {
            console.log(location.hash);
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const handleNavigation = (anchor: string) => {
        if (location.pathname === '/') {
            const element = document.getElementById(anchor);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(`/#${anchor}`);
        }
    }

    function handleTop() {
        window.scrollTo(0, 0);
    }


    return (
        <header className="header w-full flex direction-row justify-between items-center bg-[#001932] fixed
                            shadow-[0_2px_1px_2px_rgba(0,0,0,0.3)] inset-shadow">
            <nav className="navbar w-full flex direction-row justify-between items-center">
                <a href="#"><img
                    src="/img/Logo.png"
                    alt="Sunstra's Logo"
                    className="logo w-[3.125rem] h-[3.125rem] ml-[1rem] my-[0.5rem] logo-spin"
                /></a>

                <ul className="nav-links text-white flex direction-row gap-x-3 font-extrabold text-[12px] mx-[1rem]">
                    <li className="nav-item ">
                        <Link to={"/"} className="nav-link" onClick={handleTop}>Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link" onClick={() => handleNavigation("aboutMe")}>A propos</p>
                    </li>
                    <li className="nav-item">
                        <Link to={"/project"} className="nav-link">Projet</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/cv"} className="nav-link">CV</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}