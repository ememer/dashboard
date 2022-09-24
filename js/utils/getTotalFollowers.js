export const getTotalFollowers = async (dashboardData) => {
  const headerTitle = document.getElementsByClassName("header-title")[0];
  const currentFollowers = await document.querySelectorAll("[class^=social-qty]");
  const followersArr = [...currentFollowers];
  let followers = 0;
  followersArr.map((elem) => (followers += +elem.outerText));
  headerTitle.lastElementChild.innerText = `Total followers: ${followers
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  return followers;
};
