/* :::: Ingredients :::: */
import { useState } from 'react';
import styles from './style.module.css';

export default function Notes() {
  const [note, setNote] = useState('');
  function inputValue(event) {
    const text = event.target.value;
    setNote(text);
  }
  function addItem(event) {
    event.preventDefault();
    console.log('click');
  }
  return (
    <div className={styles.wrap}>
      <p className={styles.heading}>drag n drop kit react</p>
      <form>
        <label className={styles.label}>
          note:
          <input
            className={styles.note}
            onChange={inputValue}
            type="text"
            name="addTopping"
            min="4"
            max="26"
            autoComplete="off"
          />
        </label>
        <button onClick={addItem}>add</button>
      </form>
    </div>
  );
}
