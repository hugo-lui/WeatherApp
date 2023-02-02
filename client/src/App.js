import React, {useState, useEffect} from "react";
import "./App.css";
import Question from "./components/Question";
import Input from "./components/Input";
import SubmitButton from "./components/SubmitButton";
import AboutButton from "./components/AboutButton";

function App() {
  const [endpoint, setEndpoint] = useState("/");
  const [data, setData] = useState(null);
  const [area, setArea] = useState("sky");
  const [question, setQuestion] = useState(true);
  const [button, setButton] = useState(true);
  const [input, setInput] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {

  }, [endpoint]);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmitClick = () => {
    console.log(value);
  }

  return(
    <div>
      {question ? <Question area={area}/> : null}
      {input ? <Input onChange={handleChange}/> : null}
      {button ? <SubmitButton onClick={handleSubmitClick}/> : null}
      {button ? <AboutButton/> : null}
    </div>
  );
}

export default App;