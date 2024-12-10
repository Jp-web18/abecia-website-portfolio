
//navigation menu hover effects
const navigationMenu = document.querySelectorAll('#threeNav li');
navigationMenu.forEach(itemButton => {
	itemButton.addEventListener('click', function() {
		window.location.href = this.querySelector('a').href;
	});
});

// highlights my favorite and challenging lesson
const buttonClick = document.querySelector('.hide-button');
const elements = document.querySelectorAll('.target-hidden');

// select the targeted class for only highlighting intended lessons
buttonClick.addEventListener('click', () => {
    elements.forEach(element => {
        element.classList.add('hidden'); // hidden button highlighting relevant lessons
    });
});

// for feedback and contact and message form
const popupButton = document.getElementById('feedbackMessage');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const feedbackForm = document.getElementById('feedbackForm');

popupButton.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.add('hidden');
  }
});

feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your feedback!');
  popup.classList.add('hidden');
  feedbackForm.reset();
});

// dynamic contents for better user interface
function expandImageOrFile(element) {
	// Expand to a wider version
	element.style.width = '58%';  
	element.style.height = '100%';
	
	// Add a click event listener to the document to shrink the element when clicking outside
	document.addEventListener('click', function(event) {
		if (!element.contains(event.target)) {
			// Reset to original size
			element.style.width = '40%';  
			element.style.height = '80%';
			
		}
	});
}


