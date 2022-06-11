import { useState } from 'react';
import './styles.scss';
import { ReactComponent as Consumables } from '../../assets/svg/ItemShop/Consumables.svg';
import { ReactComponent as ConsumablesMobile } from '../../assets/svg/ItemShop/ConsumablesMobile.svg';
import Price from '../../assets/images/items/icon_token_pouch.png';
import Bento from '../../assets/images/items/icon_bento.png';
import Crystal from '../../assets/images/items/icon_genesis_crystal.png';

const ItemShop = () => {
  const shopItemsArray = [
    {
      id: 1,
      name: 'Stamina Bento Box',
      price: 1500,
      image: Bento,
      description:
        "Reset your Cypher's training capacity for the day. Not required for training but serves to speed up the leveling process if desired (unlimited daily use; consumable).",
    },
    {
      id: 2,
      name: 'Genesis Stone',
      price: 1600,
      image: Crystal,
      description:
        "Allows a trainer to re-reroll their Cypher's stat gain for each level. Be careful however as this item will reset any new XP gained after the most recent level up. Genesis stones are not required to level but serve to allow player's to craft their ideal Cypher team. (unlimited daily use; consumable).",
    },
    {
      id: 3,
      name: 'Boxing Gloves',
      price: 1500,
      description:
        "Allows a trainer to reset their Cypher's Battle Pool entries for the day. Boxing Gloves are not required to enter the battle pool but merely allow further participation. Please note: Once the maximum number of battles has been reached for the day, no matter remaining entries, no more battles will take place for that day.",
    },
  ];
  const [selectedCard, setSelectedCard] = useState(shopItemsArray[0]);

  return (
    <section className='item_shop_wrap'>
      <div className='content_wrap main_wrapper'>
        <div
          className='consumables_wrap'
          data-aos='fade-left'
          data-aos-offset='0'
          data-aos-duration='400'>
          <Consumables className='mobile_hidden' />
          <ConsumablesMobile className='mobile_only' />
        </div>
        <div
          className='items_wrapper'
          data-aos='fade-left'
          data-aos-offset='0'
          data-aos-duration='500'>
          <div className='scroll_box scroll_bar'>
            {shopItemsArray.map((item, index) => (
              <Card
                key={index}
                data={item}
                onClick={(data) => setSelectedCard(data)}
                isSelected={selectedCard && item && selectedCard.id === item.id}
              />
            ))}
          </div>
        </div>
        <div
          className='item_description_wrap '
          data-aos='fade-left'
          data-aos-offset='0'
          data-aos-duration='600'>
          <div className='top_section'>
            <div
              className='image_box'
              data-aos='zoom-in'
              data-aos-offset='0'
              data-aos-duration='450'>
                <img src={selectedCard.image} alt='versus_metaverse_item' /> 
              </div>
            <div
              className='title'
              title={selectedCard && selectedCard.name}
              key={selectedCard && selectedCard.id}
              data-aos='fade-left'
              data-aos-offset='0'
              data-aos-duration='450'>
              {selectedCard && selectedCard.name}
            </div>
          </div>
          <div
            className='description_wrap scroll_bar'
            key={selectedCard && selectedCard.id}
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='400'>
            <div className='title'>Item Description</div>
            <p>{selectedCard && selectedCard.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ data, onClick, isSelected }) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div
      className={`item_card ${isSelected ? 'active' : ''}`}
      onClick={() => {
        onClick && onClick(data);
      }}>
      <img src={data.image} alt='versus_metaverse_item' /> 
      <div className='value_wrap' title={data}>
        <img src={Price} alt='price' />
        <div className='price'>{data && numberWithCommas(data.price)}</div>
      </div>
    </div>
  );
};

export default ItemShop;
