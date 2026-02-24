//creating a function to dynamiccaly update my total count interview count and reject count

//get the elemets
const total = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectCount = document.getElementById("reject-count");

//get the total count by cards from the allCards section
const allCards = document.getElementById("allCards");
//   console.log(allCards.children.length);

//declaring array for other count
let interviewArrCount = [];
let rejectArrCount = [];

function count() {
  total.innerText = allCards.children.length;
  interviewCount.innerText = interviewArrCount.length;
  rejectCount.innerText = rejectArrCount.length;
}
count();

// //get the main container
// const mainContainer = document.querySelector("main");
// // console.log(mainContainer);

// mainContainer.addEventListener("click", function (event) {
//   const clickedCardParentNode = event.target.parentNode.parentNode.parentNode;
//   const cloneCard = clickedCardParentNode.cloneNode(true);
//   //   console.log('im m cloned',cloneCard);

// Function to add to interview count call this from interview.js
function addToInterviewCount(cardId) {
  const card = document.getElementById(`card-${cardId}`);
  if (card) {
    const exists = interviewArrCount.find(item => item.id === card.id);
    if (!exists) {
      interviewArrCount.push(card);
      count();
    }
  }
}

// Function to add to reject count call this from rejection.js
function addToRejectCount(cardId) {
  const card = document.getElementById(`card-${cardId}`);
  if (card) {
    const exists = rejectArrCount.find(item => item.id === card.id);
    if (!exists) {
      rejectArrCount.push(card);
      count();
    }
  }
}
