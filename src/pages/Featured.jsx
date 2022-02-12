import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

const Featured = () => {
    return ( 
        <>
        <div className="relative gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="mb-8 md:h-0 md:sticky top-4">
                <Sidebar />
            </div>

            <div className="lg:col-span-2 xl:col-span-3">
                <div className="grid gap-2 md:grid lg:grid-cols-2 xl:grid-cols-3">
                    <Card/>
                </div>
                
            </div>
        </div>
            
        </>
     );
}
 
export default Featured;