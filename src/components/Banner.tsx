export default function Banner () {

    return (
        <section className="banner bg-[url(../../public/img/Banner.png)]
        bg-cover bg-center w-[100vw] h-[190px] mt-16 inset-shadow">
            <div className="banner-content flex flex-col text-white h-[100%] items-end">
                <h1 className="banner-name text-[1rem] mt-[0.5rem] mr-[7rem]">TETART <span className="sunRed">Marc</span></h1>
                <p className="banner-description mr-[3rem]">Developer <span className="sunRed">Web</span></p>
                <p className="banner-description mr-[1rem]"><span className="sunRed">Game</span> Developer</p>
            </div>
        </section>
    )
}