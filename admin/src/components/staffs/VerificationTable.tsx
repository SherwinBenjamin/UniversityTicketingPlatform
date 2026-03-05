/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect } from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Check, Trash2, X } from "lucide-react";
import useStaffVerification from "@/features/Staffs/useStaffVerification";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import useStaff from "@/features/Staffs/useStaff";

function VerificationTable({ data }: any) {

	const {  staffData } = useStaff();

	
	const { verifyStaff, verifyLoading, denyLoading, denyStaff, deleteStaff } =
		useStaffVerification();

	const handleDeny = (id: string) => {
		denyStaff(id);
	};

	return (
		<div>
			<Table className="mt-[20px]  ">
				<TableHeader>
					<TableRow>
						<TableHead className="text-white text-[1rem] font-[montserrat] ">
							Name
						</TableHead>
						<TableHead className="text-white text-[1rem] font-[montserrat] ">
							Email
						</TableHead>
						<TableHead className="text-white text-[1rem] font-[montserrat] ">
							Phone number
						</TableHead>
						<TableHead className="text-white text-[1rem] font-[montserrat] ">
							Club
						</TableHead>
						<TableHead className="text-white text-[1rem] font-[montserrat] ">
							Role
						</TableHead>
						<TableHead className="text-white text-[1rem] font-[montserrat] ">
							Requested Time
						</TableHead>
						<TableHead className="text-white text-[1rem] font-[montserrat] ">
							verify
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((staff: any) => {
						return (
							<TableRow
								className="text-white text-[1rem] font-[montserrat] "
								key={staff.id}
							>
								<TableCell className="max-w-[200px] ">{staff.name}</TableCell>
								<TableCell>{staff.email}</TableCell>
								<TableCell>{staff.phone_number}</TableCell>
								<TableCell>{staff.club_name}</TableCell>
								<TableCell>{staff.role}</TableCell>
								<TableCell>
									{new Date(staff.created_at).toLocaleString()}
								</TableCell>
								<TableCell>
									{
										staffData?.data.user.role === 'viewer'?(
											<p>no action allowed</p>
										):(
<div className="flex ">
										{!staff.is_verified && !verifyLoading && (
											<Button
												onClick={() => verifyStaff(staff.id)}
												className="text-green-400 rounded-[0.4rem] bg-green-800/20 mx-2"
											>
												<Check />
											</Button>
										)}
										{staff.is_verified && !denyLoading && (
											<div>
												<Dialog>
													<DialogTrigger>
														<Button className="text-red-400 rounded-[0.4rem] bg-red-800/20 mx-2">
															<X />
														</Button>
													</DialogTrigger>
													<DialogContent className="text-white">
														<DialogHeader>
															<DialogTitle>
																Are you absolutely sure?
															</DialogTitle>
															<DialogDescription>
																This action cannot be undone. This will
																permanently delete your account and remove your
																data from our servers.
															</DialogDescription>
														</DialogHeader>
														<DialogFooter>
															<Button
																onClick={() => handleDeny(staff.id)}
																className="bg-red-700 hover:bg-red-800 text-white mt-[20px]  "
															>
																Deny Access
															</Button>
														</DialogFooter>
													</DialogContent>
												</Dialog>
											</div>
										)}

										<div>
											<Dialog>
												<DialogTrigger>
													<Button className="text-gray-400 rounded-[0.4rem] bg-gray-800/20 mx-2">
														<Trash2 />
													</Button>
												</DialogTrigger>
												<DialogContent className="text-white">
													<DialogHeader>
														<DialogTitle>Are you absolutely sure?</DialogTitle>
														<DialogDescription>
															This action cannot be undone. This will
															permanently delete your account and remove your
															data from our servers.
														</DialogDescription>
													</DialogHeader>
													<DialogFooter>
														<Button
															onClick={() => deleteStaff(staff.id)}
															className="bg-red-700 hover:bg-red-800 text-white mt-[20px]  "
														>
															Delete User
														</Button>
													</DialogFooter>
												</DialogContent>
											</Dialog>
										</div>
									</div>
										)
									}
									
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
}

export default VerificationTable;
