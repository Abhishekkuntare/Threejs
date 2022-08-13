import React, { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/AnimatedSphere";
import Iphone from "./components/Iphone";
import Lambo from "./components/Lambo";
import My_room from "./components/My_room";
import Room from "./components/Room";
import Location from "./components/Location";
import City from "./components/City";
import { OrbitControls } from "@react-three/drei";
import Spider from "./components/Spider";
import Abhishek from "./components/Abhishek";
import Joke from "./components/Joke";
import styled from "styled-components";

export default function App() {
  return (
    <>
      <Wrapper className="App">
        <Canvas className="canvas">
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={0.5} />
          <Suspense fallback={null}>
            {/* <Spider /> */}
            {/* <Joke /> */}
            <Location />
            {/* <City /> */}
            {/* <Lambo /> */}
            {/* <Iphone /> */}
            {/* <Room /> */}
            {/* <Sphere /> */}
          </Suspense>
        </Canvas>
        <Canvas className="canvas">
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={0.5} />
          <Suspense fallback={null}>{/* <Joke /> */}</Suspense>
        </Canvas>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  Canvas {
    background-color: #000;
    width: 100vw;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
  }
`;
