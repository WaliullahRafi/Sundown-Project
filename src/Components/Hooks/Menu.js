//

function Menu() {
  const menu = document.querySelector("nav h3");
  console.log(menu);
  const fullScreen = document.querySelector(".full-screen");
  console.log(fullScreen);
  menu.addEventListener("cLick", () => {
    fullScreen.style.top = 0;
  });
}

export default Menu;
