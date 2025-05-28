function insertToDisplay(data) {
  document.querySelector("#visor").value += data;
}
function clean() {
  document.querySelector("#visor").value = "";
}
function back() {
  const display = document.querySelector("#visor");
  display.value = display.value.slice(0, -1);
}
function result() {
  const display = document.querySelector("#visor");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
