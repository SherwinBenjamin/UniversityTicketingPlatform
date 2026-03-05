/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import data from "@/DataList/EventList";

import "./SportsEventPage.css";
function SportsEventPage() {
  const [eventData, setEventData] = React.useState<any>([]);
  const [listData, setListData] = React.useState<any>([]);
  const { id } = useParams();
  React.useEffect(() => {
    setEventData(data[10]?.events);
  }, []);
  React.useEffect(() => {
    eventData?.forEach((item: any) => {
      if (item.id === id) {
        setListData(item);
      }
    });
  });

  return (
    <div className="sports-eventsdata">
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
        <h1 className="sports-title"> {listData.title}</h1>
      </div>

      <div className="sports-content">
        <p className="sports-description">{listData.description}</p>
        <div className="sports-top">
          <div className="flexsports">
            <h3 className="sportshead ">Team size: </h3>
            <h4>{listData.teamSizeFrontend}</h4>
          </div>

          {listData.timeLimit && (
            <div className="flexsports">
              <h3 className="sportshead">Time Limit :</h3>
              <h4> {listData.timeLimit}</h4>
            </div>
          )}

          {/* <div className='flexsports'>
						<h3 className='sportshead'>Date:</h3>
						<h4> {listData.date}</h4>
					</div>

					<div className='flexsports'>
						<h3 className='sportshead'>Time:</h3>
						<h4> {listData.time}</h4>
					</div>

					<div className='flexsports'>
						<h3 className='sportshead'>Venue:</h3>
						<h4> {listData.venue}</h4>
					</div> */}
        </div>

        <div className="sportsMainContent">
          <h3 className="sportsSubtitle">General Rules :</h3>
          {listData.generalRules?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          <h3 className="sportsSubtitle">Rules :</h3>
          {listData.rules?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          {listData.scoringSystem && (
            <h3 className="sportsSubtitle">Scoring System :</h3>
          )}
          {listData.scoringSystem?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          <div className="sports-note">
            {" "}
            {/* <h3>Note : </h3> {listData.note} */}
          </div>
          <div className="sports-contact">
            <h3>Contact:</h3>
            {listData.contact?.map((contactitem: any) => (
              <div className="sports-items">
                {contactitem.name} : {contactitem.contact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportsEventPage;
