import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

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
        <div className="col-6">
          <div className="d-flex">
            <WeatherIcon code={props.data.icon} />{" "}
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
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
              Wind:{props.data.windspeed} {""}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
