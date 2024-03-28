function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = [...arr].reduce((a, b) => a + b) / arr.length;
  return {
  min: min,
  max: max,
  avg: Number(avg.toFixed(2)),
  };
  // return result;
  // return { min: min, max: max, avg: avg };
  }
  
  function summElementsWorker(...arr) {
  if (arr.length !== 0) {
  let sumArr = arr.reduce((a, b) => a + b);
  return sumArr;
  } else {
  return 0;
  }
  }
  
  function differenceMaxMinWorker(...arr) {
  if (arr.length !== 0) {
  return Math.max(...arr) - Math.min(...arr);
  } else {
  return 0;
  }
  }
  
  function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length == 0) {
  return 0;
  } else {
  arr.forEach((item) => {
  if (item % 2 == 0) {
  sumEvenElement += item;
  } else {
  sumOddElement += item;
  }
  });
  }
  return sumEvenElement - sumOddElement;
  }
  
  function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length == 0) {
  return 0;
  } else {
  arr.forEach((item) => {
  if (item % 2 == 0) {
  sumEvenElement += item;
  countEvenElement++;
  }
  });
  return sumEvenElement / countEvenElement;
  }
  }
  
  function makeWork(arrOfArr, func) {
  let maxWorkerResult = [];
  arrOfArr.forEach((element) => {
  maxWorkerResult.push(func(...element));
  });
  return Math.max(...maxWorkerResult);
  }
  
  console.log(
  makeWork(
  [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62],
  ],
  averageEvenElementsWorker
  )
  );
  
  