import { convertStringToNumbersArray } from "./convertStringToNumbersArray.js";

export const fetchRndNumbers = async (
    url,
    storageName,
    maxSliceCunt,
    maxIndexCount,
    callBack
  ) => {
    
    const LOCAL_STORAGE_LENGTH = localStorage.getItem(storageName)?.length;
  
    const LOCAL_STORAGE_ARRAY = convertStringToNumbersArray(
      localStorage.getItem(storageName)
    );
  
    const LOCAL_STORAGE_ARRAY_LENGTH = convertStringToNumbersArray(
      localStorage.getItem(storageName)
    ).length;
  
    const FETCH_URL = await fetch(url);
    const RESPONSE = await FETCH_URL.json();
  
    if (LOCAL_STORAGE_LENGTH === 0) {
      localStorage.setItem(storageName, RESPONSE);
      callBack(RESPONSE);
    } else if (LOCAL_STORAGE_ARRAY_LENGTH >= maxSliceCunt) {
      const prevStateLocalStore = LOCAL_STORAGE_ARRAY;
      const filteredPrevState =
      prevStateLocalStore.filter((numb, index) => index < maxIndexCount)
      localStorage.setItem(storageName, [...RESPONSE, filteredPrevState]);
      callBack(LOCAL_STORAGE_ARRAY);
    } else {
      const prevStateArray = LOCAL_STORAGE_ARRAY
      localStorage.removeItem(storageName)
      localStorage.setItem(storageName, [...RESPONSE, prevStateArray])
      callBack(LOCAL_STORAGE_ARRAY)
    }
  
  };