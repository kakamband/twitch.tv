import React from "react";

export default function CardHover(props) {
  return (
    <div className="card-wrapper">
      <style jsx>{`
        .card-wrapper {
          color: #fff;
          background: black;
          border-color: purple;
          width: 200px;
          height: 200px;
          border-left: 0px solid transparent;
          border-bottom: 0px solid transparent;
          transition: all .4s ease;
        }
        .card-wrapper:hover {
          border-left: 5px solid ${props.border || red};
          border-bottom: 5px solid ${props.border || red};
        }
      `}</style>
    </div>
  );
}
