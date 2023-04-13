import "../styles.css";
import styled from "styled-components";
import { useState } from "react";
import Note from "./Note.js";

const STAFF = [
  { name: "F", showing: 0 },
  { name: "E", showing: 0 },
  { name: "D", showing: 0 },
  { name: "C", showing: 0 },
  { name: "B", showing: 0 },
  { name: "A", showing: 0 },
  { name: "G", showing: 0 },
  { name: "F", showing: 0 },
  { name: "E", showing: 0 },
  { name: "D", showing: 0 }
];

const RESULTS = ["background-color: green;", "background-color: red;"];
export default function Game({ children }) {
  // console.log([STAFF.showing]);
  const [noteToShow, setNoteToShow] = useState(0);
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(0);
  const [result, setResult] = useState(1);

  const randomNote = () => {
    // looping through staff, setting each value to 0
    if (!playing) {
      setPlaying(1);
    }
    for (let i = 0; i < STAFF.length; i++) {
      STAFF[i].showing = 0;
    }
    // getting the index of the new note
    let noteIndex = Math.floor(Math.random() * 10);
    // setting the showing property in staff to 1 on the note at the new index
    STAFF[noteIndex].showing = 1;
    // using the setState to
    setNoteToShow(STAFF[noteIndex]);
  };
  const checkAns = () => {
    let correct;
    let ans = document.querySelector("#choice").value;
    for (let i = 0; i < STAFF.length; i++) {
      if (STAFF[i].showing === 1) {
        console.log("HIT");
        correct = STAFF[i].name;
      }
    }
    if (ans === correct) {
      setResult(1);
      setScore(score + 1);
    } else {
      setResult(0);
    }
    randomNote();

    // let ans= oc.
  };

  function renderNotes() {
    return <Note />;
  }

  return (
    <Wrapper>
      <h1>Guess the Note!</h1>
      <div className="score">Score: {score}</div>
      <Staff className="Staff">
        {STAFF.map((note, index) => {
          return (
            <div className="barLine" key={index}>
              {note.showing ? renderNotes() : null}
            </div>
          );
        })}

        {/* {newNote(noteToShow)} */}
      </Staff>
      <label>Choose a note:</label>
      <select disabled={!playing} name="note" id="choice">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="G">G</option>
      </select>
      <button className="new" onClick={checkAns}>
        {playing ? "Check" : "Click to play!"}
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  /* justify-content: center; */
  margin: auto;

  /* width: clamp(400px, 60vw, 600px); */

  padding: 20px;
  gap: 6px;
  button.new {
    background-color: {result};
    width: 20%;
    border-radius: 10px;
  }
  h1 {
    margin: auto;
  }
  .score {
    width: 70px;
    padding: 5px;
    border-radius: 10px;
    
    // font-weight: 24rem;
  }
}
`;
const Staff = styled.div`
  --staffLineColor: rgba(0, 0, 0, 0.6);
  /* display: flex; */
  display: grid;

  padding: 20px;
  /* max-width: 55ch; */
  gap: 6px;

  div.barLine:nth-child(odd) {
    background-color: var(--staffLineColor);
    height: 10px;
    width: 100%;
    border-radius: 10px;
  }
  div.barLine:nth-child(even) {
    height: 10px;
    width: 100%;
    border-radius: 50%;
  }
`;
