const NavButton = ({children}) => {
    return ( <a href="" className="z-50 flex items-center gap-2 p-2 transition-all rounded justify-items-center hover:ring-1 hover:ring-blue-400">
    {children}</a> );
}
 
export default NavButton;