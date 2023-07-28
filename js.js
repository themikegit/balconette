let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav-resp');


menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


function goToStep(stepDiff) {
	const steps = Array.from(document.querySelectorAll('input[name="step"]'))
	let currentStepIndex = steps.findIndex(step => step.checked) 
		if(currentStepIndex + stepDiff >= 0 && currentStepIndex + stepDiff < steps.length){
			steps[currentStepIndex].checked = false;
			steps[currentStepIndex + stepDiff].checked = true;

			
		
			document.querySelectorAll('.stepper-button').forEach(button => button.classList.remove('disabled'));
			document.querySelectorAll('.stepper-button')[1].innerHTML = 'Next'
			if(currentStepIndex + stepDiff === 0){
				document.querySelectorAll('.stepper-button')[0].classList.toggle('disabled')
			}
			if(currentStepIndex + stepDiff === 3){
				document.querySelectorAll('.stepper-button')[1].innerHTML = 'Go to Cart'
			}
	
		}
  }



