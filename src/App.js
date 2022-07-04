import {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState,
} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Routes,
} from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar';
import { PageContainer } from './Component/styled/PageContainer.styled';
import { UserProfile } from './Component/UserProfile/UserProfile';
import HomePage from './Pages/HomePage/HomePage';
import { Postlists } from './Pages/PostList/PostLists';
import { TaggedPosts } from './Pages/PostList/TaggedPosts';
import { UsersList } from './Pages/UsersList/UsersList';
import Test1 from './Test1';

const defaultState = {
	userInfo: {},
	isLoggedIn: false,
};

const defaultUnloggedState = {};
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
			localStorage.setItem('onlineUser', JSON.stringify(actions.user));
			return {
				userInfo: { ...actions.user },
				isLoggedIn: true,
			};
		}

		case 'editUser': {
			return {
				userInfo: actions.user,
				isLoggedIn: false,
			};
		}

		case 'logIn': {
			localStorage.setItem('onlineUser', JSON.stringify(actions.user));
			console.log('logIn');
			return {
				userInfo: actions.user,
				isLoggedIn: true,
			};
		}

		case 'signOut': {
			localStorage.removeItem('onlineUser');
			return {
				userInfo: {},
				isLoggedIn: false,
			};
		}

		case 'deleteUser': {
			localStorage.removeItem('onlineUser');
			return {
				userInfo: {},
				isLoggedIn: false,
			};
		}
	}
}

function App() {
	const [loggedUser, dispatch] = useReducer(reducer, defaultState, () => {
		const localStorageUser = JSON.parse(localStorage.getItem('onlineUser'));
		return { userInfo: { ...localStorageUser }, isLoggedIn: true };
	});

	const [otherUser, otherDispatch] = useReducer(
		unloggedReducer,
		defaultUnloggedState
	);

	return (
		<State.Provider value={{ loggedUser, dispatch }}>
			<Router>
				<div className='App'>
					<Routes>
						<Route exact path='/' element={<HomePage />} />
						<Route path='/users' element={<UsersList />} />
						<Route path='/posts/' element={<Postlists />} />
						<Route path='/taggedposts/:tag' element={<TaggedPosts />} />
						<Route path='/profile/:id' element={<UserProfile />} />
					</Routes>
				</div>
			</Router>
		</State.Provider>
	);
}

export default App;

// {"id":"60d0fe4f5311236168a109e1","userName":"James","userLastName":"Black"}
