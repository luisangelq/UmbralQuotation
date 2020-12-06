import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Summary from "./components/Summary";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

function App() {
  const [summary, saveSummary] = useState({
    quote: 0,
    data: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  const [loading, saveLoading] = useState(false);

  const { quote, data } = summary;
  return (
    <div className="contentApp">
      <Header title="Insurance quote" />

      <div className="formContent">

        <Form saveSummary={saveSummary} saveLoading={saveLoading} />

        {loading ? <Spinner /> : <Summary data={data} />}

        

        <Result quote={quote} />
      </div>
    </div>
  );
}

export default App;
