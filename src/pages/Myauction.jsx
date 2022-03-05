import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

const Msubs = () => {
    return (
        <div className="lg:col-span-2 xl:col-span-3">
        <div className="grid gap-2 md:grid lg:grid-cols-2 xl:grid-cols-3">
            <Card/>
        </div>
        
    </div>  
    );
}

export default Msubs;