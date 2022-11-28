import React from "react";

const Mn = () => {
  return (
    <div className="relative inline-block w-auto">
      <div>
        <button class="flex items-center space-x-1 text-gray-500 transition-colors duration-300 xl:text-sm 2xl:text-base dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 focus:outline-none">
          <span>Ecosystem</span>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="absolute left-0 z-20 py-1 mt-2 bg-white border border-gray-100 rounded-md shadow-xl dark:border-gray-700 xl:left-auto xl:right-0 dark:bg-gray-800"
        // style="display: none;"
      >
        <div class="overflow-y-auto w-60 max-h-96">
          <a
            target="_blank"
            href="https://www.material-tailwind.com/?ref=tailwindcomponents"
            class="flex items-center justify-between px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
          >
            <span>Material Tailwind</span>{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
            >
              <path
                d="M16.979 8.45L16.986 12H19V5H12V7.014L15.55 7.021L5 17.571L6.429 19L16.979 8.45Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>{" "}
          <a
            target="_blank"
            href="https://course-ui-ux.creative-tim.com/course/the-ultimate-uiux-design-course-tailwind-version?ref=tailwindcomponents"
            class="flex items-center justify-between px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
          >
            <span>Tailwind UI/UX Course</span>{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
            >
              <path
                d="M16.979 8.45L16.986 12H19V5H12V7.014L15.55 7.021L5 17.571L6.429 19L16.979 8.45Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>{" "}
          <a
            target="_blank"
            href="https://services.creative-tim.com/?ref=tailwindcomponents"
            class="flex items-center justify-between px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
          >
            <span>Custom Development</span>{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
            >
              <path
                d="M16.979 8.45L16.986 12H19V5H12V7.014L15.55 7.021L5 17.571L6.429 19L16.979 8.45Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mn;
