import { useContext } from "react";
import CommonContext from "./context/commonContext";
function Logout(props) {
  const { isLoggedIn, setLoggedIn } = useContext(CommonContext);

  return <div></div>;
}
