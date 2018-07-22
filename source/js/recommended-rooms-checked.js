var recommendedRoomsBlock = document.querySelector(".recommended-rooms");
var recommendedRoomsLabel = document.querySelectorAll(".recommended-rooms__item");

recommendedRoomsBlock.addEventListener("click", function(evt) {
  evt.preventDefault();
  var targetElement = evt.target;

  while (targetElement !== this) {
    if (targetElement.classList.contains("recommended-rooms__item")) {
      checkRoom (targetElement);
      this.setAttribute("data-heading", "Ваша переговорка");
      return;
    };
    targetElement = targetElement.parentNode;
  };
});

function checkRoom (element) {
  for (var i = 0; i < recommendedRoomsLabel.length; i++) {
    if (recommendedRoomsLabel[i] != element) {
      recommendedRoomsLabel[i].classList.add("recommended-rooms__item--hide");
    }
    element.classList.add("recommended-rooms__item--checked");
  }
};
