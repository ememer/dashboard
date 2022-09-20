export const generateRandomNumbers = (maxRange, minRange) => {
    const toDayDate = new Date().getDate();
    const randomNumber = Math.floor(
      Math.random() * (maxRange - minRange) + minRange
    );  
    return Math.floor(randomNumber / toDayDate);
};
