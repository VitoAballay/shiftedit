define(['jquery'], function () {

var timer;

function doResize() {
	console.log('resize');
	//active file tabs
	$('.ui-tabs-active[data-file]').each(function() {
		var tab = $(this);
		window.splits[tab.attr('id')].resize(true);

		var panel = $('.ui-layout-center').tabs('getPanelForTab', tab);
		var inst = tinymce.get(panel.find('.design textarea').attr('id'));
		if(inst) {
			var container = panel.find('.design');
			inst.theme.resizeTo(container.width(), container.height()-110);
		}
	});
}

function resize() {
	clearTimeout(timer);
	timer = setTimeout(doResize, 250);
}

function init() {
	$(window).on('resize activate', resize);
}

return {
	init: init,
	resize: resize
};

});