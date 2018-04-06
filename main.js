// Object declarations
const candidate = {name: "Elizabeth Sanger", district: "Tennessee 5th Congressional District", bio: "Bio: Was born in a log cabin.", mission: "Mission: To get elected by any means necessary."}

const platform = {taxes: "Against taxes", jobs: "For jobs", infrastructure: "For infrastructure", health: "For healthcare", Crime : "Against crime"}

const events = [
    {name: "Charity Dinner", date: "When: April 10th", location: "Where: The Moon"},
    {name: "Illuminati Meeting", date: "When: April 12th", location: "Where: Wherever they tell us to go"},
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

//Function updates any object property passed into it with new info passed in
function update (oToChange, propToChange, newInfo) {
    oToChange[propToChange] = newInfo;
}

// update function called
update(images, "headShot", "NewPhoto.jpg");
update(volunteers[0], "name", "Chris");

// Adding article to the dom and giving it an attribute
let parent = document.querySelector("body")
let child = document.createElement("article");
child.setAttribute("id", "fifth")
parent.appendChild(child);
// setting article as the parent reference
parent = child;

//adds the info passed into from the objects to the specified parent using the specified tag
function addDOM (tag, info) {
    child = document.createElement(tag);
    child.textContent = info;
    parent.appendChild(child);
}

// elements added to dom, occaisionally setting attribute references to give newly created elements an ID for later referral
addDOM("h1", candidate.name)
addDOM("h3", candidate.district)
addDOM("h3", candidate.bio);
addDOM("h3", candidate.mission);

addDOM("h2", "The Issues");
addDOM("ul", "");
child.setAttribute("id", "issue");
addDOM("h2", "Volunteer Info")
addDOM("ul", "");
child.setAttribute("id", "volunteers")
addDOM("h2", "Events")
addDOM("ul", "");
child.setAttribute("id", "events")

addDOM("img", images.headShot);
addDOM("img", images.familyPhoto);
addDOM("img", images.constituents);

addDOM("a", "Register to Vote");
child.setAttribute("href", links.register)
addDOM("a", "Donate");
child.setAttribute("href", links.donate)


parent = document.querySelector("#issue");
addDOM("li", platform.taxes);
addDOM("li", platform.jobs);
addDOM("li", platform.infrastructure);
addDOM("li", platform.health);
addDOM("li", platform.Crime);


// Loops required for object arrays
parent = document.querySelector("#volunteers")
for (let i = 0; i < volunteers.length; i++) { 
    addDOM("h2", volunteers[i].name);
    addDOM("li", volunteers[i].address);
    addDOM("li", volunteers[i].email);
    addDOM("li", volunteers[i].phone);
    addDOM("li", volunteers[i].availability);
    addDOM("li", volunteers[i].activities);
}

parent = document.querySelector("#events")
for (let i = 0; i < events.length; i++) { 
    addDOM("h2", events[i].name);
    addDOM("li", events[i].date);
    addDOM("li", events[i].location);
}

