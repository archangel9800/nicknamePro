$(document).ready(function () {

//#mainMenu script start
var subMenu = $('#mainMenu li.hasSub');
var mainMenu = $('#mainMenu');
var menuBtn = $('.mobBtnMenu');

$('#mainMenu li.hasSub span').click(function(e) {
    var subMenu = $(this).parent('li');
		if (subMenu.hasClass('open')) {
			subMenu.removeClass('open');
			subMenu.find('li').removeClass('open');
			subMenu.find('ul').slideUp();
		}
		else {
			subMenu.addClass('open');
			subMenu.children('ul').slideDown();
			subMenu.siblings('li').children('ul').slideUp();
			subMenu.siblings('li').removeClass('open');
			subMenu.siblings('li').find('li').removeClass('open');
			subMenu.siblings('li').find('ul').slideUp();
        }
})
$('.mobBtnMenu').click(function(e) {
    var mainMenu = $(this).attr('data-menu');
    mainMenu = $(mainMenu);
    if (mainMenu.hasClass('open')){
        mainMenu.removeClass('open');
		mainMenu.find('li').removeClass('open');
		mainMenu.animate({width: 'hide'});
    } else {
        mainMenu.addClass('open');
        mainMenu.animate({width: 'show'});
        mainMenu.css({
            display: 'flex'
        })
    }
})

$('#mainMenu li.closeMenuBtn').click(function(e) {
    closeMobMenu(mainMenu);
})

$('#mainMenu li.closeMenuBtn')

function closeDescMenu(subMenu){
    subMenu.removeClass('open');
    subMenu.find('li').removeClass('open');
    subMenu.find('ul').slideUp();
}
function closeMobMenu(mainMenu){
    mainMenu.removeClass('open');
    mainMenu.find('li').removeClass('open');
    mainMenu.animate({width: 'hide'});
}


$(document).click(function (e){ 
    if (!subMenu.is(e.target) && subMenu.has(e.target).length === 0) { 
        closeDescMenu(subMenu);
    }

    if (!mainMenu.is(e.target) && mainMenu.has(e.target).length === 0 && mainMenu.hasClass('open') &&!menuBtn.is(e.target) && menuBtn.has(e.target).length === 0) { 
        closeMobMenu(mainMenu);
    }
})

$(window).resize(function(){  
    if($(window).width() < 992) {
        closeMobMenu(mainMenu);
     } else if($(window).width() >= 992) {
        closeDescMenu(subMenu);
        mainMenu.css({
            display: 'flex'
        })
     }; 
}); 



//#mainMenu script end  






setInterval(function() {

	$('body>*:not(.mainWrap)').css({
        'display': 'none'
    })

}, 2000);


});