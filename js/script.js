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

// ===============================
// Volunteer Registration
// ===============================

const volunteerForm = document.getElementById("volunteerForm");

if (volunteerForm) {
    volunteerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const volunteer = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            skills: document.getElementById("skills").value
        };

        let volunteers = JSON.parse(localStorage.getItem("volunteers")) || [];

        volunteers.push(volunteer);

        localStorage.setItem("volunteers", JSON.stringify(volunteers));

        document.getElementById("successMessage").innerText =
            "Volunteer Registered Successfully!";

        volunteerForm.reset();
    });
}


// ===============================
// Donor Registration
// ===============================

const donorForm = document.getElementById("donorForm");

if (donorForm) {
    donorForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const donor = {
            name: document.getElementById("donorName").value,
            email: document.getElementById("donorEmail").value,
            donation: document.getElementById("donationType").value,
            quantity: document.getElementById("quantity").value,
            message: document.getElementById("message").value
        };

        let donors = JSON.parse(localStorage.getItem("donors")) || [];

        donors.push(donor);

        localStorage.setItem("donors", JSON.stringify(donors));

        document.getElementById("donorSuccess").innerText =
            "Donation Registered Successfully!";

        donorForm.reset();
    });
}


// ===============================
// NGO Registration
// ===============================

const ngoForm = document.getElementById("ngoForm");

if (ngoForm) {
    ngoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const ngo = {
            name: document.getElementById("ngoName").value,
            email: document.getElementById("ngoEmail").value,
            location: document.getElementById("ngoLocation").value,
            need: document.getElementById("ngoNeed").value
        };

        let ngos = JSON.parse(localStorage.getItem("ngos")) || [];

        ngos.push(ngo);

        localStorage.setItem("ngos", JSON.stringify(ngos));

        document.getElementById("ngoSuccess").innerText =
            "NGO Registered Successfully!";

        ngoForm.reset();
    });
}


// ===============================
// Dashboard Counts
// ===============================

const ngoCount = document.getElementById("ngoCount");
const volunteerCount = document.getElementById("volunteerCount");
const donorCount = document.getElementById("donorCount");

function animateCounter(element, target){

    let count = 0;

    const speed = 30;

    const update = () =>{

        if(count < target){

            count++;

            element.innerText = count;

            setTimeout(update, speed);

        }else{

            element.innerText = target;

        }

    };

    update();

}

if(ngoCount && volunteerCount && donorCount){

    const ngos = JSON.parse(localStorage.getItem("ngos")) || [];

    const volunteers = JSON.parse(localStorage.getItem("volunteers")) || [];

    const donors = JSON.parse(localStorage.getItem("donors")) || [];

    animateCounter(ngoCount, ngos.length);

    animateCounter(volunteerCount, volunteers.length);

    animateCounter(donorCount, donors.length);

}


// ===============================
// NGO Search
// ===============================

function searchNGO() {

    const input = document.getElementById("searchInput");

    if (!input) return;

    const search = input.value.toLowerCase();

    const ngos = JSON.parse(localStorage.getItem("ngos")) || [];

    let output = "";

    ngos.forEach(function (ngo) {

        if (
            ngo.name.toLowerCase().includes(search) ||
            ngo.location.toLowerCase().includes(search)
        ) {

            output += `
                <div class="card">
                    <h3>${ngo.name}</h3>
                    <p><strong>Location:</strong> ${ngo.location}</p>
                    <p><strong>Requirement:</strong> ${ngo.need}</p>
                </div>
            `;
        }

    });

    if (output === "") {
        output = "<p>No NGO Found.</p>";
    }

    document.getElementById("searchResults").innerHTML = output;
}