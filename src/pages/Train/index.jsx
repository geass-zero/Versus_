import './styles.scss';
import Arrow from '../../assets/images/Icon awesome-arrow-left.png';

const Train = () => {
    return (
        <section className='train_wrap'>
            <div className='content_wrap'>
                <div className='flex_box'>
                    <div className='x2'>
                        <div
                            className='box_wrap'
                            data-aos='zoom-in'
                            data-aos-offset='0'
                            data-aos-duration='200'>
                            <div
                                className='main_title'
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='400'>
                                Currently Training
                            </div>
                            <div
                                className='selection_wrap'
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='450'>
                                <img src={Arrow} alt='arrow' />
                                <select>
                                    <option value='#128 OWAIL'>
                                        #128 OWAIL
                                    </option>
                                </select>
                            </div>
                            <div
                                className='white_box'
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='500'>
                                <div className='range_wrap'>
                                    Wins until next level: 2
                                    <div className='rangebox'>
                                        <div
                                            className='current_range'
                                            style={{ width: '62%' }}></div>
                                    </div>
                                </div>
                                <div className='level'>Level 10</div>
                                <div className='details border_bottom'>
                                    <div className='item'>
                                        ATK: <span>1</span>
                                    </div>
                                    <div className='item'>
                                        DEF: <span>1</span>
                                    </div>
                                    <div className='item'>
                                        SPD: <span>1</span>
                                    </div>
                                </div>
                                <div className='details'>
                                    <div className='item'>
                                        SP.ATK: <span>1</span>
                                    </div>
                                    <div className='item'>
                                        SP.DEF: <span>1</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className='contents'
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='600'>
                                <div className='title'>Bitcoin Price</div>
                                <div className='value'>$39,490</div>
                                <p>Will it go up or down in 5 minutes?</p>
                            </div>
                            <div
                                className='buttons_wrap'
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='700'>
                                <div className='button contrast'>Up</div>
                                <div className='button'>Down</div>
                            </div>
                        </div>
                    </div>
                    <div className='x2'></div>
                </div>
            </div>
        </section>
    );
};

export default Train;
