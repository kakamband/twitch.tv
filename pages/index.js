import React from "react";
import Sidebar from "../components/Sidebar";
import CardHover from "../components/CardHover";
import Iconfront from "../components/Iconfront"
import Carouselfront from '../components/Carouselfront'

export default function index() {
  return (
    <div className="wrapper">




      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="carousel">
        <Carouselfront />
      </div>
      <div className="card-front">
        <CardHover border="purple" />
      </div>


      <style jsx>{`
      .wrapper{
        display: flex;
      }
      .sidebar{
        flex: 1;
      }
      .carousel{
        flex: 2;

      }
      .card-front{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 130px;
      }
      `}</style>



      
      <style global jsx>{`
        body {
          margin: 0px;
          background-color: black; 
        }
      `}</style>
    </div>
  );
}