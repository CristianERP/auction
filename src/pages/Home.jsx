import Card from '../components/Card';

const Home = () => {
    return (
        <>
            <section>
                <img src="../../assets/images/banner.png" alt="" className="object-cover w-full h-64 rounded-sm" />
            </section>
            <h1 className="my-4 text-2xl font-bold text-white">Destacados</h1>
            <section id="destacados" className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                <Card />
            </section>
        </>
    );
}

export default Home;