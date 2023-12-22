const ItemModal = ({ selectedCard, onClose }) => {
  console.log("ItemModal");
  return (
    <div className={`modal`}>
      <div className="modal__content-item">
        <button className="modal__button-close" type="button" onClick={onClose}>
          
        </button>
        <img
          className="modal__item-image"
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <h3 className="modal__item-name">{selectedCard.name} </h3>
        <div className="modal__item-container">
          <div className="modal__item-weather">
            Weather type: {selectedCard.weather}{" "}
          </div>
          <button className="modal__button-delete" type="button"></button>
        </div>
      </div>
    </div>
  );
};
export default ItemModal;
