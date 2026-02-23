// declare a function for all the interview btn click action
function handleRejectedClick (cardNumber) {
//   console.log(`interview clicked in card ${cardNumber}`);

  //get the badge element of that clicked card
  const card = document.getElementById(`card-${cardNumber}`);
  //   console.log(card); //found alhumdulillah
  const badge = document.querySelector(".badge");
//   console.log(badge);

  // set the innertext to interview
  badge.innerText = "Rejected";

  // remove the classlist from that class
  badge.classList.remove("text-neutral", "bg-base-200");
  badge.classList.add("btn", "btn-outline", "btn-error", "rounded-xl");
}
