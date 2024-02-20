/* :::: Ingredients :::: */
import styles from './style.module.css';

export default function Notes() {
  return (
    <div className={styles.wrap}>
      <p className={styles.heading}>drag n drop kit react</p>
      <form>
        <label className={styles.label}>
          note:
          <input
            className={styles.note}
            type="text"
            name="addTopping"
            min="4"
            max="26"
            autoComplete="off"
          />
        </label>
      </form>
    </div>
  );
}
