import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const token = sessionStorage.getItem("token");
	console.log("This is your token", store.token)

	const handleClick = () => {
		actions.login(email, password)/* .then(() => {
			history.push("/")

		}) */

	};
	if (store.token && store.token != "" && store.token != undefined) navigate("/");

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			{(store.token && store.token != "" && store.token != undefined) ? "You are logged in with this token" + store.token :
				<div>
					<input type="text" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}></input>
					<input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
					<button onClick={handleClick} >Login</button>
				</div>

			}


		</div >
	);
};
/* {
	"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2MTA1MDUzNSwianRpIjoiMjM3YjE2NWYtZmQ5YS00OGE5LWEzNmUtZmEzNjA1YzBiMzNkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InRlc3QiLCJuYmYiOjE2NjEwNTA1MzUsImV4cCI6MTY2MTA1MTQzNX0.M5RwJjlvvCzn7lePe20_fmNVS2extlzV83ARgwlNxak"
}
 */