/*
Just draw a border round the document.body.
*/
(function() {

    var

    documentBody,

    init = function() {

        documentBody = $('body');

        documentBody.css({
           position: 'relative'
        });

        if ( window.location.pathname.includes('watch-entertainment/alan-partridges') ) {

            console.log('load');
            $('.icon-big-play').click(addOverlay);

        }
    },

    addOverlay = function() {

            var div = $('<div />');

            div.append('<div style="padding: 0 20px; opacity: 1; background: black; top: 0; position:absolute; width: 300px; border: 1px solid #fff; height: 100px;"><h4 style="font-weight: bold;">Congratulations!</h4><i class="fa fa-trophy" aria-hidden="true"></i><span>You have started watching alan partridge</span>' +
                '<br /><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Achievement%20Won!">Tweet</a>' +
                '</div>');


            setTimeout(function() {
              div.css({
                  opacity: 1,
                  'z-index': 1000000,
                  position: 'absolute',
                  top: 0,
                  color: 'white'
              });

                documentBody.append(div);

                setTimeout(function() {
                    div.css({
                        transition: 'opacity 5s ease-in-out 0s',
                        opacity: 0
                    })
                }, 6000);


                console.log('add overlay' ,div );
            }, 5000);

    };

    $(init);

})();