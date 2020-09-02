import React from "react";

export default function CardHover(props) {
  return (
    <div className="card-wrapper">


      <style jsx>{`
        .card-wrapper {
          border-color: purple;
          width: 200px;
          height: 200px;
          border-left: 0px solid transparent;
          border-bottom: 0px solid transparent;
          transition: all .4s ease;
          background: url(https://theme.zdassets.com/theme_assets/43400/87a1ef48e43b8cf114017e3ad51b801951b20fcf.jpg) no-repeat center center / cover;
        }
        .card-wrapper:hover {
          border-left: 10px solid ${props.border || "red"};
          border-bottom: 10px solid ${props.border || "red"};
        }
      `}</style>
    </div>
  );
}
