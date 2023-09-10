const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

function toggleNav() {
    // Toggle: Bars Open/Close
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate IN - Overlay
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');
        // Animate IN - Nav Items
        nav1.classList.remove('slide-out-1');
        nav1.classList.add('slide-in-1');
        nav2.classList.remove('slide-out-2');
        nav2.classList.add('slide-in-2');
        nav3.classList.remove('slide-out-3');
        nav3.classList.add('slide-in-3');
        nav4.classList.remove('slide-out-4');
        nav4.classList.add('slide-in-4');
        nav5.classList.remove('slide-out-5');
        nav5.classList.add('slide-in-5');
    } else {
        // Animate OUT - Overlay
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
        // Animate OUT - Nav Items
        nav1.classList.remove('slide-in-1');
        nav1.classList.add('slide-out-1');
        nav2.classList.remove('slide-in-2');
        nav2.classList.add('slide-out-2');
        nav3.classList.remove('slide-in-3');
        nav3.classList.add('slide-out-3');
        nav4.classList.remove('slide-in-4');
        nav4.classList.add('slide-out-4');
        nav5.classList.remove('slide-in-5');
        nav5.classList.add('slide-out-5');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);


// -------------------------------------------------
// SIMPLIFIED CODE SIMPLIFIED CODE SIMPLIFIED CODE: |
// -------------------------------------------------

// const menuBars = document.getElementById('menu-bars');
// const overlay = document.getElementById('overlay');
// const navItems = [1, 2, 3, 4, 5].map(i => document.getElementById(`nav-${i}`));

// function toggleNav() {
//     menuBars.classList.toggle('change');
//     overlay.classList.toggle('overlay-active');

//     const toggleAnimation = (el, addClass, removeClass) => {
//         el.classList.remove(removeClass);
//         el.classList.add(addClass);
//     };

//     if (overlay.classList.contains('overlay-active')) {
//         overlay.classList.remove('overlay-slide-left');
//         overlay.classList.add('overlay-slide-right');

//         navItems.forEach((nav, i) => toggleAnimation(nav, 'slide-in-' + (i + 1), 'slide-out-' + (i + 1)));
//     } else {
//         overlay.classList.remove('overlay-slide-right');
//         overlay.classList.add('overlay-slide-left');

//         navItems.forEach((nav, i) => toggleAnimation(nav, 'slide-out-' + (i + 1), 'slide-in-' + (i + 1)));
//     }
// }

// [menuBars, ...navItems].forEach(item => item.addEventListener('click', toggleNav));
