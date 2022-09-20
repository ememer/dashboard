export const getTotalFollowers = (dashboardData) => {
    const headerTitle = document.getElementsByClassName("header-title")[0];
    let followers = 0;
    dashboardData.map(
      (socialMediaData) => (followers += socialMediaData.followers)
    );
    headerTitle.lastElementChild.innerText = `Total followers: ${followers
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    return followers;
  };