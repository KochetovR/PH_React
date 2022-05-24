import Title from "components/Title";
import Description from "components/Description";

import s from './HowToUsePage.module.scss';

import data from '../../data/data.json'

const subTitle = 'This application will tell you how to play in a certain situation. First, choose a situation that interests you. Then, indicate your seat at the table. If necessary, indicate the positions of the opponents one by one. Select your stack and click "calculate". You will see a heatmap with hands marked in different colors and legends about what those colors mean.'

const HowToUsePage = () => {
    return (
        <>
            <Title title="How to use" />
            <div className={s.block}>
                <p className={s.subTitle}>{ subTitle}</p>
                {data.map(({ title, description }) => (
                    <Description key={title} title={title} description={ description}/>
                ))}
            </div>
        </>
        
    )
}

export default HowToUsePage;