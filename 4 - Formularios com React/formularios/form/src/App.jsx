import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <>
      <h1>Forms:</h1>
      <MyForm
        user={{
          name: "João",
          email: "joaojj@gmail.com",
          bio: "Sou um developer",
          role: "admin",
        }}
      />
    </>
  );
}

export default App;
