import React from "react";
import RaceForm from "./RaceForm";
import RacerRow from "./RacerRow";

export default function RacerTable( { racers, handleFormSubmit }) {
    let headers = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor']
  return (
    <>
      <div>
        <h1 className="text-center">Driver Standings</h1>
      </div>
      <RaceForm handleFormSubmit={handleFormSubmit} />
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {racers.map((racer, i) => (
            <RacerRow key={i} racer={racer} />
          ))}
        </tbody>
      </table>
    </>
  );
}
