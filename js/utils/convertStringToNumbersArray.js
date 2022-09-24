export const convertStringToNumbersArray = (numbers) => {
    const arrayOfIndexes = [];
    let idx = 0;
    for (const number of numbers) {
      number === "," ? arrayOfIndexes.push(idx) : null;
      idx++;
    }
  
    let firstIndexNumb = 1;
    const numbersArray = [];
  
    // slicing string by numbers and convert to number
  
    numbersArray.push(+numbers.slice(0, arrayOfIndexes[0]));
    arrayOfIndexes.map((firstNumber) => {
      numbersArray.push(+numbers.slice(firstNumber+1,arrayOfIndexes[firstIndexNumb]));
      return firstIndexNumb++;
    });
  
    firstIndexNumb++;
  
  
    return { numbers, arrayOfIndexes, numbersArray };
  };
  