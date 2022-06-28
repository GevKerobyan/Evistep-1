import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Routes,
} from 'react-router-dom';
import { UserProfile } from './Component/UserProfile/UserProfile';
import HomePage from './Pages/HomePage/HomePage';
import { Postlists } from './Pages/PostList/PostLists';
import { UsersList } from './Pages/UsersList/UsersList';
import Test1 from './Test1';

const defaultState = {
	userInfo: {},
	isLoggedIn: false,
};

const defaultUnloggedState = {
	
}
export const unLoggedState = createContext(defaultUnloggedState);
export const State = createContext(defaultState);

function unloggedReducer(state, actions) {
	switch (actions.type) {
		case 'set': {

		}
	}
}


function reducer(state, actions) {
	switch (actions.type) {
		case 'createUser': {
			return {
				userInfo: actions.user,
				isLoggedIn: true,
			}
		}

		case 'logIn': {
			return {
				userInfo: actions.user,
				isLoggedIn: true,
			}
		}
		case 'signOut': {
			return {
				userInfo: {},
				isLoggedIn: false,
			}
		}
	}
}

function App() {
	const [loggedUser, dispatch] = useReducer(reducer, defaultState, () => {
		const localStorageUser = localStorage.getItem('onlineUser')
		return localStorageUser
		? JSON.parse(localStorageUser)
		: {
			userInfo: {},
			isLoggedIn: false,
		}
	})

	const [otherUser, otherDispatch] = useReducer(unloggedReducer, defaultUnloggedState)
	
	useEffect(()=> {
		localStorage.setItem('onlineUser', JSON.stringify(loggedUser))
  },[loggedUser])

	return (
		<State.Provider value={{loggedUser, dispatch}}>
			<Router>
				<div className='App'>
					<Routes>
						{/* <Test1 /> */}
						<Route exact path='/' element={<HomePage />} />
						<Route path='/users' element={<UsersList />} />
						<Route path='/posts' element={<Postlists />} />
						<Route path='/profile/:id' element={<UserProfile />} />
					</Routes>
				</div>
			</Router>
		</State.Provider>
	);
}

export default App;
