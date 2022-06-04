import React from "react";
import {Personaje} from "./personaje.js"
import "../../styles/home.css";
 
export const Home = () => (
	<div className="text-center mt-5">
		<Personaje></Personaje>
		<p>
		hooooolllllaaaaa	
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
