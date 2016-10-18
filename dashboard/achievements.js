(function() {

    var

    container,
    leaderboardContainer,

    init = function() {

        container = $('#you-may-like__achievements');
        leaderboardContainer = $('#head-to-head');

        var req = {
            url: "achievements.json",
            success: function(d) {
                console.log(d);
                parse(d, container);
            }
        };


        var leaderboard = {
            url: "leaderboard.json",
            success: function(d) {
                console.log(d);
                parseLeaderboard(d, leaderboardContainer);
            }
        };

        $.ajax(req);
        $.ajax(leaderboard);
    },

    parse = function(data, container) {

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
    },

    parseLeaderboard = function(data, container) {
        var list = $('<ul />');

        data.leaders.forEach(function(i) {

            var listItem = $('<li />'), className ='';

            if (i.className) {
                className = i.className;
            }

            listItem.append('<div class="icon '+ className+'"></div>')
            listItem.append('<div style="text-align: center; border-radius: 50%; height: 38px; padding: 10px; font-size: 20px; font-weight: bold">'+i.position+'</div><div>'+i.userName+'</div><div style="font-size: 12px">(Trophies: '+i.trophyCount+')</div>');
            list.append(listItem)

        });

        container.append(list);
    };

    $(init);

})();
