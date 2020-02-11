// Exercise 1.3
// ----------

// STEP 1
// Reimplement the functionality of 1.1 and 1.2
// - button one disappears
// - button two turns 'crimson'
// - button three turns 'lightblue'
// - button four starts shaking... (animation provided in styles.css)
// - This time the buttons should toggle.
// - Meaning if the user clicks on them a second time, it should go back to initial state.
// - initial button color is 'gold'
// - initial opacity is '100'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// STEP 2
// The new RESET button should reset all of the buttons to their original state.

// HINT:
// to remove the 'jitters' class, check the length of the classList.

//setting the background color for all buttons, and the opacity for btn1

function resetBtn() {
    document.getElementById('btn-1').style.opacity = '100';
    document.getElementById('btn-2').style.backgroundColor = 'gold';
    document.getElementById('btn-3').style.backgroundColor = 'gold';
    document.getElementById('btn-4').classList.remove('jitters');
}

function toggleClass (btn, className){
    btn.classList.contains(className) ? btn.classList.remove(className) : btn.classList.add(className);
}

function toggleBackgroundColor(btn, secondColor) {
    btn.style.backgroundColor === secondColor ? btn.style.backgroundColor = 'gold' : btn.style.backgroundColor = secondColor;
}

function toggleOpacity(btn){
    btn.style.opacity === '100' ? btn.style.opacity = '0' : btn.style.opacity = '100';
}

function handekClickABtn (event) {
    let btn = document.getElementById(event.target.id);
    switch (btn.id) {
        case 'btn-1':
            toggleOpacity(btn, btn.style.opacity);
        break;
        case 'btn-2':
            toggleBackgroundColor (btn, 'crimson');
        break;
        case 'btn-3':
            toggleBackgroundColor(btn, 'lightblue');
        break;
        case 'btn-4':
            toggleClass(btn, 'jitters');
        break;
        case 'reset':
            resetBtn();
        break;
    }
}

for (i = 1; i <= 4; i++) {
    let forBtn = document.getElementById(`btn-${i}`);
    forBtn.style.backgroundColor = 'gold';
    if (i===1) forBtn.style.opacity = 100;
}

const resetBtn1 = document.getElementById('reset');
resetBtn1.classList.add('buttons');
resetBtn1.style.margin = 0;
let btnClass = document.querySelector('.buttons');
btnClass.addEventListener('click', handekClickABtn);