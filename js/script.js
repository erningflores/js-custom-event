function highlight(elem){
    const bgColor = "yellow";
    elem.style.backgroundColor = bgColor;

    const event = new CustomEvent('highlight', {
        detail: {
            backgroundColor: bgColor
        }
    });
    elem.dispatchEvent(event);
}

let note = document.querySelector('.note');
let click = document.querySelector('#click');

function addBorder(elem){
    elem.style.border = "solid 1px red";
}

note.addEventListener('highlight', function(event){
    addBorder(this);
    console.log(event.detail);
});

click.addEventListener('click', event => {
    highlight(note);
});