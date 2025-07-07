import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Blogs: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="min-h-screen">
                <div className="min-h-screen flex flex-col">
                    {/* <NavBar /> */}
                    <main className="flex-grow pt-24 pb-12">
                        <div className="container-custom max-w-4xl mx-auto">
                            <h1 className="text-3xl md:text-4xl font-bold mb-8">Blogs</h1>

                            <div className="prose prose-lg max-w-none">
                                <section className="mb-8">
                                    <h2 className="text-2xl font-semibold mb-4">Blogs</h2>
                                </section>

                            </div>
                        </div>
                    </main>
                    {/* <Footer /> */}
                </div>
            </main>
            <Footer handlePostJobClick={() => {}} />
        </div>
    );
};

export default Blogs;        