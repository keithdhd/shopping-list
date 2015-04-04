$(document).ready(function(){
	activateList();
});


function activateList(){
	
	//Hover on each row and change color. Show delete button
	$("#the-list").on('mouseenter','li', function(e){
		$(this).children(".btn-delete").show();
	});

	$("#the-list").on('mouseleave','li', function(e){
		$(this).children(".btn-delete").hide();
	});


	//When check is clicked, strike-through the item
	$("#the-list").on('click','.check-me',function(){
		$(this).parent().toggleClass("checked-off");
	});
	
	//When delete button is clicked, remove item
	$("#the-list").on('click', '.btn-delete', function() {
		$(this).parent().remove();
	});

	//When add button is clicked or enter key pressed, add item to list
	$(".btn").click(function(){
		$("#warning").hide();
		var newItem = $( ".new-item" ).val().trim();

	if(newItem.length){
		$("#the-list").append("<li><span class='check-me'>&#10004;</span>" + newItem + "<span class='btn-delete'>X</span></li>");
	}else
		$("#warning").show();
	});

	$(document).keyup(function(e){
		if(e.keyCode == 13){
			$(".btn").click();
		};
	});

	//Drag and drop an item for sorting
	$('#the-list').sortable({ axis: "y" });

}
