
var factList = [
  "About 6.5 million companion animals enter US animal shelters every year. In this 6.5 million, 3.3 million are dogs and 3.2 million are cats.",
  "About 1.5 million shelter animals are euthanized each year. However this number had decreased 2.6 million that was recorded in 2011. This decrease can be explained by increase in adoption and increase in animals returned to owners.",
  "About 3.6 million shelter animals are adopted each year.",
  "Approximately 710,000 animals who enter animal shelters as strays are returned to their owners. In this 710,000, a majority of 620,000 are dogs and only 90,000 are cats. ",
  "About 34% of dogs are purchased from breeders, while 23% dogs and 31% of cats are obtained from animal shelters or other humane organizations.",

  "You have reached the end of the fact list. Click the button to start again"

];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

factBtn.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML=factList[count];
  count++;
  if (count == factList.length){
    count=0;
  }
}
