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

//get the main container
const mainContainer = document.querySelector("main");
// console.log(mainContainer);

mainContainer.addEventListener("click", function (event) {
  const clickedCardParentNode = event.target.parentNode.parentNode.parentNode;
  const cloneCard = clickedCardParentNode.cloneNode(true);
  //   console.log('im m cloned',cloneCard);

   // Check if it's an interview button click
  if (event.target.classList.contains('interview-btn') || event.target.closest('.interview-btn')) {
    const interviewExits = interviewArrCount.find(
      (item) => item.isEqualNode(cloneCard)
    );
    if (!interviewExits) {
      interviewArrCount.push(cloneCard);
    }
  }
  
  // Check if it's a reject button click
  if (event.target.classList.contains('reject-btn') || event.target.closest('.reject-btn')) {
    const rejectExits = rejectArrCount.find(
      (item) => item.isEqualNode(cloneCard)
    );
    if (!rejectExits) {
      rejectArrCount.push(cloneCard);
    }
  }
  
  // Update the count after pushing
  count();
});
