import 'bootstrap/dist/css/bootstrap.css';
import styles from './Home.module.css';
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const allData = await getTilray()
  const allDataApple = await getApple()
  return {
    props: {
      allData,
      allDataApple
    }
  }
}

export default function Home({allData, allDataApple}) {
  return (
    <div className="container" style={{marginTop:"1%"}}>
      <h1 className={styles.fonted}>Market Watcher</h1>
      <h2 className={styles.fonted}>Buying Prices</h2>
      <div className="container" style={{marginTop: "5%"}}>
        <div className="row justify-content-around">
          <div className="col-4" style={{borderRadius: "15px 50px",border: "1px solid black"}}>
              <img src="https://media-exp1.licdn.com/dms/image/C560BAQEn0TOcIOwYcA/company-logo_200_200/0/1562074722126?e=2159024400&v=beta&t=2kaPJ87Ymep2V_Nppv3Neph6Qb9Sk4YHs-iwSWcchz8" 
                width="200" height="200" className={styles.imaged} />
              <h3 className={styles.fonted}>
                  Date: {formatDate(Date.now() - 86400000)}
              </h3>
              <h3 className={styles.fonted}>
                  Open Value: {allData['1. open']} USD
              </h3>
              <h3 className={styles.fonted}>
                  Close Value: {allData['4. close']} USD
              </h3>
          </div>
          <div className="col-4" style={{borderRadius: "50px 10px 50px 10px",border: "1px solid black"}}>
              <img src="https://imagens.canaltech.com.br/empresas/838.400.jpg" 
                width="200" height="200" className={styles.imaged}/>
              <h3 className={styles.fonted}>
                  Date: {formatDate(Date.now() - 86400000)}
              </h3>
              <h3 className={styles.fonted}>
                  Open Value: {allDataApple['1. open']} USD
              </h3>
              <h3 className={styles.fonted}>
                  Close Value: {allDataApple['4. close']} USD
              </h3>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: "5%"}}>
        <div className="row justify-content-around">
          <div className="col-4" style={{borderRadius: "15px 50px",border: "1px solid black"}}>
              <img src="https://groovebikes.com.br/wp-content/uploads/2019/07/google.jpg" 
                width="200" height="200" className={styles.imaged} />
              <h3 className={styles.fonted}>
                  Date: {formatDate(Date.now() - 86400000)}
              </h3>
              <h3 className={styles.fonted}>
                  Open Value: {allData['1. open']} USD
              </h3>
              <h3 className={styles.fonted}>
                  Close Value: {allData['4. close']} USD
              </h3>
          </div>
          <div className="col-4" style={{borderRadius: "50px 10px 50px 10px",border: "1px solid black"}}>
              <img src="https://media-exp1.licdn.com/dms/image/C560BAQFhfl32crIGIw/company-logo_200_200/0/1595528954632?e=2159024400&v=beta&t=EZIhq5QB9a7px3bCm-ZYdKqF3YMHYSPN7c2jO3uSUHg" 
                width="200" height="200" className={styles.imaged}/>
              <h3 className={styles.fonted}>
                  Date: {formatDate(Date.now() - 86400000)}
              </h3>
              <h3 className={styles.fonted}>
                  Open Value: {allDataApple['1. open']} USD
              </h3>
              <h3 className={styles.fonted}>
                  Close Value: {allDataApple['4. close']} USD
              </h3>
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

async function getApple() {

  const res = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&apikey=IDY3SC7RCQOA1AHP")
  //, {
  //"method": "GET",
  //"headers":{
  //  'Content-type':'application/json'
  //})

  const appleData = await res.json();

  return appleData['Time Series (Daily)'][formatDate(Date.now() - 86400000)];
}



