import { useContext } from "react";
import { State } from "../App";

const useUserContext = () => useContext(State);

export default useUserContext;