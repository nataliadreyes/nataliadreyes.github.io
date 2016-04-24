$(document).ready(function() {
	jQuery(document).ready(function($) {
		$('.my-slider').unslider();
	});
		$("#sidebar-natalia").click(function() {
			$("#natalia-page").show();
	});
		$(".sidebar-item").click(function () {
			$("#landing").hide();
	});
		$("#main-heading").click(function () {
			$("#landing").show();
				$(".page").hide();
	});
		$("#sidebar-writing").click( function () {
			$("#writing-page").show();
	});
		$("#sidebar-image").click(function () {
			$("#image-page").show();
	});
});