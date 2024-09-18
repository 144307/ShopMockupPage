function TestBlock() {
  function modifyCart() {
    return {
      decrease: () => {
        console.log("decrease");
      },
      increase: () => {
        console.log("decrease");
      },
    };
  }

  return (
    <>
      <button
        onClick={(e) => {
          modifyCart.decrease();
        }}
      >
        Test Button
      </button>
    </>
  );
}

export default TestBlock;
