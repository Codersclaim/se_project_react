import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
}) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal__type_${name} `}>
      <div className="modal__content">
        <button className="modal__button-close" type="button" onClick={onClose}>
          Close
        </button>
        <h3 className="modal__title">{title}</h3>
        <form>
          {children}
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
