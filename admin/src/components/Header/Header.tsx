/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu, User } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger } from "../ui/sheet";
import useLogout from "@/features/Authentication/useLogout";
import useStaff from "@/features/Staffs/useStaff";

function Header() {
	const { isLoading, logoutUser } = useLogout();
	const {staffData} = useStaff();
	return (
		<div className="fixed">
			<div className="flex justify-between  pl-6 w-screen">
				<Sheet>
					<SheetTrigger>
						<Menu color="white" size={32} />
					</SheetTrigger>
					<Sidebar />
				</Sheet>
					<div className="flex justify-center items-center ">
		<h3 className="text-white text-[1rem] font-[montserrat] font-bold flex justify-center items-center gap-x-2 "><User/> {staffData.data.user.name}</h3>
				<Button
					disabled={isLoading}
					onClick={() => {
						logoutUser();
					}}
					className=" text-white font-[montserrat] font-extrabold text-[1rem] bg-blue-700 rounded-[.2rem]  mx-4 my-4 hover:bg-blue-700/90   "
				>
					LOGOUT
				</Button>
					</div>
			</div>
		</div>
	);
}

export default Header;
