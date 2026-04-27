import Link from "next/link";

export default function Home() {
    return (
        <main className="home">
            <section className="hero">
                <h1>Librería Comics</h1>
                <p>
                    Proyecto realizado con Next.js consumiendo datos reales desde la REST API de WordPress.
                </p>

                <Link href="/proyectos" className="btn">
                    Ver proyectos
                </Link>
            </section>
        </main>
    );
}