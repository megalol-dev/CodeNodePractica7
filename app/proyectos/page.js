async function getProyectos() {
    try {
        const res = await fetch("http://localhost/wordpresss/wp-json/wp/v2/manga", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Error al conectar con WordPress");
        }

        return await res.json();
    } catch (error) {
        return null;
    }
}

export default async function ProyectosPage() {
    const proyectos = await getProyectos();

    return (
        <main className="main">
            <h1>Proyectos / Comics</h1>

            {!proyectos && (
                <section className="estado-vacio">
                    <h2>WordPress no está disponible</h2>
                    <p>No se pudieron cargar los proyectos.</p>
                </section>
            )}

            {proyectos && proyectos.length === 0 && (
                <section className="estado-vacio">
                    <h2>No hay proyectos disponibles</h2>
                    <p>Añade contenido desde WordPress.</p>
                </section>
            )}

            {proyectos && proyectos.length > 0 && (
                <section className="grid">
                    {proyectos.map((proyecto) => (
                        <article key={proyecto.id} className="card">
                            <h2>{proyecto.title.rendered}</h2>
                            <p>{proyecto.descripcion_corta || "Sin descripción disponible"}</p>
                        </article>
                    ))}
                </section>
            )}
        </main>
    );
}