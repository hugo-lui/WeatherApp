import React, {useState, useEffect} from "react";
import "./App.css";
import Question from "./components/Question";
import About from "./components/About";
import Input from "./components/Input";
import SubmitButton from "./components/SubmitButton";
import AboutButton from "./components/AboutButton";
import BackButton from "./components/BackButton";

function App() {
  const [endpoint, setEndpoint] = useState("/");
  const [data, setData] = useState({area: "sky", question: true, button: true, backButton: false, about: false, input: true});
  const [value, setValue] = useState("");

  useEffect(() => {

  }, [endpoint]);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmitClick = () => {
    if(value === "blue") {
      console.log("correct");
    }
    else if(value === "bLuE") {
      console.log("secret");
    }
    else {
      console.log("incorrect");
    }
  }

  const handleAboutClick = () => {
    setEndpoint("/about");
  }

  const handleBackClick = () => {
    setEndpoint("/");
  }

  return(
    <div>
      {data.question ? <Question area={data.area}/> : null}
      {data.input ? <Input onChange={handleChange}/> : null}
      {data.button ? <SubmitButton onClick={handleSubmitClick}/> : null}
      {data.button ? <AboutButton onClick={handleAboutClick}/> : null}
    </div>
  );
}

export default App;