import { ReactComponent as BattleHistoryWrap } from '../../assets/svg/Battle/BattleHistoryWrap.svg';

const BattleHistory = ({ onClose }) => {
  return (
    <div className='battle_history_overlay'>
      <div className='overlay' onClick={onClose}></div>
      <div className='history_wrap svg_main_wrap'>
        <BattleHistoryWrap className='box_svg' />
      </div>
    </div>
  );
};

export default BattleHistory;
