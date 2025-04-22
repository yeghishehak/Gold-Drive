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

const instcructors_descriptions_containers = document.querySelectorAll('.instcructors_descriptions_containers');

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

instcructors_descriptions_containers.forEach(element => observer11.observe(element));


const header = document.querySelector(".heading")
const menuBtn = document.querySelector(".menuBtn")
const headingButtons = document.querySelectorAll(".headingbuttons")
const menuContainer = document.querySelector(".menuContainer")
const carHeading = document.querySelector(".carHeading")
const nav = document.querySelector(".nav")
const buttonsContainer = document.querySelector(".buttonsContainer")

menuBtn.addEventListener("click", function() {
    if (header.style.height === "100vh") {
        document.body.style.backgroundColor = "unset"
        menuBtn.style.transform = "translate(50px, 25px) scale(2.5)"
        header.style.height = "100px";
        headingButtons.forEach(function(button) {
            button.style.display = "none"; 
        });
    }

    
    
    else {
        document.body.style.backgroundColor = "#333"
        header.style.height = "100vh"

        headingButtons.forEach(function(button) {
            button.style.display = "block";
            button.style.transform = "translate(80px, 100px)";
        });
        nav.style.alignItems = "unset"
        menuContainer.style.marginLeft = "100%"
        menuBtn.style.transform = "translate(205px, 25px) scale(2.5)"
        menuContainer.style.transform = "translate(-55px, 18px)"
        buttonsContainer.style.gap = "20px"
        buttonsContainer.style.display = "flex"
        buttonsContainer.style.flexDirection = "column"
        menuContainer.style.flexDirection = "column"
    }

    headingButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            menuBtn.style.display = "block"
            menuBtn.style.transform = "translate(50px, 25px) scale(2.5)"
            document.body.style.backgroundColor = "unset"
            header.style.height = "100px"; 
            headingButtons.forEach(function(button) {
                button.style.display = "none";
            });
        });
    });
})
