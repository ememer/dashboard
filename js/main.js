import { dashboardData } from "./utils/dashBoardData.js";
import { overviewData } from "./utils/overviewData.js";
import { getTotalFollowers } from "./utils/getTotalFollowers.js";
import { createOverviewCardContent } from "./utils/createOverviewCard.js";
import { socialCardContent } from "./utils/createSocialCardContent.js";
import { generateRandomNumbers } from "./utils/generateRandomNumberFields.js";
import { convertStringToNumbersArray } from "./utils/convertStringToNumbersArray.js";
// import { generateRandomNumbers } from "./utils/generateRandomNumberFields.js";

// initialize localStore
localStorage.setItem("responseValue", []);

const mainContainer = document.querySelector("main");
const socialMediaSection = document.createElement("section");
const overviewSection = document.createElement("section");
mainContainer.appendChild(socialMediaSection);
mainContainer.classList.add("container");

// Display total followers in title section
getTotalFollowers(dashboardData);

//Create socialCard section

const createSocialCard = (dashboardElements, container, response) => {
  const resp = response;
  container.classList.add("section");
  dashboardElements.forEach((dashboardElement) =>
    container.appendChild(socialCardContent(dashboardElement, resp))
  );
  return container;
};

createSocialCard(dashboardData, socialMediaSection, []);

const removeSocialCard = () => {
  const socialCards = document.querySelectorAll("[class^=social-card]");
  socialCards.forEach((elem) => elem.remove());
};

const storeCardsData = (dataArray) => {
  //remove existing carts
  removeSocialCard();
  createSocialCard(dashboardData, socialMediaSection, dataArray);
  getTotalFollowers(dashboardData);
};


function useLocalStore() {
  const localStoreLength = localStorage.getItem("responseValue").length
  const localStorageArrayLength = convertStringToNumbersArray(
    localStorage.getItem("responseValue")).length
  const localStorageArray = convertStringToNumbersArray(
    localStorage.getItem("responseValue")
  )
  
  return {
    localStoreLength,
    localStorageArrayLength,
    localStorageArray
  }
}


const fetchRndNumb = async () => {
  const api = await fetch(
    "http://www.randomnumberapi.com/api/v1.0/randomredditnumber?min=100&max=1000&count=4"
  );
  const response = await api.json();
  if (useLocalStore().localStoreLength === 0) {
    localStorage.setItem("responseValue", response)
    storeCardsData(response)
  } else if (useLocalStore().localStorageArrayLength >= 8) {
    const prevStateOfLocalStore = useLocalStore().localStorageArray;
    const filteredPrevStateLocalStore =
      prevStateOfLocalStore.filter((number, index) => index < 4) ?? null;
    localStorage.removeItem("responseValue");
    localStorage.setItem("responseValue", [...response, filteredPrevStateLocalStore]);
    const filteredArray = useLocalStore().localStorageArray
    storeCardsData(filteredArray)
  } else {
    const prevStateOfLocalStore = convertStringToNumbersArray(
      localStorage.getItem("responseValue")
    );
    localStorage.removeItem("responseValue");
    localStorage.setItem("responseValue", [...response, prevStateOfLocalStore]);
    const prevStateArray = useLocalStore().localStorageArray
    storeCardsData(prevStateArray)
  }
};

setInterval(() => {
  fetchRndNumb();
}, 4000);

//Create overview section title

const overviewTitle = document.createElement("h2");

const overviewTitleSection = mainContainer.appendChild(overviewTitle);
overviewTitleSection.innerText = "Overview - Today";
overviewTitleSection.classList.add("overview-title");

//Overview section

const createOverViewCard = (overViewElements) => {
  const container = mainContainer.appendChild(overviewSection);
  container.classList.add("section");
  overViewElements.forEach((element) =>
    container.appendChild(createOverviewCardContent(element))
  );
  return container;
};

createOverViewCard(overviewData);
