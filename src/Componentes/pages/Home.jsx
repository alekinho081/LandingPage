import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <section>
      <h1>DashBoard TechSolutions</h1>
      
      <Link to='/projeto'><BottomNavigationAction/>Saiba Mais</Link>
    </section>
  );
};
