import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card">
      <div>
        <div className="card_name">{item.name}</div>
        <img
          src={item.link}
          className="card_image"
          onClick={() => onSelectCard(item)}
          alt="link"
        />
      </div>
      
    </div>
  );
};
export default ItemCard;
