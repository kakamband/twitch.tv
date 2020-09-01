import React from "react";
import Sidebar from "../components/Sidebar";
import CardHover from "../components/CardHover";

export default function index() {
  return (
    <div>
      <Sidebar />

      <CardHover border="purple" />



      <style global jsx>{`
        body {
          margin: 0px;
        }
        
      `}</style>


    </div>
  );
}
