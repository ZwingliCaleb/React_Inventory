import "./App.css";
import Info from "./Info.js";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
      <AddItem />
      <AddItem />
    </div>
  );
}

function AddItem() {
  const value = "textfield";
  return (
    <form>
      <label for="text-form">Type Something:</label>
      <input type="text" value={value} id="text-form" />
    </form>
  );
}
export default App;
