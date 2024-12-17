// Mentor Matching
// Mock Data
const mentors = [
  { name: "Jane Doe", specialization: "Technology", personality: "Introvert", rating: 5 },
  { name: "John Smith", specialization: "Business", personality: "Extrovert", rating: 4 },
  { name: "Emily Johnson", specialization: "Healthcare", personality: "Introvert", rating: 5 },
];

// Mentor Matching
document.getElementById('match-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const interest = document.getElementById('interests').value;
  const personality = document.getElementById('personality').value;

  const resultsDiv = document.getElementById('mentor-results');
  resultsDiv.innerHTML = '';

  const filteredMentors = mentors.filter(mentor => 
    mentor.specialization.toLowerCase() === interest.toLowerCase() &&
    mentor.personality.toLowerCase() === personality.toLowerCase()
  );

  if (filteredMentors.length > 0) {
    filteredMentors.forEach(mentor => {
      const mentorCard = document.createElement('div');
      mentorCard.classList.add('mentor-card');
      mentorCard.innerHTML = `
        <h3>${mentor.name}</h3>
        <p>Specialization: ${mentor.specialization}</p>
        <p>Rating: ${'⭐'.repeat(mentor.rating)}</p>
        <button class="contact-btn">Contact</button>
      `;
      resultsDiv.appendChild(mentorCard);
    });
  } else {
    resultsDiv.innerHTML = 'No mentors found for your criteria.';
  }
});

  
  // Chat functionality
  // Chat functionality
document.getElementById('send-msg').addEventListener('click', function() {
  const message = document.getElementById('message').value;
  if (message) {
    const chatBox = document.getElementById('chat-box');
    const newMessage = document.createElement('div');
    newMessage.textContent = `You: ${message}`;
    chatBox.appendChild(newMessage);
    document.getElementById('message').value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});

  // Goal Setting
  // Goal Setting
document.getElementById('add-goal').addEventListener('click', function() {
  const goalInput = document.getElementById('goal-input').value;
  if (goalInput) {
    const goalList = document.getElementById('goal-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${goalInput}
      <button class="remove-goal">Remove</button>
    `;
    goalList.appendChild(listItem);
    document.getElementById('goal-input').value = '';
  }
});

// Remove Goal
document.getElementById('goal-list').addEventListener('click', function(e) {
  if (e.target.classList.contains('remove-goal')) {
    e.target.parentElement.remove();
  }
});

  // Add interactive step completion functionality
document.querySelectorAll('.career-step').forEach(step => {
    step.addEventListener('click', function() {
      alert(`You clicked on: ${this.querySelector('p').textContent}`);
    });
  });
  
  // Mark current step as completed
  document.getElementById('mark-complete').addEventListener('click', function() {
    const currentStep = document.querySelector('.career-step:not(.completed)');
    
    if (currentStep) {
      currentStep.classList.add('completed');
    } else {
      alert('All steps are completed!');
    }
  });

  // Array to store scheduled sessions
let sessions = [];

// Handle form submission to schedule a video session
document.getElementById('schedule-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get selected date and time
  const date = document.getElementById('session-date').value;
  const time = document.getElementById('session-time').value;

  if (date && time) {
    // Create a new session object
    const session = {
      date: new Date(date).toLocaleDateString(),
      time: time,
    };

    // Add the session to the array
    sessions.push(session);

    // Update the display of scheduled sessions
    displayScheduledSessions();
    
    // Clear the form
    document.getElementById('schedule-form').reset();
  }
});

// Display scheduled sessions
function displayScheduledSessions() {
  const sessionList = document.getElementById('session-list');
  sessionList.innerHTML = ''; // Clear existing sessions

  // Loop through the sessions and display each
  sessions.forEach((session, index) => {
    const sessionItem = document.createElement('li');
    sessionItem.innerHTML = `
      <span>${session.date} at ${session.time}</span>
      <button onclick="cancelSession(${index})">Cancel</button>
    `;
    sessionList.appendChild(sessionItem);
  });
}

// Cancel a session
function cancelSession(index) {
  // Remove the session from the array
  sessions.splice(index, 1);
  
  // Update the display of scheduled sessions
  displayScheduledSessions();
}

  