import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/joke.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Model001_Material001}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Model001_Material002}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Model001_Material003}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.Model001_Material004}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.Model001_Material005}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.Model001_Material006}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.Model001_Material007}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.Model001_Material008}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.Model001_Material009}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.Model001_Material010}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.Model001_Material011}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.Model001_Material012}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/joke.gltf");
