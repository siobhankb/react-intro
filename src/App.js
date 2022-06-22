import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Nav from "./components/Nav";
import RacerTable from "./components/RacerTable";

function App() {
  const [count, setCount] = useState(0);
  const [racers, setRacers] = useState([])
  const [season, setSeason] = useState(2022)
  const [round, setRound] = useState(9)

  useEffect(() => {
    console.log('App rendered!')
    fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let racerStandings =
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        setRacers(racerStandings);
      });
  }, [season, round])

  const handleButtonClick = (step) => {
    setCount(count + step);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newSeason = event.target.season.value
    const newRound = event.target.round.value
    setSeason(newSeason);
    setRound(newRound);
    console.log('form submitted')
}

  const myButtonSteps = [1, 10, 100, 1000];
  return (
    <div id="fromApp">
      <Nav brand="React Intro" />
      <div className="container">
        <h1>Hello World</h1>
        <h3>Current Value: {count}</h3>
        {myButtonSteps.map((step, i) => (
          <Button step={step} handleClick={handleButtonClick} key={i} />
        ))}
        <RacerTable racers={racers} handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

export default App;
