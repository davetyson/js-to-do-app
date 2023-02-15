// Pseudo code for our To Do App

// 1) save the values/DOM elements we need to interact with

    // let's query the DOM for the form element and save it within a variable
    // let's query the DOM for the input element and save it within a variable

// 2) Attach an event listener to the form element

    // pass in 2 arguments to the event listener method:
        // a) the event you are listening for
        // b) the callback function which will hold the logic we wish to run once the event "is heard" (aka occurs on the page)

    // save the text value from the input within a variable

    // If the user submits a to-do (check whether the value of the input is NOT empty) then:
        // create a li element 
        // add an FA icon to the element
        // add the text the user submitted to the li
        // append the li to the ul element
    // Else alert the user to please submit a valid to-do

    // 3) Tracking when the task is done

        // 