import 'bootstrap/dist/css/bootstrap.css';
import styles from './Home.module.css'

export default function Home() {
  fetch("https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=TSLA", {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-key": "6f0db3c46amsha844bcd0eab67f9p195ba2jsne9e05d61239c",
  		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
  	}
  })
  .then(response => {
  	console.log(response);
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
