import Banner from "../components/Banner.tsx";
import {useEffect} from "react";
import {toast} from "react-toastify";

export default function Home() {

    useEffect(() => {
        const imgElement = document.getElementById("about-image") as HTMLImageElement;

        const updateImage = () => {
            if (window.innerWidth >= 768 && imgElement) {
                imgElement.src = "/img/PhotoDesktop.webp";
            } else if (imgElement) {
                imgElement.src = "/img/PhotoMobile.webp";
            }
        };

        updateImage();
        window.addEventListener("resize", updateImage);
        return () => {
            window.removeEventListener("resize", updateImage);
        };

    }, []);

    useEffect(() => {
        const hasVisited = localStorage.getItem("welcomeToast");

        if (!hasVisited) {
            toast.info("Bienvenue chez moi !", {
                autoClose: 3000,
                position: "bottom-right",
            });

            localStorage.setItem("welcomeToast", "true");
        }
    }, []);

    return (
        <main className="flex flex-col items-center justify-center min-h-[100px] text-white">
            <Banner/>
            <div className="flex flex-col items-center justify-center m-[1rem] gap-[2rem] bg-opa
                            s:mx-10
                            m:mx-15
                            l:mx-[8%] l:gap-15
                            xl:mx-[15%]">
                <section className="skills flex flex-col items-center justify-center
                                    l:mt-10">
                    <h2 className="mb-[1rem] text-primary text-[1.2rem]
                                   l:text-[1.7rem]
                    ">Compétences</h2>
                    <div className="icons flex flex-row justify-center items-center flex-wrap gap-3 text-[12px]
                                   l:text-[1rem] l:gap-5">
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-html5-plain colored devIcon"></i>
                            <p>HTML</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-css3-plain colored devIcon"></i>
                            <p>CSS</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-javascript-plain colored devIcon"></i>
                            <p>Javascript</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-react-plain colored devIcon"></i>
                            <p>React</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-redux-plain colored devIcon"></i>
                            <p>Redux</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-cplusplus-plain colored devIcon"></i>
                            <p>C++</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-unrealengine-original devIcon"></i>
                            <p>Unreal</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-csharp-plain colored devIcon"></i>
                            <p>C#</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-unity-plain colored devIcon"></i>
                            <p>Unity</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-github-plain devIcon"></i>
                            <p>Github</p>
                        </div>
                    </div>
                </section>
                <section className="about flex flex-col items-center justify-center
                                    m:flex-row m:gap-10 l:gap-20 2xl:gap-40">
                    <div className="about-content flex flex-col items-center justify-center">
                        <h2 className="about-content-title mb-[1rem] text-primary text-[1.2rem]
                                       l: l:text-[1.7rem]" id="aboutMe">A propos de moi</h2>
                        <p className="about-content-text mb-[1rem] text-justify
                                    m:text-[1rem]
                                    l:text-[1.5rem]
                                    ">Anciennement technicien informatique,
                            j’ai choisi de
                            suivre ma passion en me reconvertissant dans le développement de jeux vidéo et l'intégration
                            web.

                            Curieux et toujours avide de nouveaux défis, j’aime explorer les dernières technologies pour
                            créer des expériences interactives immersives et innovantes.

                            Passionné de jeux vidéo, de golf et grand amoureux des chiens, je trouve mon inspiration
                            aussi bien dans la complexité du code que dans la nature et les loisirs qui m'entourent.</p>
                    </div>
                    <div className="pics-mobile aspect-square w-40 h-40 my-1
                                    m:h-80 m:w-60
                                    l:h-120 l:w-100
                                    xl:h-140 xl:w-120
                                    ">
                        <img src="/img/PhotoMobile.webp" alt="photo portrait Tetart Marc" id="about-image"
                             className="object-cover w-full h-full object-center ring-3 ring-primary rounded-xs"/>
                    </div>
                </section>
            </div>
        </main>
    )
}