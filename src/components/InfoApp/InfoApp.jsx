import React from "react";
import './infoapp.css'
import { useEffect } from "react";
import { useState } from "react";

function InfoApp (props) {
  const [finalMessage, setFinalMessage] = useState("");
  
  useEffect(()=> {

    if(props.data) {

      const id = props.data.weather[0].id;
      let formatId;

      id === 800 ? formatId = id : formatId= parseInt(id.toString().slice(0, -2));

      const messages = {
        2: "Uy paila esta cayendo severa tormenta, mejor ni salga",
        3: "Esta lloviznando, que pereza parce :(",
        5: "Mk Parece que esta lloviendo, yo me quedaria en la casa mejor",
        6: "Noooooooo esta nevando, que es esa mierda?",
        7: "Ay viendo, neblina, tenga cuidado y abriguese",
        8: "Esta como nublado pero al menos aun no llueve, apurese mas bien care nalga",
        800: "Esta despejado, ¿Que hay pa' hacer? ¿Que hay pa' dañar?"
      }

      setFinalMessage(messages[formatId])

    }
  }, [props.data])

  return (

    <section>
      {props.data ? (
        <div className="app-container">
          <div className="location">
            <h2>Tu estas en: <span>{props.data.name}</span></h2>

            <div> <img src={`../../../public/weather_icons/${props.data.weather[0].icon}@2x.png`} alt="" /></div>
          </div>
          
          <div className="app-data">
            <span>Temperatura: {props.data.main.temp}°</span>
            <span>Descripcion: {props.data.weather[0].description}</span>
            <span>Temp max: {props.data.main.temp_max}°</span>
            <span>Temp min: {props.data.main.temp_min}°</span>
          </div>

          <div className="final-message">
            <p>{finalMessage}</p>
          </div>
        </div>
      ): (
        <span className="loader"></span>
      )}
    </section>
  );
}

export default InfoApp;