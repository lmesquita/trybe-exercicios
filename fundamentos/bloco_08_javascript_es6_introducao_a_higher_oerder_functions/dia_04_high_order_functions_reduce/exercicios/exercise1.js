const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const transformaArray = arrays.reduce((accumulator, currentValue, currentIndex) => {
  
    accumulator[currentIndex] = currentValue[currentIndex];
    console.log(accumulator);
  }, []);

  return transformaArray;
}

console.log(flatten());
