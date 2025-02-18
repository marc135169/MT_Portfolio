export default function Banner () {

    return (
        <section className="banner bg-[url(/img/Banner.png)]
        bg-cover bg-center w-[100vw] h-[190px] mt-16 inset-shadow">
            <div className="banner-content flex flex-col  h-[100%] items-end text-white">
                <h1 className="banner-name text-[1rem] mt-[1.5rem] mr-[7rem]">TETART <span className="text-">Marc</span></h1>
                <p className="banner-description mr-[3rem]"><span className="text-primary">Developer </span> Web</p>
                <p className="banner-description mr-[1rem]"> Game <span className="text-primary"> Developer </span></p>

            </div>
        </section>
    )
}
