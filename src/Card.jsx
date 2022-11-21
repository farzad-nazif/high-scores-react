import React from "react";
import allCountryScores from "./scores";
import styled from "styled-components";

const Card = () => {
  let scores = [];
  allCountryScores.forEach((country) => {
    scores.push(country.scores);
  });
  scores.map((item) => item.sort(({ s: a }, { s: b }) => b - a));
  return (
    <div>
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
  margin: 1.2rem;
  border-style: solid;
  border-radius: 1.2rem;
  padding: 1.2rem;
  gap: 15rem;
  min-width: 20rem;
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 2rem;
  }
`;

const CardHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  border-radius: 2rem;
  padding: 2rem 6rem;
  margin: 2rem;
`;

export default Card;
