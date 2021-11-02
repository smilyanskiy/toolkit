import { fetchUsers, usersSelector } from "../redux/users";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(users);
  return <div></div>;
};

export default App;
