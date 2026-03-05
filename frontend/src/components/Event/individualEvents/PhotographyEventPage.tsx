/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import data from "@/DataList/EventList";

import "./PhotographyEventPage.css";
function PhotographyEventPage() {
  const [eventData, setEventData] = React.useState<any>([]);
  const [listData, setListData] = React.useState<any>([]);
  const { id } = useParams();
  React.useEffect(() => {
    setEventData(data[11]?.events);
  }, []);
  React.useEffect(() => {
    eventData?.forEach((item: any) => {
      if (item.id === id) {
        setListData(item);
      }
    });
  });

  return (
    <div className="photography-eventsdata">
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
        <h1 className="photography-title"> {listData.title}</h1>
      </div>

      <div className="photography-content">
        <p className="photography-description">{listData.description}</p>
        <div className="photography-top">
          <div className="flexphotography">
            <h3 className="photographyhead ">Team size: </h3>
            <h4>{listData.teamSizeFrontend}</h4>
          </div>

          {listData.timeLimit && (
            <div className="flexphotography">
              <h3 className="photographyhead">Time Limit :</h3>
              <h4> {listData.timeLimit}</h4>
            </div>
          )}

          {/* <div className='flexphotography'>
						<h3 className='photographyhead'>Date:</h3>
						<h4> {listData.date}</h4>
					</div>

					<div className='flexphotography'>
						<h3 className='photographyhead'>Time:</h3>
						<h4> {listData.time}</h4>
					</div>

					<div className='flexphotography'>
						<h3 className='photographyhead'>Venue:</h3>
						<h4> {listData.venue}</h4>
					</div> */}
        </div>

        <div className="photographyMainContent">
          {listData.theme && (
            <div className="photography-judgment">
              <h3 className="photographySubtitle">Theme :</h3>
              <p className="rules">{listData.theme}</p>
            </div>
          )}

          <h3 className="photographySubtitle">Guidelines :</h3>
          {listData.guidelines?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          <h3 className="photographySubtitle">Rules :</h3>
          {listData.rules?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          {listData.scoringSystem && (
            <h3 className="photographySubtitle">Scoring System :</h3>
          )}
          {listData.scoringSystem?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          <div className="photography-note">
            {" "}
            {/* <h3>Note : </h3> {listData.note} */}
          </div>
          <div className="photography-contact">
            <h3>Contact:</h3>
            {listData.contact?.map((contactitem: any) => (
              <div className="photography-items">
                {contactitem.name} : {contactitem.contact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotographyEventPage;
