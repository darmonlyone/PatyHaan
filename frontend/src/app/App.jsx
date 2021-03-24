import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import { getCookie } from "app/utils/Cookie";
import Home from "app/pages/Home";
import Login from "app/pages/Login";
import Register from "app/pages/Register";

const App = () => {
	return (
		<Router>
			<Switch>
				<PrivateRoute exact path="/">
					<Home />
				</PrivateRoute>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
			</Switch>
		</Router>
	);
};

const PrivateRoute = ({ children, ...rest }) => {
	const authToken = getCookie("token");
	return (
		<Route
			{...rest}
			render={({ location }) =>
				authToken ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default App;
