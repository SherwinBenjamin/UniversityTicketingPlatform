"use client";

import Header from "@/components/Header/Header";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useRegister from "@/features/Authentication/useRegister";
import useStaff from "@/features/Staffs/useStaff";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "name must be at least 2 characters.",
	}),
	email: z.string().email(),
	password: z.string().min(6, {
		message: "password must be at least 6 characters.",
	}),
	phone_number: z.string().min(10, {
		message: "phone number must be at least 10 characters.",
	}),
	club_name: z.string().min(2, {
		message: "select a club name",
	}),
	role: z.string().min(2, {
		message: "select a role",
	}),
});
function RegisterStaff() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			phone_number: "",
			club_name: "",
			role: "",
		},
	});

	const { registerStaff, staffRegisterLoading } = useRegister();

	function onSubmit(values: z.infer<typeof formSchema>) {
		const reqObj = {
			name: values.name,
			email: values.email,
			password: values.password,
			phone_number: Number(values.phone_number),
			club_name: values.club_name,
			role: values.role,
		};

		registerStaff(reqObj);
		form.reset();
	}

	const club_name = [
		"Music",
		"Dance",
		"Fashion",
		"Movies And Dramatics",
		"Literary",
		"CreativeArts",
		"Quiz",
		"Gaming",
		"SeldDefence",
		"Sports",
		"Rubiks",
		"Rotaract",
		"WomenEmpowerment",
		"Social",
		"Astrophilia",
		"Photography",
		"FunZonePublicity",
	];
	const { staffData } = useStaff();
	return (
		<div className="bg-nBlack">
			<Header />

			{staffData.data.user.role === "admin" ? (
				<div>
					<div className="pl-[5rem] ">
						<h2 className="pt-[5rem]  text-blue-700 font-[montserrat] font-black text-[2.5rem]  tracking-tight">
							Register Staff
						</h2>
					</div>

					<div className="px-[5rem]  ">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className=" text-white flex flex-wrap"
							>
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem className="w-[50%] p-2   ">
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input
													placeholder="Name"
													{...field}
													className="border-0 bg-gray-500/20  rounded-[0.3rem] px-2
                    h-[3rem] text-[1rem]  "
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem className="w-[50%] p-2   ">
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													placeholder="Email"
													{...field}
													className="border-0 bg-gray-500/20  rounded-[0.3rem] px-2
                    h-[3rem] text-[1rem]  "
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="phone_number"
									render={({ field }) => (
										<FormItem className="w-[50%] p-2   ">
											<FormLabel>Phone Number</FormLabel>
											<FormControl>
												<Input
													placeholder="Phone Number"
													{...field}
													className="border-0 bg-gray-500/20  rounded-[0.3rem] px-2
                    h-[3rem] text-[1rem]  "
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormItem className="w-[50%] p-2   ">
											<FormLabel>Password</FormLabel>
											<FormControl>
												<Input
													placeholder="password"
													type="password"
													{...field}
													className="border-0 bg-gray-500/20  rounded-[0.3rem] px-2
                    h-[3rem] text-[1rem]  "
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="club_name"
									render={({ field }) => (
										<FormItem className="w-[50%] p-2   ">
											<FormLabel>Club Name</FormLabel>
											<FormControl>
												<Select {...field} onValueChange={field.onChange}>
													<SelectTrigger
														className="border-0 bg-gray-500/20  rounded-[0.3rem]  px-2
                    h-[3rem] text-[1rem] "
													>
														<SelectValue
															placeholder="Club Name"
															className="border-0 bg-gray-500/20  rounded-[0.3rem]  px-2
                    h-[3rem] text-[1rem]  "
														/>
													</SelectTrigger>
													<SelectContent className="text-white font-[montserrat] bg-gray-700  ">
														{club_name.map((club) => {
															return (
																<SelectItem
																	className="bg-gray-500/20"
																	value={club}
																>
																	{club}
																</SelectItem>
															);
														})}
													</SelectContent>
												</Select>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="role"
									render={({ field }) => (
										<FormItem className="w-[50%] p-2   ">
											<FormLabel>Role</FormLabel>
											<FormControl>
												<Select {...field} onValueChange={field.onChange}>
													<SelectTrigger
														className="border-0 bg-gray-500/20  rounded-[0.3rem]  px-2
                    h-[3rem] text-[1rem] "
													>
														<SelectValue
															placeholder="Role"
															className="border-0 bg-gray-500/20  rounded-[0.3rem]  px-2
                    h-[3rem] text-[1rem]  "
														/>
													</SelectTrigger>
													<SelectContent className="text-white font-[montserrat] bg-gray-700  ">
														<SelectItem
															className="bg-gray-500/20"
															value="admin"
														>
															admin
														</SelectItem>

														<SelectItem
															className="bg-gray-500/20"
															value="viewer"
														>
															viewer
														</SelectItem>
														<SelectItem
															className="bg-gray-500/20"
															value="convenor"
														>
															convenor
														</SelectItem>
														<SelectItem
															className="bg-gray-500/20"
															value="scanner"
														>
															scanner
														</SelectItem>
													</SelectContent>
												</Select>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="w-[100%] text-center bg-blue-700 rounded-[0.3rem] m-2 h-[3.5rem] flex justify-center items-center mb-[100px] ">
									<Button
										disabled={staffRegisterLoading}
										className="text-[1.2rem] font-[montserrat] font-bold w-full"
										type="submit"
									>
										Submit
									</Button>
								</div>
							</form>
						</Form>
					</div>
				</div>
			) : (
				<h3 className="text-white text-[1.5rem] font-[montserrat] font-bold text-center pt-[10rem]  ">
					You are not allowed to access this!! Go ahead!
				</h3>
			)}
		</div>
	);
}

export default RegisterStaff;
