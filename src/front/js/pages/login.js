import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleClick = () => {

		const opts = {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"email": email,
				"password": password
			})
		}
		fetch('https://3001-ktkrau-authenticationsy-qpwu2h647bg.ws-us62.gitpod.io/api/token', opts)
			.then(resp => {
				if (resp.status === 200) return resp.json();
				else alert("There has been some error");
			})
			.then()
			.catch(error => {
				console.error("There was an error", error)
			})
	}

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			<div>
				<input type="text" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}></input>
				<input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
				<button onClick={handleClick} >Login</button>


			</div>

		</div>
	);
};
/* {
	"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2MTA1MDUzNSwianRpIjoiMjM3YjE2NWYtZmQ5YS00OGE5LWEzNmUtZmEzNjA1YzBiMzNkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InRlc3QiLCJuYmYiOjE2NjEwNTA1MzUsImV4cCI6MTY2MTA1MTQzNX0.M5RwJjlvvCzn7lePe20_fmNVS2extlzV83ARgwlNxak"
}
 */