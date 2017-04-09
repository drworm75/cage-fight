function d3() {
 	var number = Math.floor((Math.random() * 3) + 1);
 	return number

}

$(document).on('click', '.reveal', function(){
	console.log($(".cross").hasClass());
	$(".cross:not([class*='hidden'])").addClass('hidden');
	var firstNum = d3();
	var secondNum = d3();
	while (secondNum === firstNum) {
		secondNum = d3();
	}
	$(".fighter:nth-of-type(" + firstNum + ")").find('.hidden').removeClass('hidden');
	$(".fighter:nth-of-type(" + secondNum + ")").find('.hidden').removeClass('hidden');
	$(".winner").html($(".hidden").data('winner'));
	$(this).replaceWith(`<button class="reveal">Fight Again?</button>`);

})