/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: bocharova (https://sketchfab.com/apsnu)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/models/ea79b3b36fc04ded845ddfe1de08957a
title: Crypt Location
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/location.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.map_3_castle} />
        <mesh geometry={nodes.mesh_1.geometry} material={materials.map_3_objects1} />
        <mesh geometry={nodes.mesh_2.geometry} material={materials.map_3_terrain1} />
        <mesh geometry={nodes.mesh_3.geometry} material={materials.initialShadingGroup} />
      </group>
    </group>
  )
}

useGLTF.preload('/location.gltf')
