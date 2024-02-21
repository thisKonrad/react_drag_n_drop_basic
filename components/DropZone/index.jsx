/* :::: Ingredients :::: */
import { useState, useRef } from 'react';

import styles from './style.module.css';

export default function DropZone() {
  const [player, setPlayer] = useState([
    { id: 1, title: 'T-Rex', emoji: '🦖' },
    { id: 2, title: 'unicorn', emoji: '🦄' },
    { id: 3, title: 'robot', emoji: '🤖' },
    { id: 4, title: 'dracula', emoji: '🧛' },
    { id: 5, title: 'picadilly', emoji: '🧚' },
    { id: 6, title: 'stonehead', emoji: '🗿' },
  ]);

  const dragPlayer = useRef(0);
  const dragOverPlayer = useRef(0);

  function handleDragSort() {
    const copyPlayer = [...player];
    const actualPlayer = copyPlayer[dragPlayer.current];
    copyPlayer[dragPlayer.current] = copyPlayer[dragOverPlayer.current];
    copyPlayer[dragOverPlayer.current] = actualPlayer;
    setPlayer(copyPlayer);
  }

  return (
    <section className={styles.wrap}>
      <p className={styles.title}>hello draggers!</p>
      {player &&
        player.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => (dragPlayer.current = index)}
            onDragEnter={() => (dragOverPlayer.current = index)}
            onDragEnd={handleDragSort}
            onDragOver={(event) => event.preventDefault()}
          >
            <p className={styles.player}>
              {item.emoji}:{item.title}
            </p>
          </div>
        ))}
    </section>
  );
}
