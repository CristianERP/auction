const getDepartamentos = async () => {
    const data = await fetch("https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json");
    const departamentos = await data.json()
    return departamentos
}

export default getDepartamentos