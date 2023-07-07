window.onload = function () {
  let input = document.getElementById("myInput");
  input.addEventListener("keyup", searchFunc);
};

function searchFunc() {
  let filter = this.value.toUpperCase();

  let myTable = document.getElementById("myTable");

  let tr = myTable.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let tdList = tr[i].getElementsByTagName("td");
    let match = false;

    for (let j = 0; j < tdList.length; j++) {
      let td = tdList[j];
      let textValue = td.textContent || td.innerText;

      if (textValue.toUpperCase().indexOf(filter) > -1) {
        match = true;
        break;
      }
    }

    if (match) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
