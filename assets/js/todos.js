
// Make the possibility, when the task is done, to click on each task to check off the task.

/*$('li').on('click', function(){
  $(this).toggleClass('checked');
}); */


// on method allow us to apply the code for a future element , whereas only click method without on
// doesnt allows us to apply the same rule for future elements , IT is Very Important.

// In jquery, we can only add an eventlistener on a element that exists when the code runs 
// for the first time.
// When code runs for the first time, we dont have all the Li's that we will create after.
// we only have 3 li's. so it will add event listener only for our 3 li's.
// SO We had to add a event listener to the entire UL Parent element.
// So anytime we click on the UL, the listener will fire.
// Basically, our code ( with the li argument inside the event listener) says : when li inside UL is 
// clicked, run the code inside the callback function. It is the method to add events for future elements.

$('ul').on('click', 'li', function(){
  $(this).toggleClass('checked');
});


// Make dissapears the task
// We use this.parent to select also the parent of the span ( which is directly the LI clicked)
// We use a third argument to add event listener even for future elements ( future spans)
$('ul').on('click', 'span', function(event){
  $(this).parent().fadeOut(1000, function(){
    $(this).remove();
  });
 event.stopPropagation();  
});

// Bubbling principle is simple

// When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
// event.stopPropagation allows us to avoid bubbling, thats means if we dont write a stopPropagation, 
// our span ( we want to select the span) will fadeout but also all elements related ( Li, ul, and HTML) 
// When bubbling happens, we have to use stopPropagation ( with event as an argument inside our callback function)


// Add a new task when enter key is pressed 
// first we need to select the input, in our case, the input where the type equals text
// we add keypress event listener , and we want only ENTER Key reaction, not others keys.
// for that, we have to pass 'event' as 2nd argument , and inside our callback function ,
// execute a code only if the pressed key is the enter key
// we have to add an if statement , and inside write event.which , 'which' keyword means the specific
// key that has been pressed , each key has a keycode , for enter , it is the number 13.


$('input[type="text"]').on('keypress', function(event) {
  if (event.which === 13) {
    // Grabbing new to do text from input
    var todoText = $(this).val();
    // Clear the content of the input after text grabbed
    $(this).val(''); // we just use val method with an empty string inside
    // create a new li and add to ul
    // to create a new element, we can use append method , first we select where we want to include our
    // new element ( ul for us), we write .append(), inside parenthesis , we can add html content that we 
    // want to add ( a string of html)
    $('ul').append('<li><span>X</span>' + ' ' + todoText + '</li>');
  }
});