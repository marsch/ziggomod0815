require(['themes'], function (themes) {
    'use strict';

    // modify theme
    //themes.alter({'selected-background': '#ed8801'});
    themes.alter({'selected-background': '#F29E00'});

    // do the logo
    $('#io-ox-top-logo-small').css({
        'background-image': 'url("https://static.ziggo.nl/portalClient/style/media/ziggo.png")',
        'background-size': '100px',
        'width': '110px',
        'height': '40px',
        'background-color': '#F29E00',
        'background-position': '50% 100%',
        'margin': '0px'
    }).after(
        $('<img>', {
            src: 'https://github.com/marsch/ziggomod0815/raw/master/ziggo_mod.png'
        }).css({
            float: 'right'
        })
    );


    //do the orange line
    $('#io-ox-topbar').after(
        $('<div>').css({
            'height': '4px',
            'width': '100%',
            'background-color': '#F29E00'
        })
    );
    $('#io-ox-screens').css({
        'top': '44px'
    });

});
