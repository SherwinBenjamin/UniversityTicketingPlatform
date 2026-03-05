import eventList from "./EventList.js";

const createEventApi = `https://api.srmmilan.org/api/events/event`;

const createEvents = async () => {
	try {
		const eventsList = eventList;

		await Promise.all(
			eventsList.map(async (eventClub) => {
				for (const event of eventClub.events) {
					const reqObj = {
						name: event.title,
						event_code: event.id,
						is_group_event: event.isTeamEvent,
						club_name: eventClub.name,
						event_scope: event.scope,
						max_group_size: event.teamSizeBackend || 0,
						max_cap: 10000,
						mode: event.mode || "offline",
						is_active: true,
					};

					try {
						const response = await fetch(createEventApi, {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(reqObj),
						});

						console.log(response);
					} catch (error) {
						console.error("Error creating event:", error);
					}
				}
			})
		);
	} catch (error) {
		console.error("Error creating events:", error);
	}
};

createEvents();
