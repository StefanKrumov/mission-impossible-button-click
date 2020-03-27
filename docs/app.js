function pageHandler() {
  const message = document.querySelector(".secret-message");
  const hideArea = document.querySelector(".button-hide-area");
  const targetButton = document.getElementById("button-target");
  const hideAreaTitle = document.querySelector(".button-area-title");
  const tryAgainBtn = document.querySelector(".tryAgain");
  let clicksMissed = 0;

  targetButton.style.opacity = "0";
  targetButton.style.top = `${Math.floor(Math.random() * 90)}%`;
  targetButton.style.left = `${Math.floor(Math.random() * 90)}%`;

  function targetClickHandler(timeoutID) {
    hideArea.removeEventListener(`mousemove`, hoverHandler);
    hideArea.style.display = "none";
    message.style.display = "block";
    hideAreaTitle.innerText = "SUCCESS";
    hideAreaTitle.style.color = "green";
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
    }, 400);
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
      tryAgainBtn.style.display = "block";
    }
  }

  function restartGame() {
    clicksMissed = 0;
    hideAreaTitle.innerText = "LOCATE THE BUTTON BELOW:";
    hideAreaTitle.style.color = "black";
    hideArea.style.display = "block";
    tryAgainBtn.style.display = "none";
  }

  hideArea.addEventListener(`mousemove`, hoverHandler);
  hideArea.addEventListener(`click`, hideAreaClickHandler);
  tryAgainBtn.addEventListener(`click`, restartGame);
}

document.addEventListener("DOMContentLoaded", pageHandler);
