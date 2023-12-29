// import logo from "./logo.svg";

import "./App.css";
import Header from "./components/Header";
// import WeatherCard from "./WeatherCard/WeatherCard";
// import ItemCard from "./ItemCard/ItemCard";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ModalWithForm from "./components/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "./components/ItemModal";
import { getForcastWeather, parseWeatherData } from "./util/weatherApi";

function App() {
  const weatherTemp = 102;
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  // console.log(selectedCard);

  useEffect(() => {
    getForcastWeather().then((data) => {
      // console.log(data);
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    });
  }, []);
  console.log(temp);
  return (
    <div className="page">
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <label className="modal__select-name">
            Name <input className='modal__box-text' placeholder="Name" type="text" name="name" minLength="1" maxLength="30" />
          </label>
          <label className="modal__select-link">
            Image <input className="modal__text-box" placeholder="Image URL" type="url" name="link" minLength="1" maxLength="30" />
          </label>
          <p className="modal__select">Select the weather type:</p>
          <div className="modal__select-radio">
            <div className="modal__select-hot">
              <input type="radio" id="hot" value="hot" /> <label>Hot</label>
            </div>
            <div className="modal__select-warm">
              <input type="radio" id="warm" value="warm" /> <label>Warm</label>
            </div>
            <div className="modal__select-cold">
              <input type="radio" id="cold" value="cold" /> <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
