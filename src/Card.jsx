import React from "react";
import allCountryScores from "./scores";
import styled from "styled-components";
import { useState } from "react";

const Card = () => {
  const [scores, setScores] = useState([]);
  const [isChecked, setIsChecked] = useState(true);
  allCountryScores.forEach((country) => {
    scores.push(country.scores);
  });
  scores.map((item) =>
    item.sort(({ s: a }, { s: b }) => (isChecked ? b - a : a - b))
  );
  const ClickHandel = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="AllCards">
      <div>
        <button onClick={ClickHandel} className="Button">
          ascending to descending
        </button>
        <span className={isChecked ? "Descend" : "NotShowing"}>
          Showing Descend
        </span>
        <span className={!isChecked ? "Ascend" : "NotShowing"}>
          Showing Ascend
        </span>
      </div>

      {allCountryScores
        .sort(function (a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        })
        .map((country) => {
          return (
            <CardHolder>
              <h1>HIGH SCORES: {country.name}</h1>
              {country.scores.map((score) => {
                return (
                  <Country>
                    <h2>{score.n}:</h2>
                    <h3>{score.s}</h3>
                  </Country>
                );
              })}
            </CardHolder>
          );
        })}
    </div>
  );
};

const Country = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgb(114, 170, 188);
  margin: 1.2rem;
  border-style: solid;
  border-radius: 1.2rem;
  padding: 1.2rem;
  gap: 15rem;
  min-width: 20rem;
  h2 {
    font-size: 1.5rem;
    color: white;
  }
  h3 {
    font-size: 1.5em;
  }
`;

const CardHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  border-radius: 2rem;
  padding: 0rem 15rem 0rem 15rem;
  margin: 0.5rem;
`;

export default Card;
