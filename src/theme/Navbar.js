import React, {useCallback, useState, useEffect} from 'react';
import Logo from '@theme/Logo';
import { Transition } from '@headlessui/react'
import {useThemeConfig} from '@docusaurus/theme-common';

const DefaultNavItemPosition = 'right';

// If split links by left/right
// if position is unspecified, fallback to right (as v1)
function splitNavItemsByPosition(items) {
  const leftItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === 'left',
  );
  const rightItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === 'right',
  );
  return {
    leftItems,
    rightItems,
  };
}

export default function Navbar(props) {
  const {
    navbar: {items, hideOnScroll, style},
    colorMode: {disableSwitch: disableColorModeSwitch},
  } = useThemeConfig();
  const [sidebarShown, setSidebarShown] = useState(false);
  const [isMobileOpen, setMobileIsOpen] = useState(false);
  // const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  // const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll);

  // useLockBodyScroll(sidebarShown);

  const showSidebar = useCallback(() => {
    setSidebarShown(true);
  }, [setSidebarShown]);
  const hideSidebar = useCallback(() => {
    setSidebarShown(false);
  }, [setSidebarShown]);

  const {leftItems, rightItems} = splitNavItemsByPosition(items);

  return (
    <header>
      <div className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Logo imageClassName="h-8 w-auto sm:h-10" />
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button type="button" onClick={() => setMobileIsOpen(!isMobileOpen)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav className="md:flex space-x-10">
            {leftItems.map((item, i) => (
              <a href={item.to} className="text-base font-medium text-gray-500 hover:text-gray-900" key={i}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
            {rightItems.map((item, i) => (
              <a href={item.to} className={item.classNames} key={i}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <Transition
          show={isMobileOpen}
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden opacity-0 translate-y-1"
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Logo
                    imageClassName="h-8 w-auto sm:h-10"
                    titleClassName="navbar__title"
                    onClick={hideSidebar}
                  />
                </div>
                <div className="-mr-2">
                  <button type="button" onClick={() => setMobileIsOpen(!isMobileOpen)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    {/* <!-- Heroicon name: outline/x --> */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {leftItems.map((item, i) => (
                    <a key={i} href={item.to} className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                        <i className={item.icon}></i>
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {item.label}
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="hidden py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                {rightItems.map((item, i) => (
                  <a href={item.to} className="text-base font-medium text-gray-900 hover:text-gray-700" key={i}>
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a href="#" className="text-gray-900">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </header>
  )
}