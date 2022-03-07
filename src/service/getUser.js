const getUser = () =>{
    const loggedUser = localStorage.getItem('loggedUserApp')
    return loggedUser ? JSON.parse(loggedUser) : null
}

export default getUser