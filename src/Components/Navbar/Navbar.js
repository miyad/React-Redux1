import React, {useState} from 'react';
import appLogo from '../../Logo/main.png';
import Modal from "../Modal/Modal";

const Navbar = () => {
    const showMenu = () => {
        console.log("menu showing...");
        setOpenMenu(!openMenu);
    }
    const [openMenu, setOpenMenu] = useState(false);


    return (
        <div>
            <nav className="bg-white shadow-lg fixed w-screen py-4">
                <div className="px-4">
                    <div className="flex items-start md:items-center justify-between  px-8">
                        <div className="md:hidden grid grid-cols-1 items-center">
                                    <button onClick={()=> showMenu()} className="outline-none mobile-menu-button">
                                        <svg
                                            className="w-6 h-6 text-gray-500"
                                            x-show="!showMenu"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M4 6h16M4 12h16M4 18h16"/>
                                        </svg>
                                    </button>
                                    {openMenu?<div className="mx-w-8 mobile-menu">
                                        <ul className="">
                                            <li className="active"><a href="/" onClick={e=>e.preventDefault()}
                                                                      className="block text-sm px-2 py-4 hover:text-white hover:bg-green-500 font-semibold">Home</a>
                                            </li>
                                            <li><a href="/" onClick={e=>e.preventDefault()}
                                                   className="block text-sm px-2 py-4 hover:text-white hover:bg-green-500 transition duration-300 font-semibold">Services</a>
                                            </li>
                                            <li><a href="/" onClick={e=>e.preventDefault()}
                                                   className="block text-sm px-2 py-4 hover:text-white hover:bg-green-500 transition duration-300 font-semibold">About</a>
                                            </li>
                                            <li><a href="/" onClick={e=>e.preventDefault()}
                                                   className="block text-sm px-2 py-4 hover:text-white hover:bg-green-500 transition duration-300 font-semibold">
                                                Contact Us</a></li>
                                        </ul>
                                    </div>:null}
                                </div>

                            <div className={"flex mx-8"}>

                                    <a href="/" className="flex md:py-4 px-2" onClick={e=>e.preventDefault()}>
                                        <img src={appLogo} alt="Logo" className="h-8 w-8 mr-2"/>
                                        <span className="font-semibold text-gray-500 text-lg"
                                        >LeadShop</span
                                        >
                                    </a>
                            </div>
                        <div className={"hidden md:flex justify-between items-baseline md:w-1/2"}>
                                <a
                                    onClick={e=>e.preventDefault()}
                                    href="/"
                                    className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
                                >Home</a
                                >
                                <a
                                    onClick={e=>e.preventDefault()}
                                    href="/"
                                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                                >Services</a
                                >
                                <a
                                    onClick={e=>e.preventDefault()}
                                    href="/"
                                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                                >About</a
                                >
                                <a
                                    onClick={e=>e.preventDefault()}
                                    href="/"
                                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                                >Contact Us</a
                                >
                        </div>
                       <div className={"w-1/6 md:w-1/12 text-2xl "}>
                            <Modal/>
                       </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
