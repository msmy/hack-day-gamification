/*
Just draw a border round the document.body.
*/
(function() {

    var

    init = function() {

        var node = "<li> " +
            "<a class='topnav-statenav-link' href='http://localhost:8080/'>" +
            "<i class='icon-help topnav-statenav-linkicon'></i>" +
            "<span class='is-tablet'>Achievements <i class='icon-chevron topnav-chevron'></i></span>" +
            "</a>"+
            "</li>";

        $(".topnav .l-list-inline").prepend(node);

        //alert('dome ready');
    };



    //document.getElementById("list-inline").appendChild(node);

    $(init);

})();