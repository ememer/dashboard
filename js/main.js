import { dashboardData } from "./utils/dashBoardData.js";
import { overviewData } from "./utils/overviewData.js";
import { getTotalFollowers } from "./utils/getTotalFollowers.js";
import { createOverviewCardContent } from "./utils/createOverviewCard.js";
import { socialCardContent } from "./utils/createSocialCardContent.js";
import { generateRandomNumbers } from "./utils/generateRandomNumberFields.js";
// import { generateRandomNumbers } from "./utils/generateRandomNumberFields.js";

const mainContainer = document.querySelector("main");
const socialMediaSection = document.createElement("section");
const overviewSection = document.createElement("section");
mainContainer.appendChild(socialMediaSection);
mainContainer.classList.add("container");

// Display total followers in title section
getTotalFollowers(dashboardData);

//Create socialCard section

const createSocialCard = (dashboardElements, container) => {
  container.classList.add("section");
  dashboardElements.forEach((dashboardElement) =>
    container.appendChild(socialCardContent(dashboardElement))
  );
  return container;
};


createSocialCard(dashboardData, socialMediaSection);

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
