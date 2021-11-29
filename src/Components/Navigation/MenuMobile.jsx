import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const urlForm = "https://bit.ly/Contacter-Robin";

const MenuMobile = () => {
  return (
    <div className='w-auto text-right'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex justify-center w-full px-3 py-2 text-sm font-medium text-gray-200 border border-gray-300 bg-gray-900 rounded-sm bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            Menu
            <ChevronDownIcon
              className='w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'>
          <Menu.Items className='absolute right-0 w-72 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-4 py-4'>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='/#experiences'
                    className={`${
                      active ? "bg-darkGray text-white" : "text-gray-700"
                    } group flex rounded-sm items-center w-full px-5 py-4 text-2xl`}>
                    Expériences
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='/#projets'
                    className={`${
                      active ? "bg-darkGray text-white" : "text-gray-700"
                    } group flex rounded-sm items-center w-full px-5 py-4 text-2xl`}>
                    Projets
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='/#outils'
                    className={`${
                      active ? "bg-darkGray text-white" : "text-gray-700"
                    } group flex rounded-sm items-center w-full px-5 py-4 text-2xl`}>
                    Outils
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='/#motivations'
                    className={`${
                      active ? "bg-darkGray text-white" : "text-gray-700"
                    } group flex rounded-sm items-center w-full px-5 py-4 text-2xl`}>
                    Motivations
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className='p-2'>
              <button
                onClick={() => {
                  window.open(urlForm);
                }}
                href={urlForm}
                className='w-full bg-darkestGray text-white text-sm font-medium tracking-wider uppercase py-4 px-6 rounded-sm hover:opacity-90 transform hover:-translate-y-1 transition-all duration-100 ease-in-out'>
                Me contacter
              </button>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MenuMobile;
