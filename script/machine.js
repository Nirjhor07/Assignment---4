//hide all classes just show interview class
function hideAllClasses(id) {
  //get the all class means cards
  const interview = document.getElementById("interview-section");
  const rejected = document.getElementById("rejected-section");
  const card1 = document.getElementById("card-1");
  const card2 = document.getElementById("card-2");
  const card3 = document.getElementById("card-3");
  const card4 = document.getElementById("card-4");
  const card5 = document.getElementById("card-5");
  const card6 = document.getElementById("card-6");
  const card7 = document.getElementById("card-7");
  const card8 = document.getElementById("card-8");
  //hide all the classes
  interview.classList.add("hidden");
  rejected.classList.add("hidden");
  card1.classList.add("hidden");
  card2.classList.add("hidden");
  card3.classList.add("hidden");
  card4.classList.add("hidden");
  card5.classList.add("hidden");
  card6.classList.add("hidden");
  card7.classList.add("hidden");
  card8.classList.add("hidden");

  //checks if all btn is pressed or not
  if (id === "all") {
    card1.classList.remove("hidden");
    card2.classList.remove("hidden");
    card3.classList.remove("hidden");
    card4.classList.remove("hidden");
    card5.classList.remove("hidden");
    card6.classList.remove("hidden");
    card7.classList.remove("hidden");
    card8.classList.remove("hidden");
  } else {
    // show only the class that has been clicked
    const showClass = document.getElementById(id);
    showClass.classList.remove("hidden");
  }
}
