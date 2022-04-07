import { ReactComponent as BattleHistoryWrap } from '../../assets/svg/Battle/BattleHistoryWrap.svg';
import { ReactComponent as BattleHistoryWrapMobile } from '../../assets/svg/Battle/BattleHistoryWrapMobile.svg';

const BattleHistory = ({ onClose }) => {
  return (
    <div className='battle_history_overlay'>
      <div className='overlay' onClick={onClose}></div>
      <div
        className='history_wrap svg_main_wrap'
        data-aos='fade-up'
        data-aos-offset='0'
        data-aos-duration='400'>
        <BattleHistoryWrap className='box_svg mobile_hidden' />
        <BattleHistoryWrapMobile className='box_svg mobile_only' />
      </div>
    </div>
  );
};

export default BattleHistory;
