console.log("Community Aid Bridge Loaded Successfully!");
const ngoForm = document.getElementById("ngoForm");

if (ngoForm) {

ngoForm.addEventListener("submit", function(e){

e.preventDefault();

alert("NGO Registered Successfully!");

ngoForm.reset();

});

}

// NGO Form

const ngoForm = document.getElementById("ngoForm");

if (ngoForm) {

ngoForm.addEventListener("submit", function(e){

e.preventDefault();

alert("NGO Registered Successfully!");

ngoForm.reset();

});

}

// Volunteer Form

const volunteerForm = document.getElementById("volunteerForm");

if (volunteerForm){

volunteerForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Volunteer Registered Successfully!");

volunteerForm.reset();

});

}