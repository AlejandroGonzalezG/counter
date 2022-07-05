//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components


const estiloNumeros = {
    borderRadius: "7%", 
    backgroundColor: "#262626", 
    padding: "15px",
    fontSize: "30px",
    color: "white",
    width: "50px",
}

const estiloIcono = {
    borderRadius: "7%", 
    backgroundColor: "#262626", 
    padding: "15px",
    fontSize: "35px",
    color: "white",
    width: "70px",
    height: "66px",
    margin: "8px",
    display: "flex", 
    justifyContent:"space-between",
    alignItems: "center"
}

const Home = (props) => {
	return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h1 className="icono justify-content-center" style={estiloIcono}><i className="far fa-clock"></i></h1>
                    <h1 className="milCentenas m-2" style={estiloNumeros}>{props.milCentenas}</h1>
                    <h1 className="milDecenas m-2" style={estiloNumeros}>{props.milDecenas}</h1>
                    <h1 className="milUnidades m-2" style={estiloNumeros}>{props.milUnidades}</h1>
                    <h1 className="centenas m-2" style={estiloNumeros}>{props.centenas}</h1>
		            <h1 className="decenas m-2" style={estiloNumeros}>{props.decenas}</h1>
                    <h1 className="unidades m-2" style={estiloNumeros}>{props.unidades}</h1>
                </div>
            </div>
        </div>
	);
};

let unidades = -1;
let decenas = 0;
let centenas = 0;
let milUnidades = 0;
let milDecenas = 0;
let milCentenas = 0;

setInterval(() => {
    unidades = unidades + 1,
    (unidades == 10) ? (unidades=0 , decenas++) : true;
    (decenas == 10) ? (decenas=0 , centenas++) : true;
    (centenas == 10) ? (centenas=0 , milUnidades++) : true;
    (milUnidades == 10) ? (milUnidades=0 , milDecenas++) : true;
    (milDecenas == 10) ? (milDecenas=0 , milCentenas++) : true;
    ReactDOM.render(<Home unidades={unidades} decenas={decenas} centenas={centenas} milUnidades={milUnidades} milDecenas={milDecenas} milCentenas={milCentenas} />, document.querySelector("#app"));
}, 1000)

