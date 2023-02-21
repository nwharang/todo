/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot } from '../astro.005f464e.mjs';
import 'html-escaper';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$a = createAstro();
const $$ThemeSwicher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ThemeSwicher;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<button id="themeSwitcher" class="fixed md:bottom-5 md:right-5 right-3 bottom-3 w-10 h-10 flex z-50 rounded-full">\n  <svg class="p-2 bg-black dark:bg-white rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <path class="dark:hidden fill-white" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"></path>\n    <path class="hidden dark:block fill-black" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"></path>\n  </svg>\n</button>\n<script>\n  const theme = (() => {\n    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n      return localStorage.getItem("theme");\n    }\n    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n      return "dark";\n    }\n    return "light";\n  })();\n\n  if (theme === "light") {\n    document.documentElement.classList.remove("dark");\n  } else {\n    document.documentElement.classList.add("dark");\n  }\n\n  window.localStorage.setItem("theme", theme);\n  function handleToggleClick() {\n    const element = document.documentElement;\n    element.classList.toggle("dark");\n    const isDark = element.classList.contains("dark");\n    localStorage.setItem("theme", isDark ? "dark" : "light");\n  }\n  document.querySelector("#themeSwitcher").addEventListener("click", () => {\n    setTimeout(() => {\n      handleToggleClick();\n    }, 100);\n  });\n<\/script>'])), maybeRenderHead($$result));
}, "C:/Project/todo/src/views/components/ui/ThemeSwicher.astro");

const navItems = [
    {
        "title": "Home",
        "path": "/"
    },
    {
        "title": "Dashboard",
        "path": "/dashboard"
    },
    {
        "title": "Team",
        "path": "/team"
    },
    {
        "title": "To Dos",
        "path": "/todos"
    }
];

function classCombie(...classes) {
    return classes.filter(Boolean).join(' ')
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$9 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate(_a || (_a = __template(["", '<nav class="bg-white dark:bg-slate-700">\n  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">\n    <div class="relative flex h-16 items-center justify-between">\n      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">\n        \n        <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">\n          <span class="sr-only">Open main menu</span>\n          \n          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">\n            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>\n          </svg>\n          \n          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">\n            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>\n          </svg>\n        </button>\n      </div>\n      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">\n        <div>\n          <div class="absolute top-0 sm:left-0 -translate-x-1/2 sm:translate-x-0 h-[4.3rem] text-lg font-bold box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-slate-200 px-2 sm:px-4 rounded-b-2xl flex justify-center items-center">\n            <p>Astro Todo</p>\n          </div>\n        </div>\n        <div class="hidden sm:ml-6 sm:flex flex-1 justify-end">\n          <div class="flex space-x-2">\n            ', '\n          </div>\n        </div>\n      </div>\n      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">\n        <button type="button" class="rounded-full bg-gray-300 dark:bg-gray-800 p-1 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">\n          <span class="sr-only">View notifications</span>\n          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">\n            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>\n          </svg>\n        </button>\n\n        <!-- Profile dropdown -->\n        <div class="relative ml-2 sm:ml-3">\n          <div>\n            <button type="button" class="rounded-full bg-gray-300 dark:bg-gray-800 p-1 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">\n              <span class="sr-only">Open user menu</span>\n              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">\n                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>\n              </svg>\n            </button>\n          </div>\n          <div class="absolute hidden right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" id="user-menu">\n            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>\n            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>\n            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>\n          </div>\n          <script>\n            document.querySelector("#user-menu-button").addEventListener("click", () => {\n              document.querySelector("#user-menu").classList.toggle("hidden");\n            });\n          <\/script>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  \n  <div class="hidden sm:hidden animation-controll" id="mobile-menu">\n    <div class="space-y-1 px-2 pt-2 pb-3">\n      ', `
    </div>
  </div>
  <script>
    document.querySelector('[aria-controls="mobile-menu"]').addEventListener("click", (e) => {
      let menuButton = document.querySelector('[aria-controls="mobile-menu"]');
      menuButton.querySelector("svg").classList.toggle("hidden");
      menuButton.querySelector("svg:nth-child(3)").classList.toggle("hidden");
      document.querySelector("#mobile-menu").classList.toggle("hidden");
    });
  <\/script>
</nav>`])), maybeRenderHead($$result), navItems.map((e) => {
    return renderTemplate`<a${addAttribute(e.path, "href")}${addAttribute(classCombie(e.path == Astro2.url.pathname ? "bg-gray-900 text-white" : "dark:text-gray-300 text-gray-700 hover:bg-gray-700 hover:text-white", "px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap"), "class")}>
                    ${e.title}
                  </a>`;
  }), navItems.map((e) => {
    return renderTemplate`<a${addAttribute(e.path, "href")}${addAttribute(classCombie(e.path == Astro2.url.pathname ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-black" : "dark:text-gray-200 text-gray-700 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black", "block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap"), "class")}>
              ${e.title}
            </a>`;
  }));
}, "C:/Project/todo/src/views/components/ui/Header.astro");

const $$Astro$8 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-white dark:bg-slate-700 p-4 shadow-[1px_-10px_15px_10px_rgba(0,0,0,0.1)] dark:shadow-[1px_-10px_15px_10px_rgba(55,65,85,0.3)]">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
    <div class="relative flex flex-1 items-center justify-center flex-col sm:flex-row divide-y sm:divide-y-0 divide-black/10 dark:divide-white/10">
      ${navItems.map((e) => renderTemplate`<div class="w-full text-center py-2">
            <a${addAttribute(e.path, "href")} class="dark:text-gray-200 text-gray-700 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap">
              ${e.title}
            </a>
          </div>`)}
    </div>
    <div class="flex flex-1 w-1/2 sm:basis-0 fill-black dark:fill-white justify-center gap-5 flex-wrap border-t border-black/10 dark:border-white/10 pt-3">
      <a href="https://www.facebook.com/">
        <svg class="w-6 h-6 hover:scale-125 animation-controll hover:fill-sky-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
      </a>
      <a href="https://www.instagram.com/">
        <svg class="w-6 h-6 hover:scale-125 animation-controll hover:fill-sky-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
      </a>
      <a href="https://twitter.com/?lang=en">
        <svg class="w-6 h-6 hover:scale-125 animation-controll hover:fill-sky-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
      </a>
      <a href="https://github.com">
        <svg class="w-6 h-6 hover:scale-125 animation-controll hover:fill-sky-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>
      <a href="https://discord.com/">
        <svg class="w-6 h-6 hover:scale-125 animation-controll hover:fill-sky-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>
      </a>
      <a href="https://discord.com/">
        <svg class="w-6 h-6 hover:scale-125 animation-controll hover:fill-sky-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
      </a>
    </div>
    <div class="mt-3 w-1/2 text-center sm:whitespace-nowrap">
      <p class="text-xs sm:text-sm text-gray-500">@2023 Bài thi giữa kì , All rights reserved</p>
    </div>
  </div>
</footer>`;
}, "C:/Project/todo/src/views/components/ui/Footer.astro");

const $$Astro$7 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="box-border">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="shortcut icon" href="/static/favicon.ico">
    <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png">
    <link rel="manifest" href="/static/site.webmanifest">
    <title>${title}</title>
  ${renderHead($$result)}</head>
  <body class="bg-slate-200 dark:bg-slate-900 text-dark dark:text-white min-h-screen flex flex-col">
    <header>
      ${renderComponent($$result, "Header", $$Header, {})}
      ${renderComponent($$result, "ThemeSwicher", $$ThemeSwicher, {})}
    </header>
    <main class="relative w-full animation-controll flex-1 py-4 flex flex-col justify-center items-center">
      ${renderSlot($$result, $$slots["default"])}
    </main>
    ${renderComponent($$result, "Footer", $$Footer, {})}
  </body></html>`;
}, "C:/Project/todo/src/views/layouts/MainLayout.astro");

const $$Astro$6 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead($$result)}<section class="relative px-6 lg:px-8 w-full flex flex-col sm:flex-row">
  <div class="flex flex-1 max-w-2xl basis-1/2 py-10 sm:py-48 lg:py-56">
    <div class="text-left">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 xs:text-5xl">Something to get your task done</h1>
      <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">A simple collaborative app for your team</p>
      <div class="mt-10 flex items-center gap-x-6">
        <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
        <a href="#" class="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">Sign in</a>
      </div>
    </div>
  </div>
  <div class="flex flex-1 justify-center items-center basis-1/2">
    <img src="/static/hero.webp" alt="hero">
  </div>
  <div class="absolute inset-x-0 top-0 h-full transform-gpu overflow-hidden -z-10">
    <svg class="relative left-[calc(50%-11rem)] h-full max-w-none -translate-x-1/3 -translate-y-44 blur-lg dark:blur-2xl rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
      <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"></path>
      <defs>
        <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
          <stop stop-color="#9089FC"></stop>
          <stop offset="1" stop-color="#FF80B5"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
</section>`;
}, "C:/Project/todo/src/views/components/index/hero.astro");

const $$Astro$5 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index;
  const { title } = navItems.find((e) => e.path == Astro2.url.pathname) || { title: "To Do App" };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, {})}` })}`;
}, "C:/Project/todo/src/views/pages/index.astro");

const $$file$4 = "C:/Project/todo/src/views/pages/index.astro";
const $$url$4 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { title } = navItems.find((e) => e.path == Astro2.url.pathname) || { title: "To Do App" };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1>${title}</h1>` })}`;
}, "C:/Project/todo/src/views/pages/dashboard.astro");

const $$file$3 = "C:/Project/todo/src/views/pages/dashboard.astro";
const $$url$3 = "/dashboard";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$List = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$List;
  const { header } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<article class="border dark:border-white/10 dark:bg-slate-700 bg-white min-h-[50vh] rounded-xl p-2 m-2 shadow-lg dark:shadow-black/50 flex-1">
  <h2 class="text-center w-full border-b border-black/20 dark:border-white/20">${header}</h2>
</article>`;
}, "C:/Project/todo/src/views/components/todos/List.astro");

const $$Astro$2 = createAstro();
const $$Todos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Todos;
  const View = ["To do", "In Progress", "Done"];
  const { title } = navItems.find((e) => e.path == Astro2.url.pathname) || { title: "To Do App" };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<section class="flex flex-col flex-1 w-full h-full">
    <h1 class="text-center text-xl p-2">To Do Lists</h1>
    <div class="flex flex-col flex-1 sm:flex-row gap-2 my-2">
      ${View.map((view) => {
    return renderTemplate`${renderComponent($$result2, "ListView", $$List, { "header": view })}`;
  })}
    </div>
  </section>` })}`;
}, "C:/Project/todo/src/views/pages/todos.astro");

const $$file$2 = "C:/Project/todo/src/views/pages/todos.astro";
const $$url$2 = "/todos";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Todos,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Team;
  const { title } = navItems.find((e) => e.path == Astro2.url.pathname) || { title: "To Do App" };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1>${title}</h1>` })}`;
}, "C:/Project/todo/src/views/pages/team.astro");

const $$file$1 = "C:/Project/todo/src/views/pages/team.astro";
const $$url$1 = "/team";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Team,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const { title } = navItems.find((e) => e.path == Astro2.url.pathname) || { title: "To Do App" };
  console.log(title);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1>Opp , Somethings when wrong</h1><h1>404 - Page Not Found</h1>` })}`;
}, "C:/Project/todo/src/views/pages/404.astro");

const $$file = "C:/Project/todo/src/views/pages/404.astro";
const $$url = "/404";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d };
