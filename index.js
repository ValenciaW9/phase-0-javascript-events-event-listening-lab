function addingEventListener() {
    // Get the button element from the HTML document
    const button = document.querySelector('#myButton');
  
    // Add event listener to the button
    button.addEventListener('click', function() {
      // Code to be executed when the button is clicked
      console.log('The button was clicked!');
    });
  
    console.log('The code is running!');
  }
