import { PokemonForm } from './PokemonForm';
import { Footer } from './PokemonForm/Footer';

export const App = () => (
  <div className='App'>
    <header>
      <img src='/assets/header.png' alt='Header pokemon' />
    </header>
    <PokemonForm />
    <Footer />
  </div>
);
