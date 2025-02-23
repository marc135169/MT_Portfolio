export default function Banner () {

    return (
        <section className="banner bg-[url(/img/Banner.png)]
        bg-cover bg-center w-[100%] h-[190px] mt-16 inset-shadow
        l:h-[250px]">
            <div className="banner-content flex flex-col items-end text-white mx-5
                    s:mx-8
                    m:text-[1.2rem] m:mx-15
                    l:text-[25px] l:mx-[8%] l:justify-center l:my-15
                    xl:mx-[15%]">
                <h1 className="banner-name mt-[1.5rem] mr-[5rem] l:mr-[10rem] l:mt-0">TETART Marc</h1>
                <p className="banner-description mr-[2rem] l:mr-[4rem]"><span className="text-primary">Developer </span>Web</p>
                <p className="banner-description">Game<span className="text-primary"> Developer</span></p>
            </div>
        </section>
    )
}
