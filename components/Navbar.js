/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  ChatIcon,
  MenuIcon,
  XIcon,
  ShoppingCartIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Product', href: '#', current: true },
  { name: 'Account', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navabar() {
  return (
    <Disclosure as="nav" className="bg-marketplace_blue">
      {({ open }) => (
        <>
          <div className=" sm:px-6 lg:px-8 px-2 mx-auto">
            <div className="relative p-1 flex-grow py-2 flex items-center justify-between h-16">
              <div className="sm:hidden absolute inset-y-0 left-0 flex items-center">
                {/* Mobile menu button*/}
                <Disclosure.Button className="hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white inline-flex items-center justify-center p-2 text-gray-400 rounded-md">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="hover:scale-110 flex items-center flex-shrink-0 transition duration-150 transform">
                <Link href="/">
                  <img
                    className="lg:block h-50 hidden w-auto  -ml-5"
                    src="/images/marketplace.png"
                    alt="Workflow"
                  />
                </Link>
              </div>

              {/* Search bar */}
              <div className="relative hidden sm:flex items-center h-10 rounded-md flex-grow  cursor-pointer bg-green-700 hover:bg-green-900">
                <div className="border-fuchsia-600 absolute left-0 flex items-center border-l-2 bg-gray-200">
                  <select
                    id="currency"
                    name="currency"
                    className="sm:text-sm focus:outline-none 2  pr-2 h-10 text-gray-900 bg-transparent border-transparent rounded-md"
                  >
                    <option>All Categories</option>
                    <option>Books</option>
                    <option>camera & photo</option>

                    <option>Sporting Goods</option>
                  </select>
                </div>
                <input
                  className="h-full p-2 w-6 flex-grow focus:outline-none flex-shrink rounded-l-md pl-36"
                  type="text"
                  placeholder="Search for anyting..."
                />
                <SearchIcon className="h-12 p-4 text-white" />
              </div>
              {/* Left */}
              <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                <div className="link">
                  <p>hello Issam Aboulfadl</p>
                  <p className="font-extrabold md:text-sm">Account & Lists</p>
                </div>
                <div className="link">
                  <p>Returns</p>
                  <p className="font-extrabold md:text-sm">& Orders</p>
                </div>

                <div className="relative link flex items-center">
                  <span className="absolute top-0 right-0 md:right-10 h-4 w-4 rounded-full bg-green-700 text-center text-white ">
                    0
                  </span>
                  <ShoppingCartIcon className="h-10" aria-hidden="true" />
                  <p className=" hidden md:inline font-extrabold md:text-sm mt-2">
                    Basket
                  </p>
                </div>

                <div className=" relative link  flex items-center">
                  <ChatIcon className="h-10" aria-hidden="true" />
                  <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                    chat
                  </p>
                </div>
              </div>

              <div className="sm:static sm:inset-auto sm:ml-6 sm:pr-0 absolute z-40 inset-y-0 right-0 flex items-center pr-2">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="focus:outline-none invisible md:visible focus:ring-2  focus:ring-offset-gray-800 focus:ring-white flex text-sm bg-gray-800 rounded-full">
                          <img
                            className="hover:scale-110  h-10 transition duration-150 transform rounded-full invisible md:visible"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg"
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <Link href="/profile">
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Your Profile
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>
          {/* Bottom Nav */}
          <div className="flex items-center bg-marketplace_blue-light text-white text-sm space-x-3 p-2 pl-6">
            <p className="link flex items-center">
              <MenuIcon className="h-6 mr-1" />
              Alt
            </p>
            <p className="link">Advertisement</p>
            <p className="link">Customer Service</p>
            <p className="link">Today's Deals</p>
            <p className="link hidden lg:inline-flex">Electronics</p>
            <p className="link hidden lg:inline-flex">Food & Grocery</p>
            <p className="link hidden lg:inline-flex">Prime</p>
            <p className="link hidden lg:inline-flex">Buy Again</p>
            <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
            <p className="link hidden lg:inline-flex">Health & Personal Care</p>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
