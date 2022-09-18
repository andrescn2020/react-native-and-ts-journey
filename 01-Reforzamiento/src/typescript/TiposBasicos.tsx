export const TiposBasicos = () => {

    const nombre: string = "Fernando";
    const edad: number = 35;
    const estaActivo: boolean = false;

    const poderes: string[] = [];

    return (
        <>
            <h3>Tipos básicos</h3>
            {nombre},   {edad}, { (estaActivo) ? "Activo" : "Pasivo" }
            <br />
            {poderes.join(", ")}
        </>
    )
}
