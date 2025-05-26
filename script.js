const pricelist = document.querySelector(".pricelist");

pricelist.addEventListener("click", function(event) {

    document.querySelector(".list1").scrollIntoView({
        behavior: "smooth"
    });
});

const total_care_button = document.querySelector(".total_care_button");

total_care_button.addEventListener("click", function(event) {

    document.querySelector(".goldcup").scrollIntoView({
        behavior: "smooth"
    });
});

const carpark_button = document.querySelector(".carpark_button");

carpark_button.addEventListener("click", function(event) {

    document.querySelector(".carpark_img").scrollIntoView({
        behavior: "smooth"
    });
});

const instructors_button = document.querySelector(".instructors_button");

instructors_button.addEventListener("click", function(event) {

    document.querySelector(".instructors_icon").scrollIntoView({
        behavior: "smooth"
    });
});

const feedback_button = document.querySelector(".feedback_button");

feedback_button.addEventListener("click", function(event) {

    document.querySelector(".feedback_heading1").scrollIntoView({
        behavior: "smooth"
    });
});



const info1 = document.querySelectorAll('.info1Container');

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('info1Animation');
        }
        else {
            entry.target.classList.remove('info1Animation');
        }
    });
}, {
    threshold: 0.4
});

info1.forEach(element => observer1.observe(element));

const info2 = document.querySelectorAll('.info2');

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('info2Animation');
        }
        else {
            entry.target.classList.remove('info2Animation');
        }
    });
}, {
    threshold: 0.4
});

info2.forEach(element => observer2.observe(element));


const list1 = document.querySelectorAll('.list1');

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity');
        }
        else {
            entry.target.classList.remove('opacity');
        }
    });
}, {
    threshold: 0.4
});

list1.forEach(element => observer3.observe(element));


const list2 = document.querySelectorAll('.list2');

const observer7 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity');
        }
        else {
            entry.target.classList.remove('opacity');
        }
    });
}, {
    threshold: 0.4
});

list2.forEach(element => observer7.observe(element));

const list3 = document.querySelectorAll('.list3');

const observer8 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity');
        }
        else {
            entry.target.classList.remove('opacity');
        }
    });
}, {
    threshold: 0.4
});

list3.forEach(element => observer8.observe(element));


const goldcup = document.querySelectorAll('.goldcup');
const total_care_heading_h1 = document.querySelector('.total_care_heading_h1');
const total_heading_description = document.querySelector('.total_heading_description');

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('goldcupAnimation');
            total_care_heading_h1.classList.add('opacity');
            total_heading_description.classList.add('opacity');
        }
    });
}, {
    threshold: 0.5
});

goldcup.forEach(element => observer4.observe(element));

const total_care_program = document.querySelectorAll('.total_care_program');

const observer5 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity');
        }
    });
}, {
    threshold: 0.3
});

total_care_program.forEach(element => observer5.observe(element));

const carpark_img_container = document.querySelectorAll('.carpark_img_container');

const observer6 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('coolEffect');
        }

        else {
            entry.target.classList.remove('coolEffect');
        }
    });
}, {
    threshold: 0.3
});

carpark_img_container.forEach(element => observer6.observe(element));

const carpark_text_container = document.querySelectorAll('.carpark_text_container');

const observer9 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('coolEffect');
        }

        else {
            entry.target.classList.remove('coolEffect');
        }
    });
}, {
    threshold: 0.3
});

carpark_text_container.forEach(element => observer9.observe(element));

const instructors_heading_mainContainer = document.querySelectorAll('.instructors_heading_mainContainer');
const instructors_icon = document.querySelector('.instructors_icon');

const observer10 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('coolEffect');
            instructors_icon.style.animation = "instructorsIconAnimation1 1s ease";
        }

        else {
            entry.target.classList.remove('coolEffect');
            instructors_icon.style.animation = "instructorsIconAnimation2 1s ease";
        }
    });
}, {
    threshold: 0.3
});

instructors_heading_mainContainer.forEach(element => observer10.observe(element));

const instructor_description_box = document.querySelectorAll('.instructor_description_box');

const observer11 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity');
        }

        else {
            entry.target.classList.remove('opacity');
        }
    });
}, {
    threshold: 0.3
});

instructor_description_box.forEach(element => observer11.observe(element));


const header = document.querySelector(".heading")
const menuBtn = document.querySelector(".menuBtn")
const headingButtons = document.querySelectorAll(".headingbuttons")
const menuContainer = document.querySelector(".menuContainer")
const carHeading = document.querySelector(".carHeading")
const nav = document.querySelector(".nav")
const buttonsContainer = document.querySelector(".buttonsContainer")

const welcomeContainer = document.querySelector(".welcomeContainer")
const programpage1 = document.querySelector(".programpage1")
const programpage2 = document.querySelector(".programpage2")
const programpage3 = document.querySelector(".programpage3")
const prices = document.querySelector(".prices")
// const info1 = document.querySelector(".info1")
// const info2 = document.querySelector(".info2")
const div5 = document.querySelector(".div5")
const lists = document.querySelector(".lists")
const additional_price_heading = document.querySelector(".additional_price_heading")
const additional_prices = document.querySelector(".additional_prices")
const total_care_heading = document.querySelector(".total_care_heading")
const items = document.querySelector(".items")
// const total_care_program = document.querySelector(".total_care_program")
const carpark = document.querySelector(".carpark")
const instructors = document.querySelector(".instructors")
const feedback_div = document.querySelector(".feedback_div")
const footer = document.querySelector(".footer")

menuBtn.addEventListener("click", function() {
    const currentVisibility = getComputedStyle(menuContainer).visibility;

    if (currentVisibility === "hidden") {
        menuContainer.style.visibility = "visible";
        headingButtons.forEach(btn => {
            btn.style.display = "block";
        });

    } else {
        menuContainer.style.visibility = "hidden";
        headingButtons.forEach(btn => {
            btn.style.display = "none";
        });
    }

    headingButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            menuContainer.style.visibility = "hidden";

            // Disable the button for 1 second
            menuBtn.disabled = true;
                setTimeout(() => {
                    menuBtn.disabled = false; // re-enable after 1 second
                }, 1000);

            headingButtons.forEach(btn => {
                btn.style.display = "none";
            });
        });
    });

});
