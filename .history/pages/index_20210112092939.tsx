import 'bootstrap/dist/css/bootstrap.css';
import styles from './Home.module.css';
import { useEffect, useState } from "react";

export default function Home() {
  const data = getTilray();
  console.log(data);
  return (
    <div className="container-fluid" style={{marginTop:"1%"}}>
      <h1 className={styles.fonted}>Market Watcher</h1>
    </div>
  )
}

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

async function getTilray() {

  const res = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=TLRY&apikey=IDY3SC7RCQOA1AHP")
  //, {
  //"method": "GET",
  //"headers":{
  //  'Content-type':'application/json'
  //})

  const tilrayData = await res.json();

  this.setState({
    Data: tilrayData['Time Series (Daily)'][formatDate(Date.now() - 86400000)].map((data,i)=>
     <h1>{data['1. open']}</h1>
    )
  }) 
  
}



