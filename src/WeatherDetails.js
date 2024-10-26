import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";
import "./WeatherDetails.css";

export default function WeatherForm(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 mt-3">
          <div
            className="clearfix"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={50} />{" "}
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6 mt-3">
          <ul>
            <li>
              Air Pressure: {props.data.pressure}
              {""} h/Pa
            </li>
            <li>
              Humidity: {props.data.humidity}
              {""} %
            </li>
            <li>
              Wind: {props.data.windspeed} {""}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
