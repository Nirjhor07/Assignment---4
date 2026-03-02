// console.log("index connectted ");

let currentTab = "all";
const actIveTab = ["btn", "btn-outline", "btn-primary"];
const InactiveTab = ["btn", "btn-primary"];

//get all the classes
const allJobCards = document.getElementById("allCards");
// console.log(allJobCards);
const interviewSection = document.getElementById("interview-section");
// console.log(interviewSection);
const rejectedSection = document.getElementById("rejected-section");
// console.log(rejectedSection);
// empty state re doira niya ashi
const noJobsAvailable = document.getElementById(
  "interview-reject-section-card",
);

//get the whole class
const mainCls = document.getElementById("main");

// const tabs = [];
function swtichTab(tab) {
  //   console.log(tab);
  // tabs.push(tab);
  // console.log(tabs);
  const tabs = ["all", "interview", "rejected"];

  //reset button back to the default when not selectted
  for (const tElement of tabs) {
    const tabName = document.getElementById("tab-" + tElement);
    if (tElement === tab) {
      tabName.classList.remove(...actIveTab);
      tabName.classList.add(...InactiveTab);
    } else {
      tabName.classList.remove(...InactiveTab);
      tabName.classList.add(...actIveTab);
    }
  }

  //hide all the cards from everysection
  const pages = [allJobCards, interviewSection, rejectedSection];
  for (const page of pages) {
    page.classList.add("hidden");
  }
  //initially hide kore rakhi
  noJobsAvailable.classList.add("hidden");

  //only show the class when the tab selectted
  if (tab === "all") {
    // console.log("hae ami hocccih allCrads parent section");
    allJobCards.classList.remove("hidden");
    if (allJobCards.children.length < 1) {
      noJobsAvailable.classList.remove("hidden");
    }
  } else if (tab === "interview") {
    // console.log("hae ami hocccih allCrads parent section");
    interviewSection.classList.remove("hidden");
     if (interviewSection.children.length < 1) {
      noJobsAvailable.classList.remove("hidden");
    }
  } else if (tab === "rejected") {
    // console.log("hae ami hocccih allCrads parent section");
    rejectedSection.classList.remove("hidden");
      if (rejectedSection.children.length < 1) {
      noJobsAvailable.classList.remove("hidden");
    }
  }
}
swtichTab(currentTab);

//Update count of cards in every section
const allCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectCount = document.getElementById("reject-count");

// allCount.innerText = allJobCards.children.length;

//event delegation to swtich tabs
mainCls.addEventListener("click", function (event) {
  const clickedElement = event.target;
  const selecttedCard = clickedElement.closest(".card");
  //getting the status class 'Not Apllied ' so that i can change it by click
  const status = selecttedCard.querySelector(".state");
  // console.log(status);
  //parent node of card
  const parent = selecttedCard.parentNode;

  if (clickedElement.classList.contains("interview-btn")) {
    // console.log("im clicked", clickedElement);
    interviewSection.appendChild(selecttedCard);
    status.innerText = "interview";
    status.className = "badge badge-success text-sm p-4 text-white state";
    countUpdate();
  }
  if (clickedElement.classList.contains("reject-btn")) {
    rejectedSection.appendChild(selecttedCard);
    status.innerText = "Rejectted";
    status.className = "badge badge-error text-sm p-4 text-white state";
    countUpdate();
  }
  if (clickedElement.classList.contains("dlt-btn")) {
    // console.log("dlt btn class", parent);
    parent.removeChild(selecttedCard);
    countUpdate();
  }
});

// count update

function countUpdate() {
  allCount.innerText = allJobCards.children.length;
  interviewCount.innerText = interviewSection.children.length;
  rejectCount.innerText = rejectedSection.children.length;
}
countUpdate();
