import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Footer.css';

export const Footer = () => {
    const [count, setCount] = useState(0);
  
    function handleNextClick() {
        setCount(count + 1);
      }

    function handleBackClick() {
        if(count > 0){
      setCount(count - 1);
        }
      }


      return (
        <>
          <Button onClick={handleNextClick}>
            Next
          </Button>
          <Button onClick={handleBackClick}>
            Back
          </Button>
          <h3>  
          {count}
          </h3>
          </>
          )
        }