import React, {useState, useEffect} from "react";
import "./App.css";
import Question from "./components/Question";
import About from "./components/About";
import Input from "./components/Input";
import SubmitButton from "./components/SubmitButton";
import AboutButton from "./components/AboutButton";
import BackButton from "./components/BackButton";

export default function App() {
  const [endpoint, setEndpoint] = useState("/sky");
  const [data, setData] = useState({});
  const [colour, setColour] = useState("blue");
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user: "hi"})
    }).then((response) => {
      if(response.ok) {
        return response.json();
      }
    }).then((data) => {
      setData(data);
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }, [endpoint]);

  useEffect(() => {
      data.area === "sun" ? setColour("orange") : setColour("blue");
  }, [data.area]);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmitClick = () => {
    if(data.area === "sky") {
      setEndpoint("/sky/sun");
    }
    else if(data.area === "sun") {
      setEndpoint("/sky/sun/result");
    }
  }

  const handleAboutClick = () => {
    setEndpoint("/about");
  }

  const handleBackClick = () => {
    setEndpoint("/sky");
  }

  return(
    <div>
      {data.question ? <Question area={data.area} colour={colour}/> : null}
      {data.input ? <Input onChange={handleChange}/> : null}
      {data.button ? <SubmitButton onClick={handleSubmitClick} colour={colour}/> : null}
      {data.button ? <AboutButton onClick={handleAboutClick} colour={colour}/> : null}
      {data.about ? <About colour={colour}/> : null}
      {data.back ? <BackButton onClick={handleBackClick} colour={colour}/> : null}
    </div>
  );
}