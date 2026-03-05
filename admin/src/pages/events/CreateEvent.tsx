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
import useEvents from "@/features/Events/useEvents";
import useStaff from "@/features/Staffs/useStaff";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "name must be at least 2 characters.",
	}),
	event_code: z.string().min(1, {
		message: "event code must be at least 2 characters.",
	}),
	is_group_event: z.string(),
	club_name: z.string().min(2, {
		message: "select a club name",
	}),
	event_scope: z.string().min(2, {
		message: "select a scope of event",
	}),
	max_group_size: z.string(),
	event_mode: z.string().min(2, {
		message: "select any one mode of event",
	}),
	max_cap: z.string(),
});
function CreateEvent() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			event_code: "",
			is_group_event: "false",
			club_name: "",
			event_scope: "",
			max_group_size: "0",
			event_mode: "offline",
			max_cap: "0",
		},
	});

	const { createEvent, createLoading } = useEvents();
	const { staffData } = useStaff();
	function onSubmit(values: z.infer<typeof formSchema>) {
		const reqObj = {
			name: values.name,
			event_code: values.event_code?.trim(),
			is_group_event: values.is_group_event === "true",
			club_name: values.club_name,
			event_scope: values.event_scope,
			max_group_size: Number(values.max_group_size),
			mode: values.event_mode,
			max_cap: Number(values.max_cap),
			is_active: true,
		};
		createEvent(reqObj);

		// update feild with initial values
		form.reset();
	}

	const club_name = [
		"Music",
		"Dance",
		"Fashion",
		"MoviesAndDramatics ",
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

	return (
		<div className="bg-nBlack">
			<Header />
			{staffData.data.user.role === "admin" ? (
				<div>
					<div className="pl-[5rem] ">
						<h2 className="pt-[5rem]  text-blue-700 font-[montserrat] font-black text-[2.5rem]  tracking-tight">
							Create Event
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
											<FormLabel>Event Name</FormLabel>
											<FormControl>
												<Input
													placeholder="Event Name"
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
									name="event_code"
									render={({ field }) => (
										<FormItem className="w-[50%] p-2   ">
											<FormLabel>Event Code</FormLabel>
											<FormControl>
												<Input
													placeholder="Event Code"
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
									name="max_group_size"
									render={({ field }) => (
										<FormItem className="w-[50%] p-2   ">
											<FormLabel>Max Group Size</FormLabel>
											<FormControl>
												<Input
													placeholder="Max group size"
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
									name="max_cap"
									render={({ field }) => (
										<FormItem className="w-[50%] p-2   ">
											<FormLabel>Max capacity</FormLabel>
											<FormControl>
												<Input
													placeholder="Max capacity"
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
									name="is_group_event"
									render={({ field }) => (
										<FormItem className="w-[50%] p-2   ">
											<FormLabel>Group Event</FormLabel>
											<FormControl>
												<Select {...field} onValueChange={field.onChange}>
													<SelectTrigger
														className="border-0 bg-gray-500/20  rounded-[0.3rem]  px-2
                    h-[3rem] text-[1rem] "
													>
														<SelectValue
															placeholder="Group Event"
															className="border-0 bg-gray-500/20  rounded-[0.3rem]  px-2
                    h-[3rem] text-[1rem] "
														/>
													</SelectTrigger>
													<SelectContent className="text-white font-[montserrat] bg-gray-700  ">
														<SelectItem className="bg-gray-500/20" value="true">
															True
														</SelectItem>
														<SelectItem
															className="bg-gray-500/20"
															value="false"
														>
															False
														</SelectItem>
													</SelectContent>
												</Select>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="event_scope"
									render={({ field }) => (
										<FormItem className="w-[50%] p-2   ">
											<FormLabel>Event Scope</FormLabel>
											<FormControl>
												<Select {...field} onValueChange={field.onChange}>
													<SelectTrigger
														className="border-0 bg-gray-500/20  rounded-[0.3rem]  px-2
                    h-[3rem] text-[1rem] "
													>
														<SelectValue
															placeholder="Event scope"
															className="border-0 bg-gray-500/20  rounded-[0.3rem]  px-2
                    h-[3rem] text-[1rem] "
														/>
													</SelectTrigger>
													<SelectContent className="text-white font-[montserrat] bg-gray-700  ">
														<SelectItem className="bg-gray-500/20" value="srm">
															srm
														</SelectItem>
														<SelectItem
															className="bg-gray-500/20"
															value="non-srm"
														>
															non-srm
														</SelectItem>
														<SelectItem className="bg-gray-500/20" value="both">
															both
														</SelectItem>
													</SelectContent>
												</Select>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="event_mode"
									render={({ field }) => (
										<FormItem className="w-[50%] p-2   ">
											<FormLabel>Mode</FormLabel>
											<FormControl>
												<Select {...field} onValueChange={field.onChange}>
													<SelectTrigger
														className="border-0 bg-gray-500/20  rounded-[0.3rem]  px-2
                    h-[3rem] text-[1rem] "
													>
														<SelectValue
															placeholder="Event Mode"
															className="border-0 bg-gray-500/20  rounded-[0.3rem]  px-2
                    h-[3rem] text-[1rem] "
														/>
													</SelectTrigger>
													<SelectContent className="text-white font-[montserrat] bg-gray-700  ">
														<SelectItem
															className="bg-gray-500/20"
															value="offline"
														>
															offline
														</SelectItem>
														<SelectItem
															className="bg-gray-500/20"
															value="online"
														>
															online
														</SelectItem>
													</SelectContent>
												</Select>
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
								<div className="w-[100%] text-center bg-blue-700 rounded-[0.3rem] m-2 h-[3.5rem] flex justify-center items-center mb-[100px] ">
									<Button
										disabled={createLoading}
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

export default CreateEvent;
