const searchBarContainer = document.querySelector(".search-bar-container");

const magniferElement = document.querySelector(".magnifer");
console.log(magniferElement);
// @ts-ignore
magniferElement.addEventListener("click", () => {
  // @ts-ignore
  searchBarContainer.classList.toggle("active");
});
