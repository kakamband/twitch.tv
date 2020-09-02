import React from "react";
import Sidebar from "../components/Sidebar";
import CardHover from "../components/CardHover";
import Iconfront from "../components/Iconfront"
import Carouselfront from '../components/Carouselfront'

export default function index() {
  return (
    <div>

      {/* 
      <Sidebar />
      */}


      <Carouselfront />

      {/*
      <div className="card-front">
        <CardHover border="purple" />
      </div>
      */}

      <style global jsx>{`
        body {
          margin: 0px;
        }
      `}</style>

      <style jsx>{`
      img{
        width: 720px;
        height: 420px;
      }

      .card-front{
        display: flex;
        align-items: center;
      }
      `}</style>

    </div>
  );
}