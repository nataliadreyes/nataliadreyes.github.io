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
		$("#sidebar-natalia").click(function () {
			$("#writing-page").hide();
			$("#image-page").hide();
	});
		$("#sidebar-writing").click(function () {
			$("#natalia-page").hide();
			$("#image-page").hide();
	});
		$("#sidebar-image").click(function () {
			$("#natalia-page").hide();
			$("#writing-page").hide();
	});
		$("#landing").hover(function () {
			$("#landing").addClass("datopacity")
		}, function () {
			$("#landing").removeClass("datopacity");
	});
		$(".sidebar-item").hover(function () {
			$(".sidebar-item").addClass("datopacity")
		}, function () {
			$(".sidebar-item").removeClass("datopacity");
	});
});