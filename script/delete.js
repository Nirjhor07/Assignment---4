//get the main container
const mainContainer = document.querySelector("main");
// console.log(mainContainer);

mainContainer.addEventListener("click", function (event) {
  // Check if the clicked element is a delete button or its child icon
  if (
    event.target.classList.contains("fa-trash") ||
    event.target.closest(".btn-circle")
  ) {
    // Find the card parent (the div with id like "card-1")
    const card = event.target.closest(".card");
    if (card) {
      card.remove();
    }
  }
});


