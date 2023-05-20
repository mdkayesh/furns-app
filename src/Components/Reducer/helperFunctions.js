const counterInc = (arry, id) => {
  let updateElem;
  updateElem = arry.map((curItem) => {
    if (curItem.id === id) {
      let decAmount = curItem.amount + 1;

      if (decAmount >= curItem.stock) {
        decAmount = curItem.stock;
      }

      return { ...curItem, amount: decAmount };
    } else {
      return { ...curItem };
    }
  });

  return updateElem;
};

// counter decrement function;

const counterDec = (arry, id) => {
  let updateElem;
  updateElem = arry.map((curItem) => {
    if (curItem.id === id) {
      let decAmount = curItem.amount - 1;

      if (decAmount <= 1) {
        decAmount = 1;
      }

      return { ...curItem, amount: decAmount };
    } else {
      return { ...curItem };
    }
  });

  return updateElem;
};

export { counterInc, counterDec };
