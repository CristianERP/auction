const getAuctions = async () => {
    const data = await fetch("http://localhost:3333/subasta/api/auctions/all/all_auctions");
    const auctions = await data.json()
    return auctions
}

export default getAuctions