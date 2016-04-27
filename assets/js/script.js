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
		$("#sidebar-natalia").hover(function () {
			$("#sidebar-natalia").addClass("datopacity")
		}, function () {
			$("#sidebar-natalia").removeClass("datopacity");
	});
		$("#sidebar-writing").hover(function () {
			$("#sidebar-writing").addClass("datopacity")
		}, function () {
			$("#sidebar-writing").removeClass("datopacity");
	});
		$("#sidebar-image").hover(function () {
			$("#sidebar-image").addClass("datopacity")
		}, function () {
			$("#sidebar-image").removeClass("datopacity");
	});
		$("#main-heading").hover(function () {
			$("#main-heading").addClass("datopacity")
		}, function () {
			$("#main-heading").removeClass("datopacity");
	});
});