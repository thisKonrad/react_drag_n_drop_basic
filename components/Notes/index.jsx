/* :::: Ingredients :::: */

export default function Ingredients() {
  return (
    <form>
      <label>
        topping:
        <input type="text" name="addTopping" min="4" max="26" />
      </label>
    </form>
  );
}
