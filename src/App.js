import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <div className="contentApp">
      <Header title="Insurance quote"/>

      <div className="formContent">
        <Form />
      </div>
    </div>
    
  );
}

export default App;
