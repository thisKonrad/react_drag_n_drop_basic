/* :::: APP :::: */
import { useState } from 'react';
import { DndContext, closestCorners } from '@dnd-kit/core';
import DropZone from '../components/Notes/index.jsx';
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
      <DndContext>
        <DropZone player={player} />
      </DndContext>
    </div>
  );
}

export default App;
