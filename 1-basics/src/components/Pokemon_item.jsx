import './Pokemon_item.css';

export const Pokemon_item = ({listItem}) => (
<div className='pokemon_item'>
<div className='pokemon_id'>{listItem.id}</div>
  <div className='pokemon_name'>{listItem.name}</div>
</div>
);