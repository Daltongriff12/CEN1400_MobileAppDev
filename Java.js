/**
 * 
 */

document.addEventListener("DOMContentLoaded", function() {
	const button = document.getElementById('clickMeBtn');
	const output = document.getElementById('output');
	
	button.addEventListener('click', function(){
		output.textContent = 'Lets Go!';
	});
});