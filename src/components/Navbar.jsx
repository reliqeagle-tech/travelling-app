import { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";

const navItems = [
    { label: "Home", href: "/" },
    {
        label: "Destinations",
        href: "null",
        children: [
            { label: "India Tours", href: "null" },
            { label: "International", href: "null" },
            { label: "Himalayan Treks", href: "null" },
            { label: "Pilgrimage Yatras", href: "null" },
            { label: "Beach Escapes", href: "null" },
        ],
    },
    {
        label: "Packages",
        href: "null",
        children: [
            { label: "Honeymoon Packages", href: "null" },
            { label: "Family Tours", href: "null" },
            { label: "Group Travel", href: "null" },
            { label: "Corporate Trips", href: "null" },
        ],
    },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    // const [activeLink, setActiveLink] = useState("Home");
    const location = useLocation();
    const activeLink = navItems.find(item => item.href === location.pathname)?.label || "Home";

    return (
        <nav className="bg-white border-b border-teal-900/10 relative z-50 top-0 sticky">
            {/* Desktop Navbar */}
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 shrink-0">
                    <img src={assets.DDL_logo2} alt="Atithi Travel Yatra" className="w-[180px] h-auto" />
                </Link>

                {/* Desktop Links */}
                <ul className="hidden lg:flex items-center h-full">
                    {navItems.map((item) => (
                        <li
                            key={item.label}
                            className="relative h-full flex items-center"
                            onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                to={item.href}
                                // onClick={() => setActiveLink(item.label)}
                                className={`flex items-center gap-1.5 px-4 h-full text-[13px] font-semibold tracking-widest uppercase transition-colors duration-200 border-b-[2.5px] ${activeLink === item.label
                                    ? "text-amber-600 border-amber-500"
                                    : "text-teal-800 border-transparent hover:text-amber-600 hover:border-amber-500"
                                    }`}
                            >
                                {item.label}
                                {item.children && (
                                    <span
                                        className={`text-[9px] opacity-60 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""
                                            }`}
                                    >
                                        ▾
                                    </span>
                                )}
                            </Link>

                            {/* Dropdown */}
                            {item.children && (
                                <div
                                    className={`absolute top-full left-0 min-w-[200px] bg-white border border-teal-900/15 border-t-2 border-t-amber-500 rounded-b-lg shadow-lg transition-all duration-200 ${activeDropdown === item.label
                                        ? "opacity-100 visible translate-y-0"
                                        : "opacity-0 invisible -translate-y-1.5"
                                        }`}
                                >
                                    {item.children.map((child, i) => (
                                        <Link
                                            to={child.href}
                                            className={`block px-4 py-2.5 text-[12px] font-semibold tracking-[0.05em] uppercase text-teal-800 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-150 ${i > 0 ? "border-t border-teal-900/8" : ""
                                                }`}
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Right Side */}
                <div className="hidden lg:flex items-center gap-3">
                    {/* Search */}
                    <button className="w-9 h-9 rounded-full border border-teal-900/20 flex items-center justify-center text-teal-800 hover:bg-teal-50 hover:border-teal-700 transition-all duration-200">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </button>

                    <div className="w-px h-7 bg-teal-900/12" />

                    {/* CTA */}
                    <Link to="/contact" className="bg-teal-800 text-white text-[12px] font-bold tracking-widest uppercase px-5 py-3 rounded hover:bg-amber-600 transition-colors duration-200">
                        Book Now
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden flex flex-col gap-1.5 p-2 text-teal-800"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t border-teal-900/10 px-6 py-4 flex flex-col gap-1">
                    {navItems.map((item) => (
                        <div key={item.label}>
                            <Link
                                to={item.href}
                                // onClick={() => setActiveLink(item.label)}
                                className={`block py-2.5 text-[13px] font-semibold tracking-widest uppercase transition-colors ${activeLink === item.label ? "text-amber-600" : "text-teal-800 hover:text-amber-600"
                                    }`}
                            >
                                {item.label}
                            </Link>
                            {item.children && (
                                <div className="pl-4 flex flex-col gap-0.5 mb-1">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.label}
                                            to={child.href}
                                            className="block py-1.5 text-[12px] font-medium tracking-[0.05em] uppercase text-teal-700 hover:text-amber-600 transition-colors"
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="mt-3 pt-3 border-t border-teal-900/10">
                        {/* <button className="w-full bg-teal-800 text-white text-[12px] font-bold tracking-widest uppercase px-5 py-3 rounded hover:bg-amber-600 transition-colors duration-200">
                            Book Now
                        </button> */}
                        <Link to="/contact" className="w-full bg-teal-800 text-white text-[12px] font-bold tracking-widest uppercase px-5 py-3 rounded hover:bg-amber-600 transition-colors duration-200">
                            Book Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;