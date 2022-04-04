import { ReactComponent as BattleHistoryWrap } from '../../assets/svg/Battle/BattleHistoryWrap.svg';

const BattleHistory = ({ onClose }) => {
  return (
    <div className='battle_history_overlay'>
      <div className='overlay' onClick={onClose}></div>
      <div
        className='history_wrap svg_main_wrap'
        data-aos='fade-up'
        data-aos-offset='0'
        data-aos-duration='400'>
        <BattleHistoryWrap className='box_svg' />
      </div>
    </div>
  );
};

export default BattleHistory;
