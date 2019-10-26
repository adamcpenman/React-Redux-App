import React from "react";
import styled from "styled-components";

const CARDDIV = styled.div`
  background: white;
  opacity: 0.7;
  margin: 30px 10px;
  padding: 5px;
  max-width: 90%;
  width: 400px;
  max-height: 165px;
  border-radius: 5px;
  box-shadow: 5px 5px 8px #000000;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-1rem) scale(1.03);
    box-shadow: 6px 6px 20px #000000;
  }
`;


const TeamCard = props => {
  return (
    <CARDDIV>
    <div className="characterCard">
      <div className="character-list grid-view">
        <h2 className="characterName"> Name: {props.name} </h2>
        <h3 className="characterRole"> Role: {props.role} </h3>
        <p className="characterHouse"> House: {props.house} </p>
      </div>
    </div>
    </CARDDIV>
  );
};

export default TeamCard;