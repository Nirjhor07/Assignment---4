// document
//   .getElementById("interview-card-1")
//   .addEventListener("click", function () {
//     console.log("im clicked in card 1 interview");
//     //1st a doira niya amu jetar state change korte chaitasi
//     const notApplied = document.getElementById("not-applied");

//     // chnage the state to a new state
//     notApplied.innerText = "Interview";

//     //add class
//     notApplied.classList.remove("bg-base-200");
//     notApplied.classList.add("btn", "btn-outline", "btn-success");
//   });

// declare a function for all the interview btn click action
function handleInterviewClick(cardNumber) {
  // console.log(`interview clicked in card ${cardNumber}`);

  //get the badge element of that clicked card
  const card = document.getElementById(`card-${cardNumber}`);
  //   console.log(card); //found alhumdulillah
  const badge = card.querySelector(".badge");
  // console.log(badge);

  // set the innertext to interview
  badge.innerText = "Interview";

  // remove the classlist from that class
  badge.classList.remove("text-neutral", "bg-base-200");
  badge.classList.add("btn", "btn-outline", "btn-success", "rounded-xl");

  // clone the card
  const cloneCard = card.cloneNode(true);
  // console.log(cloneCard);

  // get the parent section where to add the card
  const parentDivInterview = document.getElementById("interview-section");

  //check if there no job avaiable card is there
  const noJob = document.getElementById("interview-section-card");

  if (noJob) {
    noJob.remove();
  }

  // apend the child
  parentDivInterview.appendChild(cloneCard);
}
