// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import WeatherCard from "./WeatherCard/WeatherCard";

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <WeatherCard day={true} type="snow" />
        <section id="card-section">card Section</section>
      </main>
    </div>
  );
}

export default App;