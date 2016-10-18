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

            var listItem = $('<li />'), className ='';

            if (i.className) {
                className = i.className;
            }

            listItem.append('<div class="icon '+ className+'"></div>')
            listItem.append('<div>'+i.name+'</div><div style="font-size: 12px">'+i.description+'</div>');
            list.append(listItem)

        });

        container.append(list);
    };

    $(init);

})();
