import { useCustomization } from "./contexts/Customization";
import { Button} from "semantic-ui-react";
import expandmorebtn from '../assets/expand_more.png'
import expandlessbtn from '../assets/expand_less.png'

const Configurator = () => {
const {bikeColors,bikeColor,setBikeColor,} = useCustomization();
  console.log('bikeColor',bikeColor);
  return (
    <div className="Configurator">
     
        <Button className="Configurator_section_title">Fetures</Button>
       
          
            <Button className="item_label">
                Color
            </Button>
            <div className="configurator__section">
        <div className="configurator__section__title"></div>
        <div className="configurator__section__values">
          <div className="item"><img src={expandlessbtn} alt="expandless"/></div>
          {bikeColors.map((item, index) => (
            <div
            key={index}
            className={`item ${
              item.color === bikeColor.color ? "item--active" : ""
            }`}
            onClick={() => setBikeColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
                />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
          <div className="item"><img src={expandmorebtn} alt="expandless"/></div>
        </div>
      </div>
          </div>
  );
};

export default Configurator;
