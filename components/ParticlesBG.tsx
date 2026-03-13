"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBG() {

const [init, setInit] = useState(false);

useEffect(() => {
initParticlesEngine(async (engine) => {
await loadSlim(engine);
}).then(() => {
setInit(true);
});
}, []);

if (!init) return null;

return (
<Particles
id="tsparticles"
options={{
background:{color:"transparent"},

fpsLimit:60,

particles:{

number:{value:40},

color:{value:"#00BFFF"},

links:{
enable:true,
color:"#00BFFF",
distance:150,
opacity:0.2
},

move:{
enable:true,
speed:1
},

opacity:{value:0.4},

size:{value:2}

}

}}
/>
);

}