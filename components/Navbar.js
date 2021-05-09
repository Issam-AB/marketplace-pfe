/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
	ChatIcon,
	MenuIcon,
	XIcon,
	ShoppingCartIcon,
	SearchIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const navigation = [
	{ name: "Dashboard", href: "#", current: true },
	{ name: "Team", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Navabar() {
	return (
		<Disclosure as="nav" className="bg-gray-800">
			{({ open }) => (
				<>
					<div className="max-w-7xl sm:px-6 lg:px-8 px-2 mx-auto">
						<div className="relative flex items-center justify-between h-16">
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
										className="lg:block h-50 hidden w-auto"
										src="/images/marketplace.png"
										alt="Workflow"
									/>
								</Link>
							</div>

							{/* <div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current
														? "bg-gray-900 text-white"
														: "text-gray-300 hover:bg-gray-700 hover:text-white",
													"px-3 py-2 rounded-md text-sm font-medium"
												)}
												aria-current={item.current ? "page" : undefined}
											>
												{item.name}
											</a>
										))}
									</div> */}

							<div className=" md:visible relative flex items-center invisible w-full max-w-md py-5 mt-1 rounded-md shadow-sm">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<SearchIcon className="h-5 mr-3 text-gray-500" />
								</div>
								<input
									type="text"
									name="price"
									id="price"
									className="sm:text-sm focus:outline-none flex-grow block w-full h-8 pl-10 pr-12 border-gray-300 rounded-md"
									placeholder="Search for anything"
								/>
								<div className="border-fuchsia-600 absolute right-0 flex items-center border-l-2">
									<select
										id="currency"
										name="currency"
										className="sm:text-sm focus:outline-none 2 h-full pr-2 mr-3 text-gray-500 bg-transparent border-transparent rounded-md"
									>
										<option>All Categories</option>
										<option>Books</option>
										<option>camera & photo</option>

										<option>Sporting Goods</option>
									</select>
								</div>
							</div>

							<div className="sm:static sm:inset-auto sm:ml-6 sm:pr-0 absolute inset-y-0 right-0 flex items-center pr-2">
								<Link href="/cart">
									<button className="hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white p-1 mx-2 text-gray-400 bg-gray-800 rounded-full">
										<span className="sr-only">View your shopping</span>

										<ShoppingCartIcon className="w-6 h-6" aria-hidden="true" />
									</button>
								</Link>
								<Link href="/cart">
									<button className="hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white p-1 mx-2 text-gray-400 bg-gray-800 rounded-full">
										<span className="sr-only">View your chat</span>

										<ChatIcon className="w-6 h-6" aria-hidden="true" />
									</button>
								</Link>
								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-3">
									{({ open }) => (
										<>
											<div>
												<Menu.Button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white flex text-sm bg-gray-800 rounded-full">
													<span className="sr-only">Open user menu</span>
													<img
														className="hover:scale-110 w-8 h-8 transition duration-150 transform rounded-full"
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
																		active ? "bg-gray-100" : "",
																		"block px-4 py-2 text-sm text-gray-700"
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
																	active ? "bg-gray-100" : "",
																	"block px-4 py-2 text-sm text-gray-700"
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
																	active ? "bg-gray-100" : "",
																	"block px-4 py-2 text-sm text-gray-700"
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

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}
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
