export const setSearchFocus = () => {
  document.getElementById("search").focus();
};

export const showClearTextButton = () => {
  const search = document.getElementById("search");
  const clear = document.getElementById("clear");
  // console.log("saerch is ",search);
  // console.log("saerch is ",search.value.length);
  if (search.value.length) {
    console.log("classlist of clear is",clear.classList);
    clear.classList.remove("none");
    clear.classList.add("flex");
  } else {
    clear.classList.add("none");
    clear.classList.remove("flex");
  }
};

export const clearSearchText = (event) => {
  // console.log("event of clearserhctexxt  iss ",event);
  event.preventDefault();
  
  document.getElementById("search").value = "";
  const clear = document.getElementById("clear");
  clear.classList.add("none");
  clear.classList.remove("flex");
  setSearchFocus();
};

export const clearPushListener = (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    document.getElementById("searchButton").click();
  }
};
