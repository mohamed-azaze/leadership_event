
///////////////////////////////////////////////////////////////////////////
// scroll Sections
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".links li");
scrollTo()
function scrollTo() {
    links.forEach(link => {
        link.addEventListener("click", () => {
            removeAllActive(links)
            link.classList.add("active")
        })
    })
}
///////////////////////////////////////////////////////////////////////////
window.addEventListener("scroll", function () {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 200;
        const sectionId = section.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".links  a[href*= " + sectionId + "] ").classList.add("active")
        } else {
            document.querySelector(".links  a[href*= " + sectionId + "] ").classList.remove("active")
        }
        // console.log(sectionTop)
    })
})
///////////////////////////////////////////////////////////////////////////
///// menu Function //////////////////////////////////////////////////////
const menuBtn = document.querySelector(".open");
const menuUl = document.querySelector(".links");
menuBtn.addEventListener("click", (e) => {
    e.target.classList.toggle("fa-xmark");
    menuUl.classList.toggle("active")
})




///////////////////////////////////////////////////////////////////////////
///// Taps Function //////////////////////////////////////////////////////
const daysEle = document.querySelectorAll(".days div");
const meetingsEle = document.querySelectorAll(".days-schedules > div");
daysEle.forEach(ele => {
    ele.addEventListener("click", function () {
        removeAllActive(daysEle);
        ele.classList.add("active");
        removeAllActive(meetingsEle);
        document.querySelector(ele.dataset.schedules).classList.add("active");
        meetingsEle.forEach(ele => ele.style.display = "none");
        document.querySelector(ele.dataset.schedules).style.display = "block"
    })
})
///////////////////////////////////////////////////////////////////////////
///// Fixed Functions ////////////////////////////////////////////////////
function removeAllActive(array) {
    array.forEach(ele => ele.classList.remove("active"))
}