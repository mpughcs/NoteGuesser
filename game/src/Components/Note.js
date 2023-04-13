import "../styles.css";
import styled from "styled-components";
import { useState } from "react";

export default function Note() {
  return (
    <Wrapper>
      <Circle>
        <div className="bar"></div>
      </Circle>
    </Wrapper>
  );
}
const Circle = styled.span`
  position: relative;
  bottom: 10px;
  height: 10px;
  width: 15px;
  max-width: 100%;
  background-color: black;
  border-radius: 50%;
  border: 10px solid black;
  display: flex;

  div.bar {
    background-color: black;
    position: relative;
    width: 13px;
    /* height: 100px; */
    left: 13px;
    bottom: 60px;
    /* right: auto; */
    padding-top: 70px;
    border-radius: 50px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  /* align-items: flex-end; */
  /* padding-right: 100px; */
  justify-content: center;
`;
