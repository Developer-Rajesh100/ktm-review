import "./App.css";
import Banner from "./Banner/Banner";
import HomePageCustomer from "./CustomerReviews/HomePageCustomer";
import Error from "./Error/Error";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <HomePageCustomer></HomePageCustomer>
      <Error></Error>
    </div>
  );
}

export default App;
