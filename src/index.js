import React from "react";
import { createRoot } from 'react-dom/client';
import { gsap } from "gsap";

import App from "./App";


const tl=gsap.timeline({defaults:{ease:"power1.out"}});


tl.to('.text',{y:'0%',duration:1,stagger:0.3})

tl.to('.slider',{y:'-100%',duration:1,delay: 0.25})

tl.to('.intro',{y:'-100%'},"-=1")

const container=document.getElementById('root');
const root=createRoot(container);
root.render(<App/>);
