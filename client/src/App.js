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
    setEndpoint("/sun");
  }

  return(
    <div>
      {data.question ? <Question area={data.area}/> : null}
      {data.input ? <Input onChange={handleChange}/> : null}
      {data.button ? <SubmitButton onClick={handleSubmitClick}/> : null}
      {data.button ? <AboutButton onClick={handleAboutClick}/> : null}
      {data.about ? <About/> : null}
      {data.back ? <BackButton onClick={handleBackClick}/> : null}
    </div>
  );
}