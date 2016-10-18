(function() {

    var

    container,

    init = function() {

        container = $('#you-may-like__achievements');

        var req = {
            url: "achievements.json",
            success: function(d) {
                console.log(d);
                parse(d);
            }
        };

        $.ajax(req);

    },

    parse = function(data) {

        var list = $('<ul />');

        data.achievements.forEach(function(i) {

            var listItem = $('<li />');

            listItem.append('<div class="icon"></div>')
            listItem.append('<div>'+i.name+'</div><div>'+i.description+'</div>');
            list.append(listItem)

        });

        container.append(list);
    };

    $(init);

})();
