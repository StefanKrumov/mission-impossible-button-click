function pageHandler() {
  const message = document.querySelector(".secret-message");
  const hideArea = document.querySelector(".button-hide-area");
  const targetButton = document.getElementById("button-target");
  const hideAreaWrapper = document.querySelector(".button-area-wrapper");
  const hideAreaTitle = document.querySelector(".button-area-title");
  targetButton.style.opacity = "0";
  let clicksMissed = 0;
  targetButton.style.top = `${Math.floor(Math.random() * 90)}%`;
  targetButton.style.left = `${Math.floor(Math.random() * 90)}%`;

  function targetClickHandler(timeoutID) {
    hideArea.removeEventListener(`mousemove`, hoverHandler);
    hideAreaWrapper.style.display = "none";
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
    }, 550);
    e.target.addEventListener(
      "click",
      targetClickHandler.bind(undefined, timeoutID)
    );
  }

  function hideAreaClickHandler(e) {
    if (e.target.id === "button-target") {
      return;
    }
    clicksMissed++;
    if (clicksMissed >= 3) {
      hideArea.style.display = "none";
      hideAreaTitle.innerText = "MISSION FAILED!";
      hideAreaTitle.style.color = "red";
    }
  }

  hideArea.addEventListener(`mousemove`, hoverHandler);
  hideArea.addEventListener(`click`, hideAreaClickHandler);
}

document.addEventListener("DOMContentLoaded", pageHandler);
