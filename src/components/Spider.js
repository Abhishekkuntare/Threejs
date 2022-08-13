import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/spider.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group animations={actions} ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="3bd38f4236234d35898f64206f3b32d3fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="M_MED_Parallel_Comic_LOD0ao"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={1.5}
                >
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_158"
                      geometry={nodes.Object_158.geometry}
                      material={materials.M_MED_Parallel_Comic_Body}
                      skeleton={nodes.Object_158.skeleton}
                    />
                    <skinnedMesh
                      name="Object_159"
                      geometry={nodes.Object_159.geometry}
                      material={materials.M_MED_Parallel_Comic_Head}
                      skeleton={nodes.Object_159.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/spider.gltf");
