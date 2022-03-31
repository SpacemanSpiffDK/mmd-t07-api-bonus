// JS by Dan Høegh
// UCN MMD 2021

let visitedCount = 0;
let localValue = localStorage.getItem("visitedAmount");

const updateCountOnPage = () => {
    document.querySelector("#app").innerHTML = visitedCount;
}

if (localValue == null || localValue == ""){
    localStorage.setItem("visitedAmount", "0");
} else {
    visitedCount = localStorage.getItem("visitedAmount");
}
visitedCount++;
localStorage.setItem("visitedAmount", visitedCount);
updateCountOnPage();
document.querySelector("body").classList.add("visited" + visitedCount);

document.querySelector("#resetVisitedAmount")
.addEventListener("click", () => {
    localStorage.setItem("visitedAmount", "0");
    visitedCount = 0;
    updateCountOnPage();
});