import "./App.css";
import DataFetch from "./components/DataFetch";
import TestAuth from "./components/TestAuth";
import UserForm from "./components/UserForm";

function App() {
  return (
    <>
      <UserForm />
      <TestAuth />
      <DataFetch />
    </>
  );
}

export default App;
