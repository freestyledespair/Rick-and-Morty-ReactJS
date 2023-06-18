import React, { useEffect, useState } from 'react';
import { API } from './API';
import './App.css'
import Modal from './Components/Modal/Modal';
const App = () => {

  const [characters, setCharacters] = useState([])
  const [more, setMore] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const showModal = (id) => {
    setMore(true)
    setCurrentUser(id)
  }
  const hideModal = () => {
    setMore(false)
  }
  const getCharacters = async () => {
    const request = await fetch(API)
    const response = await request.json()
    setCharacters(response.results);
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div className='info'>
      {
        characters.map(item => (
          <div className='card' key={item.id}>
            <img className='card_img' src={item.image} alt="" />
            <h2 className='font'>{item.name}</h2>
            <button onClick={() => showModal(item.id)} className='btn_more'>More...</button>
            <div className='border_line'></div>
            {currentUser === item.id && more ? <Modal hide={hideModal} character={item} /> : null}
          </div>
        ))
      }
    </div>
  );
};

export default App;




