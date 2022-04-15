import { useState } from 'react';
import './styles.scss';
import { ReactComponent as Consumables } from '../../assets/svg/ItemShop/Consumables.svg';
import { ReactComponent as ConsumablesMobile } from '../../assets/svg/ItemShop/ConsumablesMobile.svg';
import Price from '../../assets/svg/ItemShop/Price.png';

const ItemShop = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const shopItemsArray = [...Array(18).keys()];

  return (
    <section className='item_shop_wrap'>
      <div className='content_wrap main_wrapper'>
        <div
          className='consumables_wrap'
          data-aos='zoom-in'
          data-aos-offset='0'
          data-aos-duration='400'>
          <Consumables className='mobile_hidden' />
          <ConsumablesMobile className='mobile_only' />
        </div>
        <div
          className='items_wrapper'
          data-aos='zoom-in'
          data-aos-offset='0'
          data-aos-duration='500'>
          <div className='scroll_box scroll_bar'>
            {shopItemsArray.map((item, index) => (
              <Card
                key={index}
                id={index}
                data={item * 100 + 1000}
                onClick={(data) => setSelectedCard(data)}
                isSelected={selectedCard === index}
              />
            ))}
          </div>
        </div>
        <div
          className='item_description_wrap'
          data-aos='zoom-in'
          data-aos-offset='0'
          data-aos-duration='600'>
          <div className='top_section'>
            <div className='image_box'></div>
            <div className='title'>Item Name</div>
          </div>
          <div className='description_wrap'>
            <div className='title'>Item Description</div>
            <p>
              Allows a trainer to re-roll the stats for their cypher, at its
              current level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ data, onClick, isSelected, id }) => {
  return (
    <div
      className={`item_card ${isSelected ? 'active' : ''}`}
      onClick={() => {
        onClick && onClick(id);
      }}>
      <div className='value_wrap'>
        <img src={Price} alt='price' />
        <div className='price'>{data}</div>
      </div>
    </div>
  );
};

export default ItemShop;
