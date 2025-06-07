import { getAuth } from "firebase/auth";
import appFirebase from "./credenciaisFirebase";

const auth = getAuth(appFirebase);
export default auth;
