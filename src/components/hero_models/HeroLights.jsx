import * as THREE from "three";

export const HeroLights = () => (
  <>
    <spotLight 
      position={[4, 5, 4]} 
      angle={0.4}
      intensity={90}
      penumbra={0.19}
      color="#f9d3ff"
    />

    <spotLight
      position={[-5, 2, 2]}
      angle={0.43}
      penumbra={0.1}
      intensity={60}
      color="#f7aa1c"
    />

    <spotLight
      position={[2, 5, 3.5]}
      angle={0.15}
      penumbra={0.2}
      intensity={100}
      color="white"
    />

    <spotLight
      position={[0, 5, 0]}
      angle={0.7}
      penumbra={0.4}
      intensity={30}
      olor="white"
    />

    <primitive
      object={new THREE.RectAreaLight('#ead2ef', 8, 3, 2)}
      position={[2, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={0.1}
    />

    <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
    <pointLight position={[0, 1, 0]} intensity={7} color="#e10044" />
  </>
);
