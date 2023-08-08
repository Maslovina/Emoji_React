import { Input } from "./Components/Input/Input";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Footer } from "./Components/Footer/Footer";
import { Grid } from "./Components/Grid/Grid";
import { Card } from "./Components/Card/Card";
import { Container } from "./Components/Container/Container";
import { Loader } from "./Components/Loader/Loader";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
 
  useEffect(() => {
    // fetch("http://api.codeoverdose.space/api/emoji/v1").then((data)=>data.json(data))

    const fetchCard = async () => {
      try {
        const responce = await fetch(
          "http://api.codeoverdose.space/api/emoji/v1"
        );
        if (!responce.ok) {
          console.log("err");
        }
        const respData = await responce.json();
        setData(respData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCard();
  }, []);

  const ch = (evt) => {
    setInputValue(evt.target.value);
    console.log(evt.target.value);
  };

  const newData = data.map((item, index) => (
    <Card
      key={index}
      item={item}
      symbol={item.symbol}
      title={item.title}
      keywords={item.keywords}
    />
  ));

  return (
    <>
      <Header>
        <Input handler={ch} setInputValue={setInputValue} value={inputValue} />
      </Header>
      <Main>
        <Container>
          <Loader />
          <Grid>{newData}</Grid>
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default App;
