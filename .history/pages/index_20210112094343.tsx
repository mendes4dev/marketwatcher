import 'bootstrap/dist/css/bootstrap.css';
import styles from './Home.module.css';
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const allData = await getTilray()
  return {
    props: {
      allData
    }
  }
}

export default function Home({allData}) {
  console.log(allData);
  return (
    <div className="container-fluid" style={{marginTop:"1%"}}>
      <h1 className={styles.fonted}>Market Watcher</h1>
      <div className="container" style={{marginTop:"5%"}}>
        <div className="row">
          <div className="col-5">
            <h2 className={styles.fonted}>
                Open Value: {allData['1. open']}
            </h2>
            <h2 className={styles.fonted}>
                Close Value: {allData['4. close']}
            </h2>
          </div>
        </div>
      </div>
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

  return tilrayData['Time Series (Daily)'][formatDate(Date.now() - 86400000)];
}



