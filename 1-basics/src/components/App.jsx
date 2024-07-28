import { Pokemon_list } from './Pokemon_list';
import { Button } from './Button';
import { Header } from './Header';

import './App.css';

const list = [
  {
    id: 1,
    name: 'Pikachu',
  },
  {
    id: 2,
    name: 'Bulbazaur'
  },
  {
    id: 3,
    name: 'Charmander'
  },
  {
    id: 4,
    name: 'Squirtle'
  }
];

export const App = () => (
  <>
    <Header text='Pokemon App' />
    <Button label='Click me!' />
    <main>
      <Pokemon_list list={list}/>
      <Button label='Do it!' />
    </main>
  </>
);
