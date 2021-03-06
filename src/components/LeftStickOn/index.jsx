import './styles.scss';
import Bull from '../../assets/images/characters/Bull.gif';
import Snake from '../../assets/images/characters/snake.gif';
import Bat from '../../assets/images/characters/bat.gif';
import Moon from '../../assets/images/characters/moon.gif';
import { useEffect, useState } from 'react';

import { ReactComponent as HideArrow } from '../../assets/svg/HideArrow.svg';

const defaultData = [
  { id: 1, image: Bull },
  { id: 2, image: Snake },
  { id: 3, image: Moon },
  { id: 4, image: Bat },
  { id: 5, image: Moon },
  { id: 6, image: Bull },
];

const LeftStickOn = ({
  data = defaultData,
  defaultSelected = defaultData[2],
  onClick,
}) => {
  const [selected, setSelected] = useState(defaultSelected);
  const [isHidden, setHidden] = useState(true);

  const onClickHandler = (newSelected) => {
    setSelected(newSelected);
    onClick && onClick(newSelected);
  };

  useEffect(() => {
    if (isHidden)
      document
        .getElementsByTagName('main')[0]
        .classList.add('left_panel_hidden');
    else
      document
        .getElementsByTagName('main')[0]
        .classList.remove('left_panel_hidden');

    return () => {
      document
        .getElementsByTagName('main')[0]
        .classList.remove('left_panel_hidden');
    };
  }, [isHidden]);

  return (
    <div className={`left_stick_on_wrapper ${isHidden ? 'is_hidden' : ''}`}>
      <div className='hide_icon'>
        <HideArrow onClick={() => setHidden(!isHidden)} />
      </div>
      <div className='left_stick_on'>
        <div className='left_stick_on_box'>
          {data.map((item, index) => (
            <div
              key={index}
              className={`item ${item.id === selected.id ? 'active' : ''}`}
              onClick={() => onClickHandler(item)}>
              <div className='character_circle'>
                {/* <img src={item.image} alt='character' /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftStickOn;
