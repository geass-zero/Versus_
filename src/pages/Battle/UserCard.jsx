const UserCard = ({ image, title, wins, winRate, ethWon }) => {
    return (
        <div className='user_card'>
            <div className='image'>
                <img src={image} alt='User' />
            </div>
            <div className='details'>
                <div className='title'>{title}</div>
                <div className='wins item'>
                    Wins: <span>{wins}</span>
                </div>
                <div className='rate item'>
                    Win Rate: <span>{winRate}</span>
                </div>
                <div className='eth item'>
                    Eth Won: <span>{ethWon}</span>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
