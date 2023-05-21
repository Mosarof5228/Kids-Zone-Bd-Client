

const KidsFeature = () => {
    return (
        <section className="bg-purple-200 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-center font-bold mb-6">Awesome Features for Kids</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Interactive Games</h3>
                            <p className="text-gray-600">Enjoy a wide variety of fun and interactive games that challenge and entertain kids of all ages.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg">

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Creative Activities</h3>
                            <p className="text-gray-600">Unleash your creativity with exciting activities like drawing, coloring, and crafting, all in a safe and enjoyable environment.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg">

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Educational Content</h3>
                            <p className="text-gray-600">Explore educational content that makes learning fun and engaging, covering various subjects and topics.</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default KidsFeature;