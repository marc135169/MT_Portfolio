export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center h-screen text-white text-center px-5">
            <h1 className="text-6xl font-bold text-primary">404</h1>
            <p className="text-2xl mt-4">Oups ! Cette page n'existe pas.</p>
            <a href="/" className="mt-6 bg-primary text-white px-6 py-3 rounded hover:bg-primary/80 transition-colors">
                Retour à l'accueil
            </a>
        </main>
    );
}