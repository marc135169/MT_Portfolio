export default function Footer () {
    return (
        <footer className="footer w-full flex flex-col justify-center items-center text-quinary bg-[#001932]
                shadow-[0_-15px_10px_-15px_rgba(0,0,0,0.3)] inset-shadow py-5">
            <div>
                <p>© 2025 Tetart <span className="sunRed">Marc</span></p>
            </div>
            <div className="flex gap-4 ">
                <a href="https://github.com/marc135169" target="_blank" rel="noopener noreferrer" className="">
                    <i className="icon fab fa-github text-xl"></i>
                </a>
                <a href="mailto:marc.tetart@proton.me">
                    <i className="icon fas fa-envelope text-xl"></i>
                </a>
                <a href="https://linkedin.com/in/marc-tetart" target="_blank" rel="noopener noreferrer">
                    <i className="icon fab fa-linkedin text-xl"></i>
                </a>
            </div>
        </footer>
    )
}