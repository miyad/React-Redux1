import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <div className="bg-gray-200">
            <div className="bg-gray-800 text-white py-3 px-4 text-center fixed left-0 bottom-0 right-0 z-40">

                <a className="underline text-gray-200"
                   href="https://tailwindcomponents.com/component/404-error-page-design-in-tailwind-css-1">Component
                    details</a>
            </div>

            <div className="bg-gradient-to-r from-purple-300 to-blue-200">
                <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                        <div className="border-t border-gray-200 text-center pt-8">
                            <h1 className="text-9xl font-bold text-purple-400">404</h1>
                            <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
                            <p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not
                                exist. It might have been moved or deleted.</p>
                            <Link to="/">
                                <button
                                    className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
                                >
                                   RETURN HOME
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default NotFound;
