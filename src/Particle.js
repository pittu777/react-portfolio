// import { useCallback, useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";

// import { loadFull } from "tsparticles";
// export default function Particle() {
//   const [init, setInit] = useState(false);
//   useEffect(() => {
//     console.log("init");
//     initParticlesEngine(async (engine) => {
//       await loadFull(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = (container) => {
//   };

//   return (
//     <>
//       {init && (
//         <Particles
//           id="tsparticles"
//           particlesLoaded={particlesLoaded}
//           style={{
//             zIndex: 1,
//           }}
//           options={{
//             fpsLimit: 120,
//             interactivity: {
//               events: {
//                 onClick: {
//                   enable: true,
//                   mode: "push",
//                 },
//                 onHover: {
//                   enable: true,
//                   mode: "repulse",
//                 },
//                 resize: true,
//               },
//               modes: {
//                 push: {
//                   quantity: 4,
//                 },
//                 repulse: {
//                   distance: 200,
//                   duration: 0.4,
//                 },
//               },
//             },
//             particles: {
//               color: {
//                 value: "#808080",
//               },
//               links: {
//                 color: "#e0f2fe",
//                 distance: 150,
//                 enable: true,
//                 opacity: 0.5,
//                 width: 1,
//               },
//               move: {
//                 direction: "none",
//                 enable: true,
//                 outModes: {
//                   default: "bounce",
//                 },
//                 random: false,
//                 speed: 4,
//                 straight: false,
//               },
//               number: {
//                 density: {
//                   enable: true,
//                   area: 800,
//                 },
//                 value: 20,
//               },
//               opacity: {
//                 value: 0.5,
//               },
//               shape: {
//                 type: "circle",
//               },
//               size: {
//                 value: { min: 1, max: 5 },
//               },
//             },
//             detectRetina: true,
//           }}
//         />
//       )}
//     </>
//   );
// }