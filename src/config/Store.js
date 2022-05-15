import { createStore } from "redux";
import changeTheNumber from "../store/actions/reducers/Reducers";

const store = createStore(changeTheNumber);

export default store;