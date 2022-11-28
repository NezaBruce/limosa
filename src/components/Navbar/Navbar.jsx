import React from "react";
import { Flowbite } from "flowbite-react";
// import { Avatar } from "flowbite-react";
const Navbar = () => {
  return (
    <div>
      <div
        className="sticky top-0 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900
         dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/76"
      >
        <div className="flex flex-wrap gap-2">
  {/* <Avatar
    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
    rounded={true}
  />
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" /> */}
</div>
        <div className="max-w-8xl mx-auto">
          <div className="py-3  border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-1 lg:mx-0">
            <div className="relative flex items-center">
              <a
                href="/"
                className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
              >
                <span className="sr-only">Limos</span>
                <img
                  className="h-12 w-12 rounded-full"
                  src="../../../business-class.svg"
                  alt="limos"
                />
              </a>
              <div className="relative lg:flex items-center ml-auto">
                <nav className="tex-sm leading-6 font-bold text-slate-700 dark:text-slate-200">
                  <ul className="flex space-x-8">
                    
                    <li>
                      <a
                        href="/"
                        className="hover:text-sky-500 text-black dark:hover:text-sky-400"
                      >
                        New
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com/?ref=top"
                        className="hover:text-sky-500 text-black dark:hover:text-sky-400"
                      >
                        Used
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="hover:text-sky-500 text-black dark:hover:text-sky-400"
                      >
                        Sell yours
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="hover:text-sky-500 text-black dark:hover:text-sky-400"
                      >
                        Top Brands
                      </a>
                    </li>
                    
                    <li className="pl-64">
                      <a
                        href="/"
                        className="hover:text-sky-500 text-black dark:hover:text-sky-400"
                      >
                        Sign in
                      </a>
                    </li>
                  </ul>
                  
<button id="dropdownInformationButton" dataDropdownToggle="dropdownInformation" 
className="text-white bg-blue-100 hover:bg-blue-200 focus:ring-4 focus:outline-none 
focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center 
dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
type="button">Dropdown header <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" 
viewBox="0 0 24 24" 
xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
</path></svg>
</button>

<div id="dropdownInformation" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
      <div>Bonnie Green</div>
      <div className="font-medium truncate">name@flowbite.com</div>
    </div>
    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
      <li>
        <a href="/" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="/" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="/" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div className="py-1">
      <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>

                </nav>
              </div>
              
              <button
                type="button"
                className="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300">
                <span className="sr-only">Search</span>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m19 19-3.5-3.5"></path>
                  <circle cx="11" cy="11" r="6"></circle>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
