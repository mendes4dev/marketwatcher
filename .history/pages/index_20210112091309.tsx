import 'bootstrap/dist/css/bootstrap.css';
import styles from './Home.module.css';
import { useEffect, useState } from "react";

//export default function Home(props) {
//  return (
//    <div className="container-fluid" style={{marginTop:"1%"}}>
//      <h1 className={styles.fonted}>Market Watcher</h1>
//      
//        {
//          props.data.map(data=>(
//            <div>
//              {data['1. open']}
//            </div>
//          ))
//        }
//      
//    </div>
//  )
//}

const Home = props => {
  const[parameters, setparameters] = useState(props.data);
  return (<h1>{parameters}</h1>)
};

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

// )
// .then(response => {
// 	response.json().then(function(data) {
//     //tilrayData = data['Time Series (Daily)'][formatDate(Date.now() - 86400000)];
//   });
// })
// .catch(err => {
// 	console.error(err);
// });
  
}

Home.getInitialProps = getTilray();  


export default Home;