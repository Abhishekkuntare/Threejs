/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: nigelgoh (https://sketchfab.com/nigelgoh)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/viking-room-a49f1b8e4f5c4ecf9e1fe7d81915ad38
title: Viking room
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/room.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 1, 0, 0]} scale={0.3}>
        <group rotation={[Math.PI / 1, 0, 0]} scale={0.3}>
          <mesh geometry={nodes.mesh_all1_Texture1_0.geometry} material={materials.Texture1} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/room.gltf')