// alert(document.querySelector(".services").clientHeight)

var nav_height = document.querySelector('#navbar').clientHeight
function bookNow() {
    location.href = "Html/book.html"
}

function homeFunction(){
    scrollTo(0,0)
}

function servicesFunction(){
    // document.querySelector(".services").scrollIntoView()
    // console.log(document.querySelector(".services").offsetHeight)
    // alert(document.querySelector(".services").clientHeight)
    let height = (window.scrollY + document.querySelector('.services').getBoundingClientRect().top)-(nav_height)
    scrollTo(0,height)
}

function ourClientsFunction() {
    let height = (window.scrollY + document.querySelector('.our-clients').getBoundingClientRect().top)-(nav_height)
    scrollTo(0,height)
}

function contactUsFunction(){
    let height = (window.scrollY + document.querySelector('.contact-us').getBoundingClientRect().top)-(nav_height)
    scrollTo(0,height)
}

function submit(){
    alert("Message Sended");
}