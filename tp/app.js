const btn = document.querySelector(".btn");
const sizeInput = document.querySelector(".size");
const familyInput = document.querySelector(".family");
const weightInput = document.querySelector(".weight");
const decorationInput = document.querySelector(".decoration");
const inputTxt = document.querySelector(".inputTxt");
const output = document.querySelector(".output");

const applyStyles = (o, s, f, w, d) => {
  output.innerHTML = `<p style="font-size : ${s}; font-family:${f}; font-weight : ${w}; text-decoration : ${d};">${inputTxt.value}</p>`;
};

btn.addEventListener("click", () => {
  const size = sizeInput.value;
  const family = familyInput.value;
  const weight = weightInput.value;
  const decoration = decorationInput.value;
  const output = inputTxt.value;
  applyStyles(output,size, family, weight, decoration);
});
