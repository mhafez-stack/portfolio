var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 1000);
  document.getElementById("loader").style.display = "block";
  document.getElementById("main").style.display = "none";
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
}