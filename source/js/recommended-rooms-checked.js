var recommendedRoomsBlock = document.querySelector(".recommended-rooms");
var recommendedRoomsLabel = document.querySelectorAll(".recommended-rooms__item");
var recommendedCancel = document.querySelector(".recommended-rooms__item-delete");

recommendedRoomsBlock.addEventListener("click", function(evt) {
  evt.preventDefault();
  var targetElement = evt.target;

  if (this.classList.contains("recommended-rooms--choose-js")) {
    while (targetElement !== this) {
      if (targetElement.classList.contains("recommended-rooms__item")) {
        checkRoom (targetElement);
        this.setAttribute("data-heading", "Ваша переговорка");
      };
      targetElement = targetElement.parentNode;
    };
    this.classList.remove("recommended-rooms--choose-js");
  } else if (targetElement.classList.contains("recommended-rooms__item-delete")) {
    cancelRoom ();
  }
});

function checkRoom (element) {
  for (var i = 0; i < recommendedRoomsLabel.length; i++) {
    if (recommendedRoomsLabel[i] != element) {
      recommendedRoomsLabel[i].classList.add("recommended-rooms__item--hide");
    }
    element.classList.add("recommended-rooms__item--checked");
  }
};

function cancelRoom () {
  for (var i = 0; i < recommendedRoomsLabel.length; i++) {
    recommendedRoomsLabel[i].classList.remove("recommended-rooms__item--hide");

    if (recommendedRoomsLabel[i].classList.contains("recommended-rooms__item--checked")) {
      recommendedRoomsLabel[i].classList.remove("recommended-rooms__item--checked");
      recommendedRoomsBlock.insertBefore(recommendedRoomsLabel[i], recommendedRoomsBlock.firstChild);
    }
  };

  recommendedRoomsBlock.classList.add("recommended-rooms--choose-js");
  recommendedRoomsBlock.setAttribute("data-heading", "Рекомендованные переговорки");
}
