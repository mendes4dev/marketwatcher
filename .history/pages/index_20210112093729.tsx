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
  return (
    <div className="container-fluid" style={{marginTop:"1%"}}>
      <h1 className={styles.fonted}>Market Watcher</h1>
      <h1>
        {allData['1. open']}
      </h1>
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



