import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { UserProfile } from "./Component/UserProfile/UserProfile";
import { Postlists } from "./Pages/PostList/PostLists";
import { UsersList } from "./Pages/UsersList/UsersList";
import Test1 from "./Test1";

function App() {



  return (
    <div className="App">

      {/* <Test1 /> */}

      {/* <UsersList/> */}
      <Postlists/>
      {/* <UserProfile /> */}
    </div>
  );
}

export default App;
