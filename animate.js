const animate = (target, value, op = 1, starget = '', ttarget = '') => {
    let tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    tl.add({
        targets: target,
        translateX: value,
        opacity: op,
    })
    .add({
        targets: starget,
        translateX: value,
        opacity: op,
    }, '-=600')
    .add({
        targets: ttarget,
        translateX: value,
        opacity: op,
    }, '-=600')
}

window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY;
    console.log(scrollValue)
    if (scrollValue >= 285) {
        animate('.about-title', 0);
    } else {
        animate('.about-title', -1000)
    }

    if (scrollValue >= 400) {
        animate('.about-img', 0)
    } else {
        animate('.about-img', 1000)
    }

    if (scrollValue >= 585) {
        animate('.fact1', 0, 1)
        animate('.fact2', 0, 1)

        animate('', 0, 1, '.fact3')
        animate('', 0, 1, '.fact4')

        animate('', 0, 1, '', '.fact5')
        animate('', 0, 1, '', '.fact6')
    } else {
        animate('.fact1', 300, 0)
        animate('.fact2', -300, 0)

        animate('', 300, 0, '.fact3')
        animate('', -300, 0, '.fact4')

        animate('', 300, 0, '', '.fact5')
        animate('', -300, 0, '', '.fact6')
    }

    if (scrollValue >= 3400) {
        animate('.back1', 0);
        animate('', 0, 1, '.back2');
        animate('', 0, 1, '', 'opening-song-container');
    } else {
        animate('.back1', -700);
        animate('', -700, 1, '.back2');
        animate('', -700, 1, '', 'opening-song-container');

    }
})

// const aboutImg = document.querySelector('.about-img');
// aboutImg.addEventListener('mouseover', () => {
//     animate('.fact1', 0, 1)
//     animate('.fact2', 0, 1)
// })

// aboutImg.addEventListener('mouseout', () => {
//     animate('.fact1', 300, 0)
//     animate('.fact2', -300, 0)
// })