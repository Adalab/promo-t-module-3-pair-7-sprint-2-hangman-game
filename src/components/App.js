import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
//components
import Header from './Header';
import Dummy from './Dummy';
import Footer from './Footer';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Instructions from './Instrucitions';
import Options from './Options';

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';






function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events

  const handleKeyDown = (ev) => {
    // Sabrías decir para qué es esta línea
    ev.target.setSelectionRange(0, 1);
  };

  const handleChange = (ev) => {
    let re = /^[a-zA-ZñÑá-úÁ-Ú´]$/; //add regular pattern 
    if (re.test(ev.target.value) || ev.target.value === '') {
      handleLastLetter(ev.target.value);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };



  


  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className='page'>
      <Header/>
      <main className='main'>
        <section>
        <SolutionLetters word={word} userLetters={userLetters}/>
         <ErrorLetters word={word} userLetters={userLetters}/>
          <Form handleSubmit={handleSubmit} lastLetter={lastLetter} handleKeyDown={handleKeyDown} handleChange={handleChange}/>
        </section>
        <Dummy numberOfErrors={getNumberOfErrors()}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
