import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Personaje } from "./views/personaje.js";
import { Planet } from "./views/planet.js";
import { Body } from "./views/body.js";
import { Home } from "./views/home.js";
import injectContext from "./store/appContext.js";
import { Link } from "react-router-dom";
import { Navbar } from "./component/navbar";
import  Footer  from "../Compartidos/footer";
import { BodyPlanetas } from "./views/bodyPlanetas.js";
 import CardPersonajes from "../Compartidos/CardPersonajes.jsx";
import CardPlanetas from "../Compartidos/CardPlanetas.jsx";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
				    <Home><Personaje></Personaje></Home>
					<Link to="/CardPersonajes">Personajes
					
					</Link>
					<Switch>
					<Route exact path="/CardPersonajes/" component={<CardPersonajes></CardPersonajes>}/>
					<Route exact path="/planet/:id" component={Planet} />
                    <Route exact path="/personaje/:id" component={Personaje} />
                    <Route exact path="/planetas" component={BodyPlanetas} />
                    <Route exact path="/" component={Body} />
					<Route exact path="/home" component={Home}/>
                    <Route render={() => <h1 className="text-center">.....No se encuentra!!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
			<div><p>Hoooooliiiiii</p></div>
			
		</div>
		
	);
};

export default injectContext(Layout);
