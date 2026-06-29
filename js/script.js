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

const donorForm = document.getElementById("donorForm");

if (donorForm) {
    donorForm.addEventListener("submit", function(e) {
        e.preventDefault();

        document.getElementById("donorSuccess").innerText =
            "Donation Registered Successfully!";

        donorForm.reset();
    });
}