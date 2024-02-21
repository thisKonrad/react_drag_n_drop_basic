/* :::: Ingredients :::: */
import { useState, useRef } from 'react';

import styles from './style.module.css';

export default function DropZone({ player, id }) {
  const dragPlayer = useRef(0);
  const dragOverPlayer = useRef(0);
  return (
    <section className={styles.wrap}>
      <p className={styles.title}>hello player!</p>
      {player &&
        player.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => (dragPlayer.current = item.id)}
            onDragEnter={() => (dragOverPlayer.current = item.id)}
          >
            <p className={styles.player}>
              {item.emoji}:{item.title}
            </p>
          </div>
        ))}
    </section>
  );
}
