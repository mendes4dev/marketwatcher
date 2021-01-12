import 'bootstrap/dist/css/bootstrap.css';
import styles from './Home.module.css';
import { useEffect, useState } from "react";

export default function Home() {
  fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=TLRY&apikey=IDY3SC7RCQOA1AHP", {
    "method": "GET",
    "headers":{
      'Content-type':'application/json'
    }
  })
  .then(response => {
  	response.json().then(function(data) {
      console.log(data.Meta Data);
    });
  })
  .catch(err => {
  	console.error(err);
  });
  return (
    <div className="container-fluid" style={{marginTop:"1%"}}>
      <h1 className={styles.fonted}>Market Watcher</h1>
    </div>
  )
}
