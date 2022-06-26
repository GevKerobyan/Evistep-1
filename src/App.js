import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Routes,
} from 'react-router-dom';
import './App.css';
import { UserProfile } from './Component/UserProfile/UserProfile';
import HomePage from './Pages/HomePage/HomePage';
import { Postlists } from './Pages/PostList/PostLists';
import { UsersList } from './Pages/UsersList/UsersList';
import Test1 from './Test1';

const defaultState = {
	userInfo: {},
	isLoggedIn: false,
};

const stateFromStorage = JSON.parse(localStorage.getItem('onlineUser'))

console.log('storage', stateFromStorage)

export const State = createContext(defaultState);


function reducer(state, actions) {
	switch (actions.type) {
		case 'createUser': {
			return {
				userInfo: actions.user,
				isLoggedIn: true,
			}
		}
	}
}

function App() {

	const [loggedUser, dispatch] = useReducer(reducer, defaultState)
	useEffect(()=> {
		console.log('consoling: loggedUser :::', loggedUser )
	},[loggedUser])
	return (
		<State.Provider value={{loggedUser, dispatch}}>
			<Router>
				<div className='App'>
					<Routes>
						{/* <Test1 /> */}
						<Route path='/' element={<HomePage />} />
						<Route path='/users' element={<UsersList />} />
						<Route path='/posts' element={<Postlists />} />
						<Route path='/profile' element={<UserProfile />} />
					</Routes>
				</div>
			</Router>
		</State.Provider>
	);
}

export default App;
