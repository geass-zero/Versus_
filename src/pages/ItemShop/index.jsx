import { useState } from 'react';
import './styles.scss';
import { ReactComponent as Consumables } from '../../assets/svg/ItemShop/Consumables.svg';
import { ReactComponent as ConsumablesMobile } from '../../assets/svg/ItemShop/ConsumablesMobile.svg';
import Price from '../../assets/svg/ItemShop/Price.png';

const ItemShop = () => {
  const shopItemsArray = [
    {
      id: 1,
      name: 'Item Name 1',
      price: 1500,
      description:
        'Lorem Ipsum is simply dummy text of the printieen the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 2,
      name: 'Item Name 2',
      price: 1600,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 3,
      name: 'Item Name 3',
      price: 1500,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum s popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
            <div className='image_box'></div>
            <div className='title' title='Item Name'>
              {selectedCard && selectedCard.name}
            </div>
          </div>
          <div className='description_wrap scroll_bar'>
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
      <div className='value_wrap' title={data}>
        <img src={Price} alt='price' />
        <div className='price'>{data && numberWithCommas(data.price)}</div>
      </div>
    </div>
  );
};

export default ItemShop;
