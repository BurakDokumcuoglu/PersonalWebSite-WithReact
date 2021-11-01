import styles from "./App.css";
import Hakkimda from "./components/Hakkimda";
import Navbar from "./components/Navbar";
import YaptigimIsler from "./components/YaptigimIsler";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Iletisim from "./components/Iletisim";
import Yorumlar from "./components/Yorumlar";

function App() {
  return (
    <Router>
      <div className="App">
        
          
      <Navbar className={styles.navbar}> </Navbar>
          <div className="container">
           <Switch>
           
            <Route exact path= "/" ><Hakkimda/></Route>
            <Route exact path= "/jobs"><YaptigimIsler/></Route>
            <Route exact path= "/contact"><Iletisim/></Route>
            <Route exact path= "/comments"><Yorumlar/></Route>
          </Switch>
          </div>
          <Footer/>
      
      </div>
    </Router>
  );
}

export default App;
