const navContainer = document.querySelector('.nav-container');
const mangaList = document.querySelector('.manga-list');
const mangaChosen = document.getElementById('choosen');

window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY;
    if (scrollValue >= 69) {
        navContainer.classList.add('active');
    } else {
        navContainer.classList.remove('active');
    }
})

const scrollToSection = (sectionID) => {
    const section = document.getElementById(sectionID);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',
        })
    }
}

let chapters = {
    all: [
        "chapter0.jpg",
        "chapter1.jpg",
        "chapter2.jpg",
        "chapter3.jpg",
        "chapter4.jpg",
        "chapter5.jpg",
        "chapter6.jpg",
        "chapter7.jpg",
        "chapter8.jpg",
        "chapter9.jpg",
        "chapter10.jpg",
        "chapter11.jpg",
        "chapter12.jpg",
        "chapter13.jpg",
        "chapter14.jpg",
        "chapter15.jpg",
        "chapter16.jpg",
        "chapter17.jpg",
        "chapter18.jpg",
        "chapter19.jpg",
        "chapter20.jpg",
        "chapter21.jpg",
        "chapter22.jpg",
        "chapter23.jpg",
        "chapter24.jpg",
        "chapter25.jpg",
        "chapter26.jpg",
    ],
    one: [
        "chapter0.jpg",
    ],
    two: [
        "chapter1.jpg",
        "chapter2.jpg",
        "chapter3.jpg",
    ],
    three: [
        "chapter3.jpg",
        "chapter4.jpg",
    ],
    four: [
        "chapter4.jpg",
        "chapter5.jpg",
        "chapter6.jpg",
        "chapter7.jpg",
    ],
    five: [
        "chapter7.jpg",
        "chapter8.jpg",
    ],
    six: [
        "chapter8.jpg",
        "chapter9.jpg",
    ],
    seven: [
        "chapter10.jpg",
        "chapter11.jpg",
        "chapter12.jpg",
        "chapter13.jpg",
        "chapter14.jpg",
        "chapter15.jpg",
        "chapter16.jpg"
    ],
    eight: [
        "chapter16.jpg",
        "chapter17.jpg",
    ],
    nine: [
        "chapter17.jpg",
        "chapter18.jpg",
    ],
    ten: [
        "chapter18.jpg",
        "chapter19.jpg",
        "chapter20.jpg",
        "chapter21.jpg",
        "chapter22.jpg",
        "chapter23.jpg",
        "chapter24.jpg",
        "chapter25.jpg",
    ],
    eleven: [
        "chapter25.jpg",
        "chapter26.jpg",
    ]
}

let count = 0;
let current = 0;

mangaChosen.addEventListener('change', () => {
    const mangaContainer = document.querySelectorAll('.manga-container');
    chapters['all'].forEach((chapter, index) => {
        mangaContainer[index].classList.remove('active')
    })
    chapters[mangaChosen.value].forEach(chapter => {
        mangaContainer[chapters['all'].indexOf(chapter)].classList.add('active')
    })
})

const render = (chapter) => {
    let mangaContainer = `
    <div class="manga-container">
        <img class="manga-img" src="assets/chapters/${chapter}">
        <h1 class="manga-img-title">Chapter ${count}</h1>
    </div>
    `
    mangaList.innerHTML += mangaContainer;
}

chapters['all'].forEach(chapter => {
    let mangaContainer = `
    <div class="manga-container hidden">
        <img class="manga-img" src="assets/chapters/${chapter}">
        <h1 class="manga-img-title">Chapter ${count}</h1>
    </div>
    `
    mangaList.innerHTML += mangaContainer;
    const mangaContainers = document.querySelectorAll('.manga-container');
    mangaContainers.forEach(manga => {
        manga.classList.add('active');
    })
    count++;
})