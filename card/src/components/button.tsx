import { ButtonProps } from './interface';
import './css';

const Button =({text, id, action}:ButtonProps)=>{
    <button className='buttonshowmore' id={id} type='button' onClick={()=>action}>
        {text}
    </button>
}

export default Button;