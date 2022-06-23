import  './index.css';
import { CardProps } from './interface';

const Card = ({data}:any):JSX.Element => (
    data.map(({province, confirmed, recovered, deaths}: CardProps)=> (
        <div className='card' key={province}>
            <h2>{province}</h2>
            <ul>
                <li><span>Confirm Case</span>: {confirmed}</li>
                <li><span>Recovered Case</span>: {recovered}</li>
                <li><span>Deaths</span>: {deaths}</li>
            </ul>
        </div>
    ))
)

export default Card;