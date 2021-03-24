import React from "react";
import { mdiAccount } from "@mdi/js";

import PartyHaanImage from "app/asset/partyhaan.png";

import useMenuHandle from "app/hooks/useMenuHandle";

const Nav = ({ history }) => {
	
	const { showMenu, onMenuClick, onLogoutClick } = useMenuHandle(history);

	return (
		<div>
			<nav className="fixed z-10 bg-white justify-between shadow-lg flex flex-row h-12 lg:h-16 top-0 w-full ">
				<div className="w-1/3 flex justify-start pl-4">
					<img
						className="hidden lg:block w-auto h-full pt-2"
						src={PartyHaanImage}
						alt="nav logo"
					/>
				</div>
				<div className="flex items-center justify-center w-1/3">
					<span className="text-lg lg:text-xl font-bold text-black">
						ปาร์ตี้ทั้งหมด
					</span>
				</div>
				<div className="w-1/3 flex justify-end items-center pr-4">
					<button
						onClick={onMenuClick}
						className="bg-transparent hover:bg-transparent"
					>
						<svg
							className="h-6 w-6 lg:h-8 lg:w-8 fill-current text-black"
							viewBox="0 0 24 24"
						>
							<path d={mdiAccount}></path>
						</svg>
					</button>
				</div>
			</nav>
			<div
				className={`${
					showMenu ? "block" : "hidden"
				} fixed right-4 mt-10 lg:mt-14 w-32 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-20`}
			>
				<p
					onClick={onLogoutClick}
					className="block px-4 py-2 text-sm lg:text-md text-gray-700 hover:bg-gray-100 cursor-pointer"
				>
					Sign out
				</p>
			</div>
		</div>
	);
};

export default Nav;
