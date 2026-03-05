/* eslint-disable @typescript-eslint/no-explicit-any */

import { Skeleton } from "@/components/ui/skeleton";
import useEvents from "@/features/Events/useEvents";
import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { RefreshCcw, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import useStaff from "@/features/Staffs/useStaff";
import { Switch } from "@chakra-ui/react";
import FilterButton from "@/components/ui/FilterButton";
// import FilterButton from "@/components/ui/FilterButton";
// import { useSearchParams } from "react-router-dom";

interface Event {
	id: string;
	name: string;
	event_code: string;
	is_group_event: boolean;
	event_scope: string;
	club_name: string;
	max_group_size: number;
	reg_count: number;
	mode: string;
	max_cap: number;
	is_active: boolean;
	created_at: string;
	updated_at: string;
}

const ScopeFilters = [
	{
		label: "SRM",
		value: "srm",
	},
	{
		label: "Non-SRM",
		value: "non-srm",
	},
	{
		label: "Both",
		value: "both",
	},
	{
		label: "All Scopes",
		value: "all",
	},
];

const GroupFilters = [
	{
		label: "Group Event",
		value: "true",
	},
	{
		label: "Solo Event",
		value: "false",
	},
	{
		label: "All Events",
		value: "all",
	},
];

const ModeFilters = [
	{
		label: "Online Event",
		value: "online",
	},
	{
		label: "Offline Event",
		value: "offline",
	},
	{
		label: "All Modes",
		value: "all",
	},
];

interface ClubEvent {
	club_name: string;
	events: Event[];
}

function EventList() {
	const {
		eventData,
		getEventLoading,
		deleteEvent,
		deleteLoading,
		eventRefetch,
		activateEvent,
		activateEventLoading,
		deactivateEvent,
		deactivateEventLoading,
		updateMaxCap,
		updateMaxCapLoading,
	} = useEvents();
	const [deleteCode, setDeleteCode] = React.useState<string>("");
	const { staffData } = useStaff();
	const [newMaxCap, setNewMaxCap] = React.useState<string>("");

	const [scope, setScope] = React.useState<string>("all");
	const [mode, setMode] = React.useState<string>("all");
	const [isGroupEvent, setIsGroupEvent] = React.useState<string>("all");

	const clubEventsData = groupEventsByClub(eventData?.data);

	function groupEventsByClub(events: Event[]): ClubEvent[] {
		const clubMap: { [key: string]: Event[] } = {};

		// Group events by club name
		events?.forEach((event) => {
			if (!clubMap[event.club_name]) {
				clubMap[event.club_name] = [];
			}
			clubMap[event.club_name].push(event);
		});

		// Convert the grouped events into ClubEvent objects
		const clubEvents: ClubEvent[] = [];
		for (const clubName in clubMap) {
			clubEvents.push({ club_name: clubName, events: clubMap[clubName] });
		}

		return clubEvents;
	}

	const handleDeleteEvent = (code: string) => {
		if (deleteCode !== code) {
			toast({
				variant: "error",
				title: "Error",
				description:
					"Invalid Event code, Enter correct code to delete the event",
			});
			return;
		}
		deleteEvent(code);
		setDeleteCode("0");
	};
	const handleEventRefresh = () => {
		eventRefetch();
	};

	const handleactivateEvent = (
		recent_event_state: boolean,
		event_code: string
	) => {
		if (recent_event_state) {
			deactivateEvent(event_code);
		} else {
			activateEvent(event_code);
		}
	};

	const handleUpdateMaxCap = (event_code: string) => {
		if (newMaxCap === "0") {
			toast({
				variant: "error",
				title: "Error",
				description: "Enter the new max capacity to update",
			});
			return;
		}
		updateMaxCap({ event_code, new_cap: newMaxCap });
		setNewMaxCap("0");
	};

	// console.log(scope, mode, isGroupEvent);

	return (
		<div className="">
		
			<div className="pl-[5rem] flex justify-start items-baseline gap-x-3">
				<h2 className="pt-2  text-blue-700 font-[montserrat] font-black text-[2.5rem]  tracking-tight">
					Events List
				</h2>
				<Button
					disabled={getEventLoading}
					className="text-white bg-gray-500  rounded-[0.4rem] drop-shadow-lg  "
					onClick={handleEventRefresh}
				>
					<RefreshCcw />
				</Button>
				<div className=" h-full flex justify-around gap-4 items-center ml-auto mr-0 pr-4">
					<FilterButton
						filterField="scope"
						options={ScopeFilters}
						buttonLabel="Who Can Participate"
						setterFunction={setScope}
					/>
					<FilterButton
						filterField="mode"
						options={ModeFilters}
						buttonLabel="Event Mode"
						setterFunction={setMode}
					/>
					<FilterButton
						filterField="is_group_event"
						options={GroupFilters}
						buttonLabel="Event Type"
						setterFunction={setIsGroupEvent}
					/>
				</div>
			</div>

			<div>
				{clubEventsData.length === 0 || getEventLoading ? (
					<div>
						<Skeleton className="w-full h-[50px] bg-white/10 rounded-[0.5rem]  my-2" />
						<Skeleton className="w-full h-[50px] bg-white/10 rounded-[0.5rem]  my-2" />
						<Skeleton className="w-full h-[50px] bg-white/10 rounded-[0.5rem]  my-2" />
						<Skeleton className="w-full h-[50px] bg-white/10 rounded-[0.5rem]  my-2" />
						<Skeleton className="w-full h-[50px] bg-white/10 rounded-[0.5rem]  my-2" />
					</div>
				) : (
					<div>
						<Tabs
							defaultValue={clubEventsData[0]?.club_name}
							className="px-[4rem] pt-[1.5rem] w-full"
						>
							<TabsList className=" w-full overflow-x-scroll">
								{clubEventsData.map((clubEvent) => (
									<TabsTrigger
										key={clubEvent.club_name}
										className="text-white first:ml-[8rem]"
										value={clubEvent.club_name}
									>
										{clubEvent.club_name}
									</TabsTrigger>
								))}
							</TabsList>

							{clubEventsData.map((clubEvent) => {
								let filteredEvents = clubEvent.events;

								if (scope !== "all") {
									filteredEvents = filteredEvents.filter(
										(event) => event.event_scope === scope
									);
								}

								if (mode !== "all") {
									filteredEvents = filteredEvents.filter(
										(event) => event.mode === mode
									);
								}

								if (isGroupEvent !== "all") {
									filteredEvents = filteredEvents.filter(
										(event) => event.is_group_event.toString() === isGroupEvent
									);
								}

								return (
									<TabsContent
										key={clubEvent.club_name}
										value={clubEvent.club_name}
									>
										<Table className="mt-[20px]">
											<TableHeader>
												<TableRow>
													<TableHead className="text-white font-bold text-[1rem] font-[montserrat] ">
														Name
													</TableHead>
													<TableHead className="text-white font-bold text-[1rem] font-[montserrat] ">
														Event Code
													</TableHead>
													<TableHead className="text-white font-bold text-[1rem] font-[montserrat] ">
														Group
													</TableHead>
													<TableHead className="text-white font-bold text-[1rem] font-[montserrat] ">
														Club
													</TableHead>
													<TableHead className="text-white font-bold text-[1rem] font-[montserrat] ">
														Event Scope
													</TableHead>
													<TableHead className="text-white font-bold text-[1rem] font-[montserrat] ">
														Reg Count
													</TableHead>
													<TableHead className="text-white font-bold text-[1rem] font-[montserrat] ">
														max cap
													</TableHead>
													<TableHead className="text-white font-bold text-[1rem] font-[montserrat] ">
														mode
													</TableHead>
													{staffData?.data?.user?.role === "admin" && (
														<TableHead className="text-white font-bold text-[1rem] font-[montserrat] ">
															Actions
														</TableHead>
													)}
												</TableRow>
											</TableHeader>
											<TableBody className="">
												{filteredEvents?.map((event: any) => {
													return (
														<TableRow
															className="text-white text-[1rem] font-[montserrat] capitalize "
															key={event.id}
														>
															<TableCell className="max-w-[200px] ">
																{event.name}
															</TableCell>
															<TableCell>{event.event_code}</TableCell>
															<TableCell>
																{event.is_group_event.toString()}
															</TableCell>
															<TableCell>{event.club_name}</TableCell>
															<TableCell>{event.event_scope}</TableCell>
															<TableCell>{event.reg_count}</TableCell>
															<TableCell>{event.max_cap}</TableCell>
															<TableCell>{event.mode}</TableCell>
															<TableCell>
																{staffData?.data?.user?.role === "admin" && (
																	<div className="flex justify-start items-center">
																		<Dialog>
																			<DialogTrigger>
																				<Button className="text-gray-400 rounded-[0.4rem] bg-gray-800/20 mx-2">
																					<Trash2 />
																				</Button>
																			</DialogTrigger>
																			<DialogContent className="text-white">
																				<DialogHeader>
																					<DialogTitle>
																						Are you absolutely sure?
																					</DialogTitle>
																					<DialogDescription>
																						This action cannot be undone. This
																						will permanently delete your account
																						and remove your data from our
																						servers.
																					</DialogDescription>
																					<Input
																						placeholder="Enter Event code"
																						value={deleteCode}
																						onChange={(e) =>
																							setDeleteCode(e.target.value)
																						}
																					></Input>
																				</DialogHeader>
																				<DialogFooter>
																					<DialogClose asChild>
																						<Button
																							disabled={deleteLoading}
																							onClick={() =>
																								handleDeleteEvent(
																									event.event_code
																								)
																							}
																							className="bg-red-700 hover:bg-red-800 text-white mt-[20px]  "
																						>
																							Delete {event.name}
																						</Button>
																					</DialogClose>
																				</DialogFooter>
																			</DialogContent>
																		</Dialog>

																		<Dialog>
																			<DialogTrigger>
																				<Button className="text-gray-400 rounded-[0.4rem] bg-gray-800/20 mx-2">
																					max
																				</Button>
																			</DialogTrigger>
																			<DialogContent className="text-white">
																				<DialogHeader>
																					<DialogTitle>
																						Update Event
																					</DialogTitle>
																					<DialogDescription>
																						Enter the new max capacity which you
																						want to update in {event.name}
																					</DialogDescription>
																					<Input
																						placeholder="Enter new max capacity"
																						value={newMaxCap}
																						onChange={(e) =>
																							setNewMaxCap(e.target.value)
																						}
																					></Input>
																				</DialogHeader>
																				<DialogFooter>
																					<DialogClose asChild>
																						<Button
																							disabled={updateMaxCapLoading}
																							onClick={() =>
																								handleUpdateMaxCap(
																									event.event_code
																								)
																							}
																							className="bg-red-700 hover:bg-red-800 text-white mt-[20px]  "
																						>
																							Update {event.name}
																						</Button>
																					</DialogClose>
																				</DialogFooter>
																			</DialogContent>
																		</Dialog>

																		<Switch
																			disabled={
																				activateEventLoading ||
																				deactivateEventLoading
																			}
																			colorScheme="green"
																			size={"lg" as any}
																			defaultChecked={event.is_active}
																			onChange={() => {
																				handleactivateEvent(
																					event.is_active,
																					event.event_code
																				);
																			}}
																		/>
																	</div>
																)}
															</TableCell>
														</TableRow>
													);
												})}
											</TableBody>
										</Table>
									</TabsContent>
								);
							})}
						</Tabs>
					</div>
				)}
			</div>
		</div>
	);
}

export default EventList;
