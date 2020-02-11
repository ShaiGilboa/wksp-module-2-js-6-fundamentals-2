// Exercise 1.1
// ----------
// Take a look at the HTML file
// There are 4 buttons that are supposed to do different
// things when clicked.

// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css as a class called 'jitters')

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

function handleABtnClick(event) {
    let btn = document.getElementById(event.target.id);
    switch (btn.id) {
        case "btn-1":
            btn.style.visibility = 'hidden';
        break;
        case "btn-2":
            btn.style.backgroundColor = 'crimson';
        break;
        case "btn-3":
            btn.style.backgroundColor = 'lightblue';
        break;
        case "btn-4":
            btn.classList.add('jitters');
        break;
    }
}


const btnClass = document.querySelector('.buttons')
btnClass.addEventListener('click', handleABtnClick);