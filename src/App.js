import './App.css';
import Header from "./component/header";
import MainComp from "./component/maincomp";
import {useEffect} from "react";
import mainScript from "./mainScript";

function App() {

    useEffect(() => {
        mainScript();
    },[]);
    return (
        <div className="App">
            <Header/>
            <MainComp/>
        </div>
    );
}

export default App;
