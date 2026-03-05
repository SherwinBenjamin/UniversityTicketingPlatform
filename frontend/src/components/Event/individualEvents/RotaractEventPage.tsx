/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import data from "@/DataList/EventList";

import "./RotaractEventPage.css";
function RotaractEventPage() {
  const [eventData, setEventData] = React.useState<any>([]);
  const [listData, setListData] = React.useState<any>([]);
  const { id } = useParams();
  React.useEffect(() => {
    setEventData(data[12]?.events);
  }, []);
  React.useEffect(() => {
    eventData?.forEach((item: any) => {
      if (item.id === id) {
        setListData(item);
      }
    });
  });

  return (
    <div className="rotaract-eventsdata">
      {/* {eventCodeOfUserLoading && eventCode?.includes(Number(id)) ? (
				<Button
					className="bg-green-500   "
					onClick={() => handleRegisterForEvent()}
					disabled={!isAuthenticated || registerForEventLoading}
				>
					Register
				</Button>
			) : (
				<Button
					className="bg-green-500   "
					onClick={() => handleRegisterForEvent()}
					disabled={!isAuthenticated || registerForEventLoading}
				>
					unregister
				</Button>
			)}

			{user?.name} */}
      <div>
        <h1 className="rotaract-title"> {listData.title}</h1>
      </div>

      <div className="rotaract-content">
        <p className="rotaract-description">{listData.description}</p>
        <div className="rotaract-top">
          <div className="flexrotaract">
            <h3 className="rotaracthead ">Team size: </h3>
            <h4>{listData.teamSizeFrontend}</h4>
          </div>

          {/* <div className='flexrotaract'>
						<h3 className='rotaracthead'>Date:</h3>
						<h4> {listData.date}</h4>
					</div>

					<div className='flexrotaract'>
						<h3 className='rotaracthead'>Time:</h3>
						<h4> {listData.time}</h4>
					</div>

					<div className='flexrotaract'>
						<h3 className='rotaracthead'>Venue:</h3>
						<h4> {listData.venue}</h4>
					</div> */}
        </div>

        <div className="rotaractMainContent">
          {listData.theme && (
            <div className="rotaract-judgment">
              <h3 className="rotaractSubtitle">Theme :</h3>
              <p className="rules">{listData.theme}</p>
            </div>
          )}

          <h3 className="rotaractSubtitle">Event Description :</h3>
          {listData.eventDescription?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          {listData.rounds && <h3 className="rotaractSubtitle">Rounds :</h3>}
          {listData.rounds?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          <div className="rotaract-note">
            {" "}
            {/* <h3>Note : </h3> {listData.note} */}
          </div>
          <div className="rotaract-contact">
            <h3>Contact:</h3>
            {listData.contact?.map((contactitem: any) => (
              <div className="rotaract-items">
                {contactitem.name} : {contactitem.contact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RotaractEventPage;
