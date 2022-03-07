const getCategorias = async () => {
    const data = await fetch("http://localhost:3333/subasta/api/categories/all");
    const categorias = await data.json()
    return categorias
}

export default getCategorias