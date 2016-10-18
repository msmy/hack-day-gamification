// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    move(40);
});

function move(percentage) {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if(!percentage) {
            percentage = 100;
        }
        if (width >= percentage) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}