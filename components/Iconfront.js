import React from 'react'

export default function Iconfront(props) {
    return (
      <div className="wrapper">
        <img className="baner"></img>

            <div className="topo">
                <div className="user-Photo"></div>
                <div className="info">
                    <div className="user-Name">{props.nomeUsuario}</div>
                    <div className="user-Game">{props.nomeGame}</div>
                    <div className="user-View">{props.viewUser}</div>
                </div>
                <button>{props.userLanguage}</button>
                <div className="user-Description">{props.description}</div>
            </div>

        <style jsx>{`
          .wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .baner {
            background: url(${props.photoPainel}) no-repeat center center / cover;
            width: 700px;
            height: 420px;
          }
          .topo {
            width: 200px;
            height: 420px;
            background-color: #191919;
            color: white;
          }
          .user-Photo {
            background: url(${props.photoUser}) no-repeat center center / cover;
            width: 40px;
            height: 40px;
            border-radius: 100%;
            margin: 8px;
          }
          .info {
              
          }
          .user-Name {
            padding-top: 5px;
            padding-bottom: 3px;
            font-size: 16px;
          }
          .user-Game {
            padding: 3px 0;
            font-size: 12px;
          }
          .user-View {
            font-size: 15px;
          }
          button {
            padding: 5px 10px;
            border: none;
            border-radius: 15px;
            background-color: grey;
            margin: 8px;
          }
          button:hover {
            background-color: #a9a9a9;
          }
          .user-Description {
            padding: 8px;
          }
        `}</style>
      </div>
    );
}
