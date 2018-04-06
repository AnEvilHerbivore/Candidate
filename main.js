const candidate = {name: "Elizabeth Sanger", district: "Tennessee 5th Congressional District", bio: "Bio: Was born in a log cabin.", mission: "Mission: To get elected by any means necessary."}

const platform = {taxes: "Against", jobs: "For", ifrastructure: "For", health: "For", Crime : "Against"}

const events = [
    {name: "Charity Dinner", date: "April 10th", location: "The Moon"},
    {name: "Illuminati Meeting", date: "April 12th", location: "Wherever they tell us to go"},
]

const volunteers = [
    {name: "Alice", address: "12 Fake Street", email: "fake@notreal.com", phone: "555-555-5555", availability: "Thursdays", activities: "I dunno" },
    {name: "Bob", address: "34 Fake Street", email: "extraFake@notreal.com", phone: "555-555-5554", availability: "Fridays", activities: "Still don't know" }
]

const images = {
    headShot: "photo.jpg",
    familyPhoto: "photo2.jpg",
    constituents: "photo3.jpg"
}

const links = {register: "#", donate: "#"}

function update (oToChange, propToChange, newInfo) {
    oToChange[propToChange] = newInfo;
}


update(images, "headShot", "NewPhoto.jpg");

update(volunteers[0], "name", "Chris");

// Adding article to the dom and giving it an attribute
let parent = document.querySelector("body")
let child = document.createElement("article");
child.setAttribute("id", "fifth")
parent.appendChild(child);
// setting article as the parent reference
parent = child;

//adds thev info passed into from the objects to the specified parent using the specified tag
function addDOM (parent, tag, info) {
    child = document.createElement(tag);
    child.textContent = info;
    parent.appendChild(child);
}

addDOM(parent, "h1", candidate.name)
addDOM(parent, "h3", candidate.district)
addDOM(parent, "h3", candidate.bio);
addDOM(parent, "h3", candidate.mission);

