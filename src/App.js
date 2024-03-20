import "./App.css";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const notify = () => toast.success("Wow so easy !");
  return (
    <div className="App">
      <ToastContainer />
      <button onClick={notify}>Notify !</button>
      <h1>Demo working rest api</h1>
      <AddUser />
      <UserList />
      <ToastContainer />
      
    </div>
  );
}

export default App;
