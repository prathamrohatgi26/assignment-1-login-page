function getData() {
  //gettting the values
  var name = document.getElementById("full_name").value;
  //saving the values in local storage
  localStorage.setItem("txtValue", name);
}

document.getElementById("data").innerHTML = localStorage.getItem("txtValue");
