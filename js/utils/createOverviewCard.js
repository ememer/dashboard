import { displayIncreasingOrLoosing } from "./displayIncreasingOrLoosing.js";

export const createOverviewCardContent = (content) => {
    //Randomize percentage
    const toDayDate = new Date().getDate();
    const randomNumber = Math.floor(Math.random() * (11400 - 800) + 800);
    const randomNumberFromDate = randomNumber / toDayDate;
    //Creating DOM elements needed in card
    const cardContainer = document.createElement("div");
    const subtitleCard = document.createElement("h2");
    const overviewIcon = document.createElement("img");
    const socialQuantity = document.createElement("span");
    const socialPercentage = document.createElement("span");
    //Filling DOM elements
    subtitleCard.innerText = content.title;
    overviewIcon.src = content.icon;
    overviewIcon.alt = content.socialMedia;
    socialQuantity.innerText = content.quantity;
    socialPercentage.innerText = `${Math.floor(randomNumberFromDate)}%`;
    //DOM elements classLists
    cardContainer.classList.add("overview-card");
    //Randomize color of new or lost subs
    displayIncreasingOrLoosing(randomNumberFromDate,270,socialPercentage,"overview-percentage")
    //Fill card container
    cardContainer.append(
      subtitleCard,
      overviewIcon,
      socialQuantity,
      socialPercentage
    );
    return cardContainer;
  };