function pageHandler() {
  const message = document.querySelector(".secret-message");
  const hideArea = document.querySelector(".button-hide-area");
  const targetButton = document.getElementById("button-target");
  targetButton.style.opacity = "0";

  function clickHandler(timeoutID) {
    hideArea.removeEventListener(`mousemove`, hoverHandler);
    hideArea.style.display = "none";
    message.style.display = "block";
    targetButton.innerText = "SUCCESS";
    targetButton.style.background = "radial-gradient(#44ff44, #023801)";
    clearTimeout(timeoutID);
  }

  function hoverHandler(e) {
    if (e.target.id !== "button-target") {
      return;
    }
    e.target.style.opacity = "1";
    const timeoutID = setTimeout(function() {
      e.target.style.opacity = "0";
      e.target.style.top = `${Math.floor(Math.random() * 90)}%`;
      e.target.style.left = `${Math.floor(Math.random() * 90)}%`;
    }, 1000);
    e.target.addEventListener("click", clickHandler.bind(undefined, timeoutID));
  }

  hideArea.addEventListener(`mousemove`, hoverHandler);
}

document.addEventListener("DOMContentLoaded", pageHandler);
