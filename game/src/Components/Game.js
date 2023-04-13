import "../styles.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
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
const STYLES = {
  1: {
    "--resultColor": "green"
  },
  0: {
    "--resultColor": "red"
  }
};
export default function Game( ) {
  // console.log([STAFF.showing]);
  const [noteToShow, setNoteToShow] = useState(0);
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(0);
  const [result, setResult] = useState(-1);
  const [trys, setTrys]=useState(-1);
  const [percent, setPercent]=useState(0);

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
  const calculateScore= ()=>{
    let toReturn= Math.round((score / trys) * 100,3 );
    if(isNaN(toReturn)){
      toReturn=0
    }
    setPercent(toReturn)
  }
  useEffect(() => {
    console.log("score: " + score);
    console.log("trys: " + trys);

    calculateScore()
  }, [score, trys ]);
  
  const checkAns = () => {
    let correct;
    let ans = document.querySelector("#choice").value;
    for (let i = 0; i < STAFF.length; i++) {
      if (STAFF[i].showing === 1) {
        // console.log("HIT");
        correct = STAFF[i].name;
      }
    }
    if(trys===-1){
      randomNote()
      setTrys(trys+1)

    } else if (ans === correct) {
        console.log("correct");
      setResult(1)
      setScore(1+score)
      setTrys(1+trys)
      setResult(1);

      // calculateScore();

      randomNote()
    } else {
      
      setTrys(trys+1)
      // calculateScore();

      setResult(0);
    }
    
    

    // let ans= oc.
  };
  const showResult =()=>{
    let toReturn=""
  }
  function renderNotes() {
    return <Note />;
  }

  return (
    <Wrapper>
      <h1>Guess the Note!</h1>
      <div className="score">Percent Correct:{percent}%</div>
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
      <select style={STYLES[result]} disabled={!playing} name="note" id="choice">
        {console.log(STYLES[result])}
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
    width: 20%;
    border-radius: 10px;
  }
  h1 {
    margin: auto;
  }
  .score {
    /* width: 70px; */
    padding: 5px;
    border-radius: 10px;
    font-size:3ch;
    // font-weight: 24rem;
  }
  select{
    background-color:var(--resultColor);
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
