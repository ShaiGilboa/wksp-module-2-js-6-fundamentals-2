// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

function toggleColor(btn, secondColor) {
    btn.style.backgroundColor === 'gold' ? btn.style.backgroundColor = secondColor : btn.style.backgroundColor = 'gold';
}

function handelClickABtn(event) {
    let btn = document.getElementById(event.target.id);
    switch (btn.id) {
        case 'btn-1':
            if (btn.style.opacity === '1') {
                btn.style.opacity = 0;
            } else {
                btn.style.opacity = 1;
            } 
            break;
        case 'btn-2': 
            toggleColor(btn, 'crimson');
            break;
        case 'btn-3':
            toggleColor(btn, 'lightblue');
            break;
        case 'btn-4':
            btn.classList.contains('jitters') ? btn.classList.remove('jitters') : btn.classList.add('jitters');
            break;
    }
}


// setting background color of all 4 btns to 'gold'
for (i = 1; i <= 4; i++) {
    let forBtn = document.getElementById(`btn-${i}`);
    forBtn.style.backgroundColor = 'gold';
    if (i === 1) forBtn.style.opacity = 1;
}

const btnClass = document.querySelector('.buttons');
btnClass.addEventListener('click', handelClickABtn);

