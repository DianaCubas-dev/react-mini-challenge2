import React from "react";

const PokeCard = (props) => {
  const { title, spritesSrc, videoLink } = props;

  const cardWrapperStyle = {
    width: 300,
    height: 450,
    border: "2px solid #e1e1e1",
    background: "#cc6600",
    boxSizing: "border-box",
    padding: 20,
    display: "flex",
    justifyContent: "center"
  };

  const cardContainerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    border: "2px solid #e1e1e1",
    background:
      "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.2) 35%, rgba(0,212,255,1) 100%)",
    boxShadow: "inset 0 0 15px 1px #00000056",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  };

  const linkStyle = {
    color: "orange"
  };

  return (
    <div style={cardWrapperStyle}>
      <div style={cardContainerStyle}>
        <h1>{title}</h1>
        <div>
          {spritesSrc.map((sprite, index) => (
            <img key={index} src={sprite} alt="" />
          ))}
        </div>
        <a href={videoLink} style={linkStyle}>
          Watch it on the pokedex!
        </a>
      </div>
    </div>
  );
};

PokeCard.defaultProps = {
  spritesSrc: []
};

export default PokeCard;
