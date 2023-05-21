

const KidsCarSection = () => {
    return (
        <section className="bg-blue-200 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-center font-bold mb-6">Explore the World of Kid Cars</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg">
                        <img className="w-full h-56 object-cover rounded-t-lg" src="https://w7.pngwing.com/pngs/376/605/png-transparent-childrens-games-video-game-running-sports-car-game-car-accident-child-thumbnail.png" alt="Kid's Car 1" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Super Speed Racer</h3>
                            <p className="text-gray-600">Experience the thrill of speed with our Super Speed Racer toy car. Designed for ultimate performance and excitement.</p>
                            <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Learn More</a>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg">
                        <img className="w-full h-56 object-cover rounded-t-lg" src="https://play-lh.googleusercontent.com/ulRUYndA8DOis6nCpUsfi2JO5p4SsYZohyQ6OxicSl9qsbzVJapkcy76JLXPHPvfZw" alt="Kid's Car 2" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Off-Road Adventure</h3>
                            <p className="text-gray-600">Embark on thrilling off-road adventures with our Off-Road Adventure toy car. Conquer any terrain with style and fun.</p>
                            <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Learn More</a>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg">
                        <img className="w-full h-56 object-cover rounded-t-lg" src="https://play-lh.googleusercontent.com/5HXZop83yu6ctMzRejAWRZBcZSe0mzsNjrp0uguRijp7vSn1mm1lq1LA5KaFy3Wm_lJe=w526-h296-rw" alt="Kid's Car 3" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">City Cruiser</h3>
                            <p className="text-gray-600">Drive around the city in style with our City Cruiser toy car. Realistic features and sleek design for endless fun.</p>
                            <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Learn More</a>
                        </div>
                    </div>

                    {/* Repeat the above card for more kid's cars */}

                </div>
            </div>
        </section>
    );
};

export default KidsCarSection;