import React from "react";
import Sidebar from "../components/Sidebar";
import CardHover from "../components/CardHover";
import Iconfront from "../components/Iconfront"

export default function index() {
  return (
    <div>
      <Sidebar />

      <div className="baner">
        <img src="https://www.oficinadanet.com.br/imagens/post/30406/riot-valorant-beta-fechado-comeca-7-de-abril.jpg"></img>
        <Iconfront />
      </div>

      {/*
      <div className="card-front">
        <CardHover border="purple" />
        <CardHover border="purple" />
      </div>
      */}

      <style global jsx>{`
        body {
          margin: 0px;
        }
      `}</style>

      <style jsx>{`
      .baner{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      
      img{
        width: 720px;
        height: 420px;
      }

      .card-front{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      `}</style>

    </div>
  );
}