import React, {useState, useEffect} from "react";
import {Link, Route, Routes, Navigate} from "react-router-dom";
import "./App.css";
import Question from "./components/Question";
import About from "./components/About";
import Input from "./components/Input";
import SubmitButton from "./components/SubmitButton";
import AboutButton from "./components/AboutButton";
import BackButton from "./components/BackButton";
import Message from "./components/Message";

export default function App() {
  const [endpoint, setEndpoint] = useState("/sky");
  const [data, setData] = useState({});
  const [colour, setColour] = useState("blue");
  const [value, setValue] = useState("");
  const path = window.location.pathname;

  useEffect(() => {
    if(endpoint === path || (path === "/")) {
      fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: JSON.stringify({user: value})
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
    }
    else {
      fetch(path).then((response) => {
        if(response.ok) {
          return response.json();
        }
      }).then((data) => {
        setData(data);
        console.log(data);
      }).catch((err) => {
        console.log(err);
      })
    }
  }, [endpoint, path]);

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
    <Routes>
      <Route path="/" element={
        <Navigate to="/sky"/>
      }/>
      <Route path="/sky" element={
        <div>
          {data.area ? <Question area={data.area} colour={colour}/> : null}
          {data.input ? <Input onChange={handleChange}/> : null}
          {data.button ? <Link to="/sky/sun"><SubmitButton onClick={handleSubmitClick} colour={colour}/></Link> : null}
          {data.button ? <Link to="/about"><AboutButton onClick={handleAboutClick} colour={colour}/></Link> : null}
        </div>
      }/>
      <Route path="/sky/sun" element={
        <div>
          {data.area ? <Question area={data.area} colour={colour}/> : null}
          {data.input ? <Input onChange={handleChange}/> : null}
          {data.button ? <Link to="/sky/sun/result"><SubmitButton onClick={handleSubmitClick} colour={colour}/></Link> : null}
          {data.button ? <Link to="/about"><AboutButton onClick={handleAboutClick} colour={colour}/></Link> : null}
          {data.message ? <Message colour={colour} sentence={data.message}/> : null}
        </div>
      }/>
      <Route path="/sky/sun/result" element={
        <div>
          {data.area ? <Question area={data.area} colour={colour}/> : null}
          {data.message ? <Message colour={colour} sentence={data.message}/> : null}
        </div>
      }/>
      <Route path="/about" element={
        <div>
          {data.about ? <About colour={colour}/> : null}
          {data.back ? <Link to="/sky"><BackButton onClick={handleBackClick} colour={colour}/></Link> : null}
        </div>
      }/>
      <Route path="/secret" element={
        <div>
          {data.message ? <Message colour={colour} sentence={data.message}/> : null}
        </div>
      }/>
      <Route path="/weather/:city" element={
        <div>
          <Message colour={colour} sentence={data.message}/>
        </div>
      }/>
    </Routes>
  );
}