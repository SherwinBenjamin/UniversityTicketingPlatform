/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import data from "@/DataList/EventList";

import "./GamingEventPage.css";
function GamingEventPage() {
  const [eventData, setEventData] = React.useState<any>([]);
  const [listData, setListData] = React.useState<any>([]);
  const { id } = useParams();
  React.useEffect(() => {
    setEventData(data[7]?.events);
  }, []);
  React.useEffect(() => {
    eventData?.forEach((item: any) => {
      if (item.id === id) {
        setListData(item);
      }
    });
  });

  return (
    <div className="gaming-eventsdata">
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
        <h1 className="gaming-title"> {listData.title}</h1>
      </div>

      <div className="gaming-content">
        <p className="gaming-description">{listData.description}</p>
        <div className="gaming-top">
          <div className="flexgaming">
            <h3 className="gaminghead ">Team size: </h3>
            <h4>{listData.teamSizeFrontend}</h4>
          </div>

          {/* <div className='flexgaming'>
						<h3 className='gaminghead'>Date:</h3>
						<h4> {listData.date}</h4>
					</div>

					<div className='flexgaming'>
						<h3 className='gaminghead'>Time:</h3>
						<h4> {listData.time}</h4>
					</div>

					<div className='flexgaming'>
						<h3 className='gaminghead'>Venue:</h3>
						<h4> {listData.venue}</h4>
					</div> */}
        </div>

        <div className="gamingMainContent">
          {listData.acceptance && (
            <h3 className="gamingSubtitle">Acceptance :</h3>
          )}
          {listData.acceptance?.map((acceptanceItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {acceptanceItem}
              </p>
            );
          })}

          <h3 className="gamingSubtitle">Rules :</h3>
          {listData.rules?.map((ruleItem: any, index: number) => {
            return (
              <p key={index} className="rules">
                {ruleItem}
              </p>
            );
          })}

          {listData.generalRules && (
            <h3 className="gamingSubtitle">General Rules :</h3>
          )}
          {listData.generalRules?.map((genRulesItems: any, index: number) => {
            return (
              <p key={index} className="rules">
                {genRulesItems}
              </p>
            );
          })}

          {listData.structure && (
            <h3 className="gamingSubtitle">Structure :</h3>
          )}
          {listData.structure?.map((structItems: any, index: number) => {
            return (
              <p key={index} className="rules">
                {structItems}
              </p>
            );
          })}

          {listData.gameModes && (
            <h3 className="gamingSubtitle">Game Modes :</h3>
          )}
          {listData.gameModes?.map((gameItems: any, index: number) => {
            return (
              <p key={index} className="rules">
                {gameItems}
              </p>
            );
          })}

          {listData.maps && <h3 className="gamingSubtitle">Maps :</h3>}
          {listData.maps?.map((mapItems: any, index: number) => {
            return (
              <p key={index} className="rules">
                {mapItems}
              </p>
            );
          })}

          {listData.bannedUtils && (
            <h3 className="gamingSubtitle">Banned Utility :</h3>
          )}
          {listData.bannedUtils?.map((bannedItems: any, index: number) => {
            return (
              <p key={index} className="rules">
                {bannedItems}
              </p>
            );
          })}

          {listData.operatorSkills && (
            <h3 className="gamingSubtitle">Operator Skills :</h3>
          )}
          {listData.operatorSkills?.map((opItems: any, index: number) => {
            return (
              <p key={index} className="rules">
                {opItems}
              </p>
            );
          })}

          {listData.lethalUtil && (
            <h3 className="gamingSubtitle">Lethal Utility :</h3>
          )}
          {listData.lethalUtil?.map((lethalItems: any, index: number) => {
            return (
              <p key={index} className="rules">
                {lethalItems}
              </p>
            );
          })}

          {listData.tacticalUtil && (
            <h3 className="gamingSubtitle">Tactical Utility :</h3>
          )}
          {listData.tacticalUtil?.map((tactItems: any, index: number) => {
            return (
              <p key={index} className="rules">
                {tactItems}
              </p>
            );
          })}

          {listData.perks && <h3 className="gamingSubtitle">Perks :</h3>}
          {listData.perks?.map((perksItems: any, index: number) => {
            return (
              <p key={index} className="rules">
                {perksItems}
              </p>
            );
          })}

          {listData.weaponPerks && (
            <h3 className="gamingSubtitle">Weapon Perks :</h3>
          )}
          {listData.weaponPerks?.map((weaponperksItems: any, index: number) => {
            return (
              <p key={index} className="rules">
                {weaponperksItems}
              </p>
            );
          })}

          {listData.scoreStreaks && (
            <h3 className="gamingSubtitle">Score Streaks :</h3>
          )}
          {listData.scoreStreaks?.map(
            (scorestreaksItems: any, index: number) => {
              return (
                <p key={index} className="rules">
                  {scorestreaksItems}
                </p>
              );
            }
          )}

          <div className="gaming-note">
            {" "}
            {/* <h3>Note : </h3> {listData.note} */}
          </div>
          <div className="gaming-contact">
            <h3>Contact:</h3>
            {listData.contact?.map((contactitem: any) => (
              <div className="gaming-items">
                {contactitem.name} : {contactitem.contact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamingEventPage;
