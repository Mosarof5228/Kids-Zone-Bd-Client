

const BlogPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-white text-3xl font-bold">Welcome to My Blog</h1>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                    <div className="bg-white rounded-lg shadow-lg">

                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                            <p className="text-gray-600">An access token is a credential that grants a client permission to access protected resources on behalf of an authenticated user. It is included in requests to the server and is verified for validity and authorization.

                                Refresh Token: A refresh token is a long-lived credential issued alongside an access token. It is used to obtain a new access token when the current one expires. The refresh token is sent to the authorization server to request a new access token.</p>
                            <a href="#" className="mt-4 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Read More</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg">

                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Compare SQL and NoSQL databases?</h2>
                            <p className="text-gray-600">SQL databases are relational, structured, and use structured query language (SQL). They provide ACID compliance, support complex joins, and ensure data consistency. NoSQL databases are non-relational, schema-less, and use various data models. They offer high scalability, flexible schemas, eventual consistency, and are suitable for unstructured or rapidly changing data.</p>
                            <a href="#" className="mt-4 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Read More</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg">

                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">What is express js? What is Nest JS?</h2>
                            <p className="text-gray-600">Express.js is a minimalist web application framework for Node.js. It provides a simple and flexible way to build web servers and APIs, handling routing, middleware, and request/response handling with ease.</p>
                            <p className="text-gray-600">NestJS offers a structured architecture, dependency injection, built-in support for TypeScript, and seamless integration with various libraries and frameworks, making it ideal for enterprise-level applications.</p>
                            <a href="#" className="mt-4 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Read More</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg">

                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">What is MongoDB aggregate and how does it work?</h2>
                            <p className="text-gray-600">MongoDB aggregate is a powerful feature that allows for data processing and analysis. It utilizes a pipeline-based approach to perform complex operations, including filtering, grouping, sorting, and transforming data within a collection. Aggregation pipelines consist of stages that sequentially process the data, enabling advanced querying and analytics capabilities.</p>
                            <a href="#" className="mt-4 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Read More</a>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default BlogPage;