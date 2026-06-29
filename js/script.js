console.log("Community Aid Bridge Loaded Successfully!");
const ngoForm = document.getElementById("ngoForm");

if (ngoForm) {

ngoForm.addEventListener("submit", function(e){

e.preventDefault();

alert("NGO Registered Successfully!");

ngoForm.reset();

});

}