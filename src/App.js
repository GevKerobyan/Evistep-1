import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { UserProfile } from "./Component/UserProfile/UserProfile";
import { Postlists } from "./Pages/PostList/PostLists";
import { UsersList } from "./Pages/UsersList/UsersList";

function App() {


  return (
    <div className="App">
      {/* <UsersList/> */}
      <Postlists/>
      {/* <UserProfile /> */}
    </div>
  );
}

export default App;
