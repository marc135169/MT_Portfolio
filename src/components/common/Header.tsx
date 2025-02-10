export default function Header () {
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
                    <li className="nav-item">
                        <a className="nav-link" href="#">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">A propos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projet</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CV</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}