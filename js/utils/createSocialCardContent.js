import { displayIncreasingOrLoosing } from "./displayIncreasingOrLoosing.js";
import { generateRandomNumbers } from "./generateRandomNumberFields.js";

 

export const socialCardContent = (content) => {

    //Generating number for followers
    const toDayDate = new Date().getDate();
    const randomNumber = Math.floor(Math.random() * (10000 - 2144) + 2144);
    const randomNumberFromDate = randomNumber / toDayDate;
    //Creating DOM elements needed in card
    const cardContainer = document.createElement("div");
    const socialMediaContent = document.createElement("div");
    const userSpan = document.createElement("span");
    const socialImage = document.createElement("img");
    const followersSpan = document.createElement("span");
    const subtitleCard = document.createElement("h2");
    const subCounter = document.createElement("span");
    //Card category
    socialImage.src = content.icon;
    socialImage.alt = content.socialName;
    userSpan.innerText = content.user;
    //Followers qty
    setInterval(()=>{
      followersSpan.innerText = generateRandomNumbers(2000,1444)
    },2500)
    //Daily followers sub qut
    subtitleCard.innerText = content.subtitle.toUpperCase();
    subCounter.innerText = Math.floor(randomNumberFromDate);
    //Containers and elements classList
    cardContainer.classList.add("social-card", `${content.socialName}`);
    cardContainer.id = content.id;
    socialMediaContent.classList.add("social-container");
    followersSpan.classList.add("social-qty");
    subtitleCard.classList.add("social-subtitle");
    //Randomize color of new or lost subs
    displayIncreasingOrLoosing(randomNumberFromDate,311,subCounter,"social-counter")
    socialMediaContent.append(socialImage, userSpan);
    cardContainer.append(
      socialMediaContent,
      followersSpan,
      subtitleCard,
      subCounter
    );
    return cardContainer;
  };