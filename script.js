// Function to toggle navbar responsiveness
function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "navbar-lists") {
        x.className += " responsive";
    } else {
        x.className = "navbar-lists";
    }
}

// Smooth scroll for navigation links
const scrollLinks = document.querySelectorAll('.navbar-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
            const targetElement = document.getElementById(targetId.substring(1));
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            } else {
                console.error(`Element with id '${targetId.substring(1)}' not found.`);
            }
        } else {
            console.error('No href attribute found.');
        }
    });
});

// Load tasks from localStorage when the page loads
document.addEventListener("DOMContentLoaded", loadTasks);

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        // Get the current list of tasks from localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // Add the new task to the array
        tasks.push(taskValue);

        // Save the updated tasks back to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Clear the input field
        taskInput.value = "";

        // Re-load the tasks to update the displayed list
        loadTasks();
    } else {
        alert("Please enter a task!");
    }
}

// Function to delete a task
function deleteTask(index) {
    // Get the current list of tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Remove the task at the given index
    tasks.splice(index, 1);

    // Save the updated tasks back to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Re-load the tasks to update the displayed list
    loadTasks();
}

// Function to load tasks from localStorage
function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";  // Clear the current list

    // Get the list of tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Display each task in the list
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Event handling for adding and deleting events
document.addEventListener("DOMContentLoaded", loadEvents);

// Function to add an event
function addEvent() {
    const eventInput = document.getElementById('eventInput');
    const eventValue = eventInput.value.trim();

    if (eventValue !== "") {
        // Get the current list of events from localStorage
        let events = JSON.parse(localStorage.getItem('events')) || [];

        // Add the new event to the array
        events.push(eventValue);

        // Save the updated events back to localStorage
        localStorage.setItem('events', JSON.stringify(events));

        // Clear the input field
        eventInput.value = "";

        // Re-load the events to update the displayed list
        loadEvents();
    } else {
        alert("Please enter an event!");
    }
}

// Function to delete an event
function deleteEvent(index) {
    // Get the current list of events from localStorage
    let events = JSON.parse(localStorage.getItem('events')) || [];

    // Remove the event at the given index
    events.splice(index, 1);

    // Save the updated events back to localStorage
    localStorage.setItem('events', JSON.stringify(events));

    // Re-load the events to update the displayed list
    loadEvents();
}

// Function to load events from localStorage
function loadEvents() {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = "";  // Clear the current list

    // Get the list of events from localStorage
    const events = JSON.parse(localStorage.getItem('events')) || [];

    // Display each event in the list
    events.forEach((event, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${event}
            <button class="delete-btn" onclick="deleteEvent(${index})">Delete</button>
        `;
        eventList.appendChild(li);
    });
}
  //contact from

  // contact.js

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form data
    const formData = new FormData(event.target);

    // Convert form data into a JavaScript object
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send data to the server using fetch
    fetch('https://yourserver.com/saveContactData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)  // Convert the data object into a JSON string
    })
    .then(response => response.json())  // Assume the server returns a JSON response
    .then(data => {
        console.log('Success:', data);
        alert("Your message has been sent successfully!");
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("There was an error sending your message.");
    });
});


function addFaq(){
    const faqInput= document.getElementById('faq')
    faqInput.innerHTML="For those seeking admissions an informal interaction will be conducted inn which the pupiland both parents must be present the final decision of the  admission commitee will be binding"
}