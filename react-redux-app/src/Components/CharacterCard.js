import React from "react";


const TeamCard = props => {
  return (
    <div className="characterCard">
      <div className="character-list grid-view">
        <h2 className="characterName"> Name: {props.name} </h2>
        <h3 className="characterRole"> Role: {props.role} </h3>
        <p className="characterHouse"> House: {props.house} </p>
      </div>
    </div>
  );
};

export default TeamCard;