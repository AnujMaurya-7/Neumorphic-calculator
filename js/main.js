let screen = document.getElementById("screen");
let numButtons = document.querySelectorAll(".num_key");

let screenValue = "";
for (numItem of numButtons) {
  numItem.addEventListener("click", function (e) {
    // * .target will return the click the element
    screen.value = screenValue;
    let btnText = e.target.innerHTML;
    function clear() {
      if (btnText == "C") {
        screenValue = "";
        screen.value = screenValue;
      }
    }
    clear();

    if (btnText == "X") {
      screenValue += "*";
      screen.value = screenValue;
    } else if (btnText == "=") {
      let evaluated;
      evaluated = eval(screenValue);
      screen.value = evaluated;
      screenValue = evaluated;
    } else if (btnText == "⌫") {
      screenValue = String(screenValue);
      screenValue = screenValue.slice(0, -1); //starting from index 0 and removing element from last index.
      screen.value = screenValue;
    } else {
      screenValue += btnText;
      screen.value = screenValue;
      clear();
    }
  });
}
