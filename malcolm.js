/*
Just draw a border round the document.body.
*/
(function() {

    var

    documentBody,

    init = function() {

        addAchievements();

        documentBody = $('body');

        documentBody.css({
           position: 'relative'
        });

        if ( window.location.pathname.includes('watch-entertainment/walking-dead') ) {

            console.log('load');
            $('.icon-big-play').click(addOverlay);

        }
    },

    unlockAchievement = function() {
        $('#first').css({
            opacity: 1,
            filter: none
        })
    },

    addOverlay = function() {

            var div = $('<div />');

            div.append('<div style="padding: 0 20px; opacity: 1; background: black; top: 0; position:absolute; width: 300px; border: 1px solid #fff; height: 180px;"><h4 style="font-weight: bold;">Congratulations!</h4><i class="fa fa-trophy" aria-hidden="true"></i><span>You have started watching walking dead</span>' +
                ' <a target="_blank" class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Achievement%20Won!">Tweet</a><br />' +
                '<img style="height: 100px" src="http://localhost.nowtv.com:8080/images/zombie-badge-1.png"/>' +
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

                unlockAchievement();


                console.log('add overlay' ,div );
            }, 5000);

    },

    addAchievements = function() {
        // var icon = '<div style="width: 50px; height: 50px; display: inline-block; background-size: cover; background-image: url(\'data:image/jpeg;base64,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\')">a</div>';

        var icon = '<div id="first" title="bronze status" style="filter: contrast(50%) grayscale(100%); opacity: 0.4; width: 100px; height: 100px; vertical-align: top; display: inline-block; background-size: cover; background-image:url(http://localhost.nowtv.com:8080/images/zombie-badge-1.png)"></div>';
        var icon2 = '<div title="silver status" style="filter: contrast(50%) grayscale(100%); opacity: 0.4; width: 100px; height: 100px; vertical-align: top; display: inline-block; background-size: cover; background-image:url(http://localhost.nowtv.com:8080/images/zombie-badge-2.png)"></div>';
        var icon3 = '<div title="gold status" style="filter: contrast(50%) grayscale(100%); opacity: 0.4; width: 100px; height: 100px; vertical-align: top; display: inline-block; background-size: cover; background-image:url(http://localhost.nowtv.com:8080/images/zombie-badge-3.png)"></div>';


        var stuff = icon + icon2 + icon3;

        // var stuff = '<ul style="list-style: none; font-size: 10px;">' +
        //     '<li>' +
        //     icon +
        //     '   <div style="display:inline-block">Partridge baby</div>' +
        //     '   <div style="display:inline-block">started watching alan partridge</div></li>' +
        //     '</li>' +
        //     '<li>' +
        //     icon2 +
        //     '   <div style="display:inline-block">25% watched alan partridge</div>' +
        //     '   <div style="display:inline-block">25% watched alan partridge</div>' +
        //     '</li>' +
        //     '<li>' +
        //     icon +
        //     '    <div style="display:inline-block">50% watched alan partridge</div>' +
        //     '    <div style="display:inline-block">50% watched alan partridge</div>' +
        //     '</li>' +
        //     '<li>' +
        //     icon +
        //     '    <div style="display:inline-block">100% watched alan partridge</div>' +
        //     '    <div style="display:inline-block">100% watched alan partridge</div>' +
        //     '</li>' +
        //     '</ul>';



        setTimeout(function() {
           $('.entertainment-title').html('The Walking Dead<div>'+ stuff+'</div>')
        }, 3000);

    };

    $(init);

})();