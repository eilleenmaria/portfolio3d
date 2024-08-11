import React from "react";
import Home from "../components/Home";

export {Home};

export const About = React.lazy(()=> import('../components/About'));
export const Projects = React.lazy(()=> import('../components/Projects'));
