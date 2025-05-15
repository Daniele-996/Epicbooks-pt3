// import {} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./assets/components/MyNav";
import MyFooter from "./assets/components/MyFooter";
// import Welcome from "./assets/components/Welcome";
// import AllTheBooks from "./assets/components/AllTheBooks";
// import SingleBook from "./assets/components/SingleBook";
import BookList from "./assets/components/BookList";
import fantasy from "./assets/data/fantasy.json";

function App() {
  return (
    <>
      <MyNav />
      {/* <SingleBook
        cardImg="https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg"
        cardTitle="Pandemic (The Extinction Files, Book 1)"
      /> */}
      <BookList books={fantasy} />
      {/* <Welcome /> */}
      {/* <AllTheBooks /> */}
      <MyFooter />
    </>
  );
}

export default App;
