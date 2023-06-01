let textView = document.querySelector(".textview");

// function for inserting numbers and symbols
function insert(num) {
  if (num === "%") {
    num = num.replace("%", "/100");
    textView.value += num;
  } else {
    textView.value += num;
  }
}

// function for equal button
function equals() {
  if (textView.value !== "") {
    textView.value = eval(textView.value);
  }else{
    textView.value === "";
  }
}

// function for clearing screen
function clean() {
  textView.value = "";
}

// function for clicking C(del) button
function back() {
  textView.value = textView.value.slice(0, -1);
}
