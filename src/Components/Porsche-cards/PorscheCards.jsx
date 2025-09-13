import card_1 from "../../assets/card1.jpeg";
import card_2 from "../../assets/card2.jpeg";
import card_3 from "../../assets/card3.jpeg";
import "./PorscheCard.css";

const PorscheCards = ({ text1,text2,text3 }) => {
 
  return (
    <div className="cards">
      <div className="card">
        <img src={card_1} alt="" />
        <div className="caption">
          <p>{text1}</p>
          <i className="bi bi-arrow-right"></i>
        </div>
      </div>
      <div className="card">
        <img src={card_2} alt="" />
        <div className="caption">
          <p>{text2}</p>
          <i className="bi bi-arrow-right"></i>
        </div>
      </div>
      <div className="card">
        <img src={card_3} alt="" />
        <div className="caption">
          <p>{text3}</p>
          <i className="bi bi-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default PorscheCards;
