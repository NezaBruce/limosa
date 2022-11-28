import React from "react";
import { Flowbite } from "flowbite-react";
import Example from "../bang";
// import { Avatar } from "flowbite-react";
const Navbar = () => {
  const opts=["Toyota","Limus","Royce"];
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
                       <Example option="New" opts={opts}/>
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
