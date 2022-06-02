import { useState } from 'react';
import './styles.scss';
import { ReactComponent as Consumables } from '../../assets/svg/ItemShop/Consumables.svg';
import { ReactComponent as ConsumablesMobile } from '../../assets/svg/ItemShop/ConsumablesMobile.svg';
import Price from '../../assets/svg/ItemShop/Price.png';

const ItemShop = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const shopItemsArray = [...Array(3).keys()];

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
                id={index}
                data={item * 100 + 1000}
                onClick={(data) => setSelectedCard(data)}
                isSelected={selectedCard === index}
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
            <div className='image_box'></div>
            <div className='title' title='Item Name'>
              Item Name
            </div>
          </div>
          <div className='description_wrap scroll_bar'>
            <div className='title'>Item Description</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              illo eum voluptatibus voluptates aliquid dolorem doloremque
              inventore et praesentium laborum totam cupiditate magni, dolores
              perspiciatis iste quibusdam laboriosam quasi dignissimos!
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
      <div className='value_wrap' title={data}>
        <img src={Price} alt='price' />
        <div className='price'>{data}</div>
      </div>
    </div>
  );
};

export default ItemShop;
