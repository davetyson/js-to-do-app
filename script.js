// Pseudo code for our To Do App

// 1) save the values/DOM elements we need to interact with

    // let's query the DOM for the form element and save it within a variable
    const formElement = document.querySelector('form');

    // let's query the DOM for the input element and save it within a variable
    const inputElement = document.querySelector('input');

    // query the DOM for the ul so we can append to it later
    const ulElement = document.querySelector('ul');


// 2) Attach an event listener to the form element

    // pass in 2 arguments to the event listener method:
        // a) the event you are listening for
        // b) the callback function which will hold the logic we wish to run once the event "is heard" (aka occurs on the page)

    // every time an event occurs, an object is generated (we're going to pass that obj into the scope of the callback function)
    formElement.addEventListener('submit', function(event) {
    // this is an arrow function example () => {}

    // we use preventDefault to prevent the browser from reloading every time the form is submitted, this is VERY COMMON in the wild for forms
    event.preventDefault();

    // This is an example of some uses of console.log for debugging, just to check to make sure my event was working properly
        // console.log(event);
        // console.log('Form has been submitted my dog');

    // save the text value from the input within a variable
        // NOTE any info entered into an input element will always be available at the value property
    
    // STRETCH ERROR HANDLING GOAL: how do we avoid adding empty strings with multiple spaces? We can use the trim function to trim off extra whitespace
    const userToDo = inputElement.value.trim();
        // console.log(userToDo);

    // NOTE form inputs ALWAYS return values as strings (even if they are numbers)

    // If the user submits a to-do (check whether the value of the input is NOT empty) then:

    if (userToDo !== "") {

        // create a li element 
        const liElement = document.createElement('li');

        // add an FA icon to the element
        liElement.innerHTML = '<i class="fa-regular fa-square"></i>';

        // add the text the user submitted to the li

        // at first we tried this but it won't work because it'll overwrite the FA icon
        // liElement.textContent = userToDo;

        //instead, we append the to-do as a child to the li element
            // because it is text content, we need to specifically create a text NODE and THEN append it

            const toDoText = document.createTextNode(userToDo);
            liElement.appendChild(toDoText);

        // append the li to the ul element
        ulElement.appendChild(liElement);

        // clear the text in the input field
        inputElement.value = "";

    // Else alert the user to please submit a valid to-do
    } else {
        alert("Please enter a valid task! Dont leave this field empty");
    }
    })

    // 3) Tracking when the task is done
    // first query the DOM for our icon and save the returned DOM node within a variable. I'm commenting this out as we actually have to move it to within the function loop that happens once an li has already been added
    // const iElement = document.querySelector('i');

    // add a click event listener and attach it to our icon
    // if we use this style of event listener add, where it attaches to the checkbox, it won't work because that doesn't exist on the page at page load, where this is trying to load (it generates an error)
    // iElement.addEventListener('click', function(){
    //     console.log('a click has occurred!');
    // })

    // instead we can add it to the parent element of the icon that DOES exist on page load
    // we can use the event object to find out exactly where the event occurred and hone in on that specific icon
    ulElement.addEventListener('click', function(event){

        // we only want to make the checkbox checked off when the checkbox is clicked, not the li, so we can use the tagName property of the event object to see what was clicked. we want to isolate where the click event occurs - ONLY if it occurs on the icon do we want to run the code to update "checking the checkbox" (aka updating the rendered FA icon)
        if (event.target.tagName === 'I') {

            const iElement = event.target;

            // toggle the fontawesome icon class so that if it's checked it should be unchecked and vice versa
            iElement.classList.toggle('fa-square');
            iElement.classList.toggle('fa-square-check');
        }
    })


    