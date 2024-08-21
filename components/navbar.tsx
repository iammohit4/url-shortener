import Link from "next/link";
import React from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar bg-base-300 fixed top-0 left-0 z-30 border-b border-accent bg-opacity-50 backdrop-blur-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBars />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-md dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link href="/">Create</Link></li>
                        <li><Link href="/track">Track</Link></li>
                        <li><Link href="/about">About</Link></li>
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl">URL Shortener</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Create</Link></li>
                    <li><Link href="/track">Track</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <label className="btn swap swap-rotate bg-base-100">
                    <input type="checkbox" className="theme-controller" value="forest" />
                    <FaSun className="swap-on fill-current" />
                    <FaMoon className="swap-off fill-current" />
                </label>
            </div>
        </div>
    )
}

export default Navbar