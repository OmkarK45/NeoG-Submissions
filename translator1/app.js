const API_URL = "https://api.funtranslations.com/translate/minion.json";
const input = document.querySelector(".inputText");
const btn = document.querySelector(".btn");
const output = document.querySelector(".outputText");

const handleError = (err) => {
  console.log(err);
  if (err.code === 429) {
    alert("Please wait as API Rate Exceeded! Thank You :D");
  }
};

const translator = (inputText) => {
  fetch(API_URL + "?text=" + inputText)
    .then((res) => res.json())
    .then((obj) => {
      if (!obj.error) {
        console.log(obj);
        output.value = obj.contents.translated;
      } else {
        throw obj.error;
      }
    })
    .catch((err) => {
      handleError(err);
    });
};

btn.addEventListener("click", () => {
  let inputText = input.value;
  console.log(inputText);
  translator(inputText);
});
