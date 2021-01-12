import 'bootstrap/dist/css/bootstrap.css';
import styles from './Home.module.css';
import { useEffect, useState } from "react";

export default async function Home() {
  await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=TLRY&apikey=IDY3SC7RCQOA1AHP", {
    "method": "GET",
    "headers":{
      'Content-type':'application/json'
    }
  })
  .then(response => {
  	response.json().then(function(data) {
      console.log(data['Time Series (Daily)']['2021-01-11']);
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
