export const getTotalFollowers = async (followersArray) => {
  const headerTitle = document.getElementsByClassName("header-title")[0];
  const currentFollowersArray = followersArray.filter((number, index)=> index < 4 ? number : null ) ?? []
  let followers = 0;
  currentFollowersArray.map((number) => (followers += number));
  headerTitle.lastElementChild.innerText = `Total followers: ${followers
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  return followers;
};
