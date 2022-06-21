import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { UserProfile } from "./Component/UserProfile/UserProfile";
import { Postslists } from "./Pages/PostsList/PostLists";
import { UsersList } from "./Pages/UsersList/UsersList";

function App() {

  
  return (
      <div className="App">
        {/* <UsersList/> */}
<Postslists/>
        {/* <UserProfile/> */}
      </div>
  );
}

export default App;
