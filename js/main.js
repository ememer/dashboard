import { dashboardData } from "./utils/dashBoardData.js";
import { overviewData } from "./utils/overviewData.js";
import { getTotalFollowers } from "./utils/getTotalFollowers.js";
import { createOverviewCardContent } from "./utils/createOverviewCard.js";
import { socialCardContent } from "./utils/createSocialCardContent.js";
import { fetchRndNumbers } from "./utils/fetchRndNumb.js";

// initialize localStore
localStorage.setItem("responseValue", []);
localStorage.setItem("overviewValue", []);

const mainContainer = document.querySelector("main");
const socialMediaSection = document.createElement("section");
const overviewSection = document.createElement("section");
mainContainer.appendChild(socialMediaSection);
mainContainer.classList.add("container");

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

const storeCardsData = (numbersArray) => {
  //remove existing carts
  removeSocialCard();
  getTotalFollowers(numbersArray);
  createSocialCard(dashboardData, socialMediaSection, numbersArray);
};

const SOCIAL_API_URL =
  "http://www.randomnumberapi.com/api/v1.0/randomredditnumber?min=100&max=1000&count=4";

setInterval(() => {
  fetchRndNumbers(SOCIAL_API_URL, "responseValue", 8, 4, storeCardsData);
}, 4000);

// DarkModeSwitch

const darkModeSwitch = document.querySelector("header button");

darkModeSwitch.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.className === "darkMode"
    ? body.classList.remove("darkMode")
    : body.classList.add("darkMode");
});
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
