function ButtonDecrease({ count, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={count === 0}
    >
      decrease
    </button>
  );
}

export default ButtonDecrease;
