import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import AuthModal from "./AuthModal"; // Make sure this import path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: null });
  const dropdownRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", requiresAuth: false },
    { name: "Roadmap", path: "/roadmap", requiresAuth: true },
    { name: "Practice", path: "/practice", requiresAuth: true },
  ];

  const dropdownLinks = [
    { name: "View Profile", path: "/viewprofile" },
    { name: "Logout", path: "/logout" },
  ];

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const openAuthModal = (mode) => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: null });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsOpen(false);
    // Add any additional logout logic here
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    closeAuthModal();
  };

  return (
    <>
      <div className="top-0 max-w-7xl sticky pt-2 border-b lg:pt-4 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200 container mx-auto px-4 sm:px-6 lg:px-8 py-4 z-40 bg-[#0B1120]/60 backdrop-blur-lg">
        <Link to="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src="/owl.png"
              className="text-slate-900 dark:text-white w-auto h-10"
              alt="Logo"
            />
            <h1 className="font-semibold text-2xl text-white">HootCode</h1>
          </div>
        </Link>
        <div className="flex items-center">
          <nav className="hidden lg:flex gap-x-8">
            {navLinks
              .filter((item) => !item.requiresAuth || isAuthenticated)
              .map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={clsx(
                    "hover:text-sky-500 dark:hover:text-sky-400",
                    "text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
          </nav>

          {!isAuthenticated ? (
            <div className="flex gap-4 ml-8">
              <button
                onClick={() => openAuthModal("signin")}
                className="px-4 py-2 text-white hover:text-sky-400"
              >
                Sign In
              </button>
              <button
                onClick={() => openAuthModal("signup")}
                className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600"
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={isOpen}
                className="focus:outline-none"
              >
                <img
                  src="/default_avatar.png"
                  className="w-8 h-auto lg:ml-8 cursor-pointer"
                  alt="User avatar"
                />
              </button>
              {isOpen && (
                <div
                  ref={dropdownRef}
                  className="right-0 mt-2 absolute w-32 bg-slate-300 rounded-md shadow-lg z-10 text-[#0B1120]"
                >
                  {dropdownLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={item.name === "Logout" ? handleLogout : undefined}
                      className="block px-4 py-2 text-sm hover:bg-gray-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="lg:hidden ml-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              ☰
            </button>
            {mobileMenuOpen && (
              <nav className="absolute top-full left-0 w-full bg-[#0B1120] z-50">
                {navLinks
                  .filter((item) => !item.requiresAuth || isAuthenticated)
                  .map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                {!isAuthenticated && (
                  <>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        openAuthModal("signin");
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        openAuthModal("signup");
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </nav>
            )}
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={authModal.isOpen}
        mode={authModal.mode}
        onClose={closeAuthModal}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
};

export default Navbar;