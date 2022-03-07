const Logout = ({email}) => {
    const handleClick = () =>{
        localStorage.removeItem('loggedUserApp')
        window.location.assign("/");
    }
    return ( 
        <button onClick={handleClick}>{email}</button>
     );
}
 
export default Logout;