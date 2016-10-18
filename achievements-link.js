/*
Just draw a border round the document.body.
*/
(function() {

    var

    init = function() {

        //alert('dome ready');
    };


    var node = "<li> " +
        "<a class='topnav-statenav-link prevent-default' href='#'>" +
        "<i class='icon-help topnav-statenav-linkicon'></i>" +
            "<span class='is-tablet'>Achievements <i class='icon-chevron topnav-chevron'></i></span>" +
        "</a>"+
    "</li>";

    $(".topnav .l-list-inline").prepend(node);
    //document.getElementById("list-inline").appendChild(node);

    $(init);

})();