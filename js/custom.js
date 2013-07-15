$(document).ready(function(e) {
    $("#collapse_menu").click(function(e) {
		var $this = $(this);
		if($this.hasClass("hidden")){
			show_menu(e);
		}else{
	        hide_menu(e);
		}
    });
});

function hide_menu(e){
	$(".heading_text").hide();
	$(".ui-accordion-content").hide();
	$(".ui-icon", "#accordion").hide();
	$(".ui-icon", "#collapse_menu").removeClass("ui-icon-arrowthickstop-1-w").addClass("ui-icon-arrowthickstop-1-e");
	$(".ui-accordion-icons").css('padding-left','40px').removeClass("ui-corner-top ui-state-active ui-accordion-header-active").addClass("ui-corner-all");
	$("#left_sidebar").css('width','50px');
	$("#collapse_menu_text").hide();
	$("#collapse_menu").addClass("hidden");
}

function show_menu(e){
	var $this = $(this);
	$(".heading_text").show();
	$(".ui-icon", "#accordion").show();
	$(".ui-icon", "#collapse_menu").removeClass("ui-icon-arrowthickstop-1-e").addClass("ui-icon-arrowthickstop-1-w");	
	$(".ui-accordion-icons").css('padding-left','50px');
	if($(e.target).hasClass("collapser")){
		$(".ui-accordion-content:first").show();
		$(".ui-accordion-icons:first").addClass("ui-corner-top ui-state-active ui-accordion-header-active").removeClass("ui-corner-all");
	}	
	$("#left_sidebar").css('width','200px');
	$("#collapse_menu_text").show();
	$("#collapse_menu").removeClass("hidden");
}