
let $ = (selector) => document.querySelectorAll(selector)
let cardsElements = $('.cards')

function cardElement(user){
    return `<div class="card">
                <div class="image">
                    <img src="${user.pfp}" alt="">
                </div>
                <div class="info">${user.info}</div>
                <div class="social-media">
                    <a href="https://www.facebook.com/">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>`
}
let people = [[{
    pfp: '../images/profile-picture.png',
    info: 'PersonOne, Backend Management'
}, {
    pfp: '../images/profile-picture.png',
    info: 'PersonTwo, Frontend Styling'
}, {
    pfp: '../images/profile-picture.png',
    info: 'PersonThree, Javascript'
}], [{
    pfp: '../images/profile-picture.png',
    info: 'PersonFour, Merchandise'
}, {
    pfp: '../images/profile-picture.png',
    info: 'PersonFive, Merchandise'
}, {
    pfp: '../images/profile-picture.png',
    info: 'PersonSix, Photoshop expert'
}]]
cardsElements.forEach((cardsElement, index) => {
    for (let i = 0; i < people[index].length; i++) {
        let person = people[index][i]
        cardsElement.innerHTML += cardElement(person)
    }
});