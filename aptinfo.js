document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const overlayContainer = document.getElementById('overlayContainer');
    const closeOverlay = overlayContainer.querySelector('.close-overlay');
    const readMoreButtons = document.querySelectorAll('.read-more');
  
    // Store the scroll position
    let scrollPosition = 0;
  
    // Function to open the overlay
    const openOverlay = () => {
      // Save the current scroll position
      scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      
      // Add a class to the body to fix its position
      document.body.classList.add('fixed-body');
  
      // Show the overlay
      overlayContainer.classList.add('active');
  
      // Prevent scrolling on the background content
      document.body.style.top = `-${scrollPosition}px`;
    };
  
    // Function to close the overlay
    const closeOverlayHandler = () => {
      // Remove the class from the body and restore its position
      document.body.classList.remove('fixed-body');
      document.body.style.top = '';
  
      // Hide the overlay
      overlayContainer.classList.remove('active');
  
      // Restore the scroll position
      window.scrollTo(0, scrollPosition);
    };
  
    // Attach event listeners to the read more buttons
    readMoreButtons.forEach((button) => {
      button.addEventListener('click', openOverlay);
    });
  
    // Attach event listener to the close button
    closeOverlay.addEventListener('click', closeOverlayHandler);
  });

  

  document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const overlayContainer = document.getElementById('overlayContainer');
    const closeOverlay = overlayContainer.querySelector('.close-overlay');
    const readMoreButtons = document.querySelectorAll('.read-more');
    const locationSarajevo = document.getElementById('location-sarajevo'); // Add this line

    // ...

    // Function to scroll to the target element
    const scrollToElement = (element) => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    // Attach event listener to the Sarajevo location
    locationSarajevo.addEventListener('click', () => {
      const targetElement = document.querySelector('.centered-picture');
      scrollToElement(targetElement);
    });

    // ...
  });

  function enlargeImage(image) {
    // Create enlarged image container
    var enlargedContainer = document.createElement('div');
    enlargedContainer.classList.add('enlarged-image-container');
  
    // Create enlarged image
    var enlargedImage = document.createElement('img');
    enlargedImage.classList.add('enlarged-image');
    enlargedImage.src = image.src;
    enlargedContainer.appendChild(enlargedImage);
  
    // Append enlarged image container to the body
    document.body.appendChild(enlargedContainer);
  
    // Remove enlarged image container when clicked
    enlargedContainer.addEventListener('click', function() {
      enlargedContainer.remove();
    });
  }
  

  function enlargeImage(image) {
    // Create enlarged image container
    var enlargedBigImage = document.createElement('div');
    enlargedBigImage.classList.add('enlarged-big-image');
  
    // Create enlarged image
    var enlargedBigImage = document.createElement('img');
    enlargedBigImage.classList.add('enlarged-big-image');
    enlargedBigImage.src = image.src;
    enlargedBigImage.appendChild(enlargedBigImage);
  
    // Append enlarged image container to the body
    document.body.appendChild(enlargedBigImage);
  
    // Remove enlarged image container when clicked
    enlargedBigImage.addEventListener('click', function() {
      enlargedBigImage.remove();
    });
  }