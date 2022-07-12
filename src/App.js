
import './App.css';

function App() {
  return (
    <div className="App">
      <Info/>
      <AddItem/>
      <AddItem/>
      <AddItem/>
    </div>
  );
}

function Info(){
  const title = "This is my title.";
  const showTitle = true;

  return(
    <div>
      <h1>Inventory System</h1>
      <p>Manage your stuff</p>
    </div>
  )
}

function AddItem(){
  return(
    <form>
      <label for="text-form">Type Something:</label>
      <input type= "text" id="text-form"/>
    </form>
  );
}
export default App;
