/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/honda.gltf
Author: Alex.Ka. (https://sketchfab.com/Alex.Ka.)
License: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
Source: https://sketchfab.com/3d-models/honda-shadow-rs-2010-2e7cf7bc195044f4a0f60c04581e2691
Title: Honda Shadow RS 2010
*/


// import { createRoot } from "react-dom/client"
// import React, { useRef } from "react"
// import { Canvas, useFrame } from "@react-three/fiber"
// import {  } from "@react-three/drei"

import React, { useRef } from 'react';
import * as THREE from "three";
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, useGLTF ,useTexture } from '@react-three/drei';
import { useCustomization } from "../Components/contexts/Customization";
// import {create} from 'zustand'
const Honda=(props) => {
  const { nodes, materials } = useGLTF('./models/honda.gltf')
  const {  bikeColor} = useCustomization();
  const ref = useRef()
    // const useBearStore = create((set)=>({
    //     bear:0,
    //     increasePopulation:()=> set((state)=>({bears:state.bears+1})),
    //     removeAllBears:()=>set({bears:0}),
    // }))
  const bikeTextureProps = useTexture({
    //map:'./textures/Leather_008_Base Color.jpg',
    // displacementMap: './textures/Leather_008_Ambient Occlusion.jpg',
    normalMap:'./textures/Leather_008_Normal.jpg',
    roughnessMap:'./textures/Leather_008_Roughness.jpg',
    aoMap:'./textures/Leather_008_Ambient Occlusion.jpg',
  });

 // bikeTextureProps.map.repeat.set(3, 3);
  bikeTextureProps.normalMap.repeat.set(3, 3);
  bikeTextureProps.roughnessMap.repeat.set(3, 3);
  bikeTextureProps.aoMap.repeat.set(3, 3);
 // bikeTextureProps.map.wrapS = bikeTextureProps.map.wrapT =
   //  THREE.MirroredRepeatWrapping;
     bikeTextureProps.normalMap.wrapS = bikeTextureProps.normalMap.wrapT =
     THREE.MirroredRepeatWrapping;
     bikeTextureProps.roughnessMap.wrapS =
     bikeTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
     bikeTextureProps.aoMap.wrapS = bikeTextureProps.aoMap.wrapT =
     THREE.RepeatWrapping;
  return (
    <group ref={ref} {...props} dispose={null} >
        <group position={[-0.5,1,3]}>
            <Html rotation={[0.0*Math.PI,0,0]}>
                <h3 style={{color:"white"}}>Lorem</h3>
                <div style={{backgroundColor:"grey",padding:10,border:"2px solid white",width:100,height:100}}>whe..</div>
            </Html>
        </group>
        <group position={[1,1,-1.1]}>
            <Html rotation={[0.0*Math.PI,0,0]}>
            <h3 style={{color:"white"}}>Lorem</h3>
                <div style={{backgroundColor:"grey",padding:10,border:"2px solid white",width:100,height:100}}>eng..</div>
            </Html>
        </group>
        <group position={[1,2.5,-1.1]}>
            <Html rotation={[0.0*Math.PI,0,0]}>
        <h3 style={{color:"white"}}>Lorem</h3>
                <div style={{backgroundColor:"grey",padding:10,border:"2px solid white",width:100,height:100}}>eng..</div>
            </Html>
        </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.09}>
      
         <mesh geometry={nodes.Object_2.geometry} material={materials.Honda_Shadow_RS_2010_by_Alex_Ka} /> 
        <mesh geometry={nodes.Object_2.geometry} >
          
          <meshStandardMaterial {...bikeTextureProps}
           color={bikeColor.color}
          />
          </mesh>
        <mesh geometry={nodes.Object_4.geometry} material={materials.black_chrome} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.black_mate} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.black_plastic} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.brakelight} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.chrome} />
         <mesh geometry={nodes.Object_9.geometry} material={materials.chromedetails} /> 
        <mesh geometry={nodes.Object_10.geometry} material={materials.headlight} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.hondaF} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.hondaR} />
         <mesh geometry={nodes.Object_13.geometry} material={materials.matedetails} /> 
        <mesh geometry={nodes.Object_14.geometry} material={materials.mirrors} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.plasticdetails} /> 
        <mesh geometry={nodes.Object_16.geometry} material={materials.sidereflectors} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.spdglass} />
        <mesh {...props} geometry={nodes.Object_18.geometry} material={materials.tire}>
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./models/honda.gltf')

export default Honda;