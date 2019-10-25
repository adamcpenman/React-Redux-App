import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchCharacter } from "./actions/potter";
import CharacterCard from "./Components/CharacterCard";

function App(props) {
  useEffect(() => {
    props.fetchCharacter();
  }, []);

  if (props.isCharacterLoading) {
    return <h2>Loading Data...</h2>;
  }

  return (
    <div className="card-container">
      {props.characterError && <p>{props.characterError}</p>}
      {props.characters.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          role={character.role}
          house={character.house}
        />
      ))}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    isCharacterLoading: state.isLoading,
    characters: state.character,
    characterError: state.error
  };
}

// const mapDispatchToProps = {
//   fetchCharacter
// };

export default connect(
  mapStateToProps,
  { fetchCharacter }
)(App);
