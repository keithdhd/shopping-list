$(document).ready(function(){
	activateList();
});


function activateList(){
	$(".shopping-list li").mouseenter(function(){
		$(this).children(".btn-delete").show();
	})

	$(".shopping-list li").mouseleave(function(){
		$(this).children(".btn-delete").hide();
	})

}
