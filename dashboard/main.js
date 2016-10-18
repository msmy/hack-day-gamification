// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    move(80); // Could get from API

    tweet()

});

function move(percentage) {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 20);
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

function tweet() {
    $('.tweet').click(function(e) {
        e.preventDefault();

        window.location.href = 'https://twitter.com/intent/tweet?text=Achievement%20Won!%20Come%20and%20challenge%20me!'

    })
}