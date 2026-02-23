// declare a function for all the interview btn click action
function handleRejectedClick(cardNumber) {
  //   console.log(`interview clicked in card ${cardNumber}`);

  //get the badge element of that clicked card
  const card = document.getElementById(`card-${cardNumber}`);
  //   console.log(card); //found alhumdulillah
  const badge = card.querySelector(".badge");
  //   console.log(badge);

  // set the innertext to interview
  badge.innerText = "Rejected";

  // remove the classlist from that class
  badge.classList.remove("text-neutral", "bg-base-200");
  badge.classList.add("btn", "btn-outline", "btn-error", "rounded-xl");

  // clone the card
  const cloneCard = card.cloneNode(true);
  // console.log(cloneCard);

  // get the parent section where to add the card
  const parentDivInterview = document.getElementById("rejected-section");

  //check if there no job avaiable card is there
  const noJob = document.getElementById("rejected-section-card");

  if (noJob) {
    noJob.remove();
  }

  // apend the child
  parentDivInterview.appendChild(cloneCard);
}
