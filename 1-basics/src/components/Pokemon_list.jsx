import './Pokemon_list.css';
import { Pokemon_item } from './Pokemon_item';

export const Pokemon_list = ({list}) => (
  <div className='Pokemon_list'>
      {list.map((item, index)=>(
      <Pokemon_item listItem={item} key={index}/>
))}
  </div>
);
