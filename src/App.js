import "./App.css";
import Info from "./Info.js";

function App() {
  return (
    <div className="App">
      <Info />  
      <AddItem text="Tim" number ={2}/>
      <AddItem text= "Joe" />
      <AddItem text="Test"/>
    </div>
  );
}

function AddItem(props) {
  return (
    <form>
      <label for="text-form">Type Something:</label>
      <input type="text" value={props.text} id="text-form" />
      <p>{props.number}</p>
    </form>
  );
}

AddItem.defaultProps = {
  number: 2,
  text : "default",
}
export default App;
