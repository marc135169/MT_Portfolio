import Banner from "../components/Banner.tsx";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[100px] text-white">
            <Banner/>
            <main className="flex flex-col items-center justify-center m-[1rem] gap-[2rem] bg-opa">
                <section className="skills flex flex-col items-center justify-center">
                    <h2 className="mb-[1rem]"><span className="text-primary">Compétences</span></h2>
                    <div className="icons flex flex-row justify-center items-center flex-wrap gap-3 text-[12px]">
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-html5-plain colored text-[45px]"></i>
                            <p>HTML</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-css3-plain colored text-[45px]"></i>
                            <p>CSS</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-javascript-plain colored text-[45px]"></i>
                            <p>Javascript</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-react-plain colored text-[45px]"></i>
                            <p>React</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-redux-plain colored text-[45px]"></i>
                            <p>Redux</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-cplusplus-plain colored text-[45px]"></i>
                            <p>C++</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-unrealengine-original text-[45px]"></i>
                            <p>Unreal</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-csharp-plain colored text-[45px]"></i>
                            <p>C#</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-unity-plain colored text-[45px]"></i>
                            <p>Unity</p>
                        </div>
                        <div className="icon flex flex-col items-center justify-center">
                            <i className="devicon-github-plain text-[45px]"></i>
                            <p>Github</p>
                        </div>
                    </div>
                </section>
                <section className="about flex flex-col items-center justify-center">
                    <div className="about-content flex flex-col items-center justify-center">
                        <h2 className="about-content-title mb-[1rem] text-primary" id="aboutMe">A propos de moi</h2>
                        <p className="about-content-text mb-[1rem]">Anciennement technicien informatique, j’ai choisi de
                            suivre ma passion en me reconvertissant dans le développement de jeux vidéo et l'intégration
                            web.

                            Curieux et toujours avide de nouveaux défis, j’aime explorer les dernières technologies pour
                            créer des expériences interactives immersives et innovantes.

                            Passionné de jeux vidéo, de golf et grand amoureux des chiens, je trouve mon inspiration
                            aussi bien dans la complexité du code que dans la nature et les loisirs qui m'entourent.</p>
                    </div>
                    <div className="pics-mobile aspect-square w-40 h-40 my-1">
                        <img src="/img/PhotoMobile.webp" alt="photo portrait Tetart Marc"
                             className="object-cover w-full h-full object-center ring-3 ring-primary rounded-xs" />
                    </div>
                </section>
            </main>
        </main>
    )
}