import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Personaje } from "./views/personaje.js";
import { Planet } from "./views/planet.js";
import { Body } from "./views/body.js";
import { Home } from "./views/home.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import  Footer  from "../Compartidos/footer";
import { BodyPlanetas } from "./views/bodyPlanetas.js";
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
					<Switch>
					<Route exact path="/planet/:id" component={Planet} />
                    <Route exact path="/personaje/:id" component={Personaje} />
                    <Route exact path="/planetas" component={BodyPlanetas} />
                    <Route exact path="/" component={Body} />
					<Route exact path="/home" component={Home}/>
                    <Route render={() => <h1 className="text-center">Woops! Not found</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
