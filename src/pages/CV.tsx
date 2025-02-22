export default function CV() {
    return (<main className="w-full pt-20 mb-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <a
                href="/pdf/CV Marc.pdf"
                download
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors mb-5"
            >
                Télécharger le CV
            </a>
            <img src="/img/CV%20Marc.webp" alt="Cv Tetart Marc" className="max-w-[90%] xl:max-w-[50%]"/>

        </main>)
}