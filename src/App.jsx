/* :::: APP :::: */
import { useState } from 'react';
import DropZone from '../components/DropZone/index.jsx';
import './App.css';

function App() {
  const [player, setPlayer] = useState([
    { id: 1, title: 'T-Rex', emoji: '🦖' },
    { id: 2, title: 'unicorn', emoji: '🦄' },
    { id: 3, title: 'robot', emoji: '🤖' },
    { id: 4, title: 'dracula', emoji: '🧛' },
    { id: 5, title: 'picadilly', emoji: '🧚' },
    { id: 6, title: 'stonehead', emoji: '🗿' },
  ]);

  return (
    <div>
      <DropZone player={player} id={player.id} />
    </div>
  );
}

export default App;
