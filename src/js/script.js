const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge")
aMettreEnRouge.style.color = "red"

const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click")
enRougeSuiteAClick.addEventListener("click", () => {
  enRougeSuiteAClick.style.color = "red"
})