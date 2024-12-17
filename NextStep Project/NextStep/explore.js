// Variables to keep track of the current course and internship slides
let currentCourse = 0;
let currentInternship = 0;

// Select the course and internship containers
const courseContainer = document.getElementById('course-container');
const internshipContainer = document.getElementById('internship-container');

// Get the total number of slides (for both courses and internships)
const totalCourseSlides = document.querySelectorAll('.course-slide').length;
const totalInternshipSlides = document.querySelectorAll('.internship-slide').length;

// Function to display the current course based on the index
function showCourse(index) {
  // Ensure the index is within the bounds of the total slides
  if (index >= totalCourseSlides) {
    currentCourse = 0;  // Wrap around to the first slide
  } else if (index < 0) {
    currentCourse = totalCourseSlides - 1;  // Wrap around to the last slide
  } else {
    currentCourse = index;  // Set the current course to the new index
  }
  
  // Adjust the translateX property to show the selected slide
  courseContainer.style.transform = `translateX(-${currentCourse * 100}%)`;
}

// Function to go to the next course
function nextCourse() {
  showCourse(currentCourse + 1);
}

// Function to go to the previous course
function prevCourse() {
  showCourse(currentCourse - 1);
}

// Function to display the current internship based on the index
function showInternship(index) {
  // Ensure the index is within the bounds of the total slides
  if (index >= totalInternshipSlides) {
    currentInternship = 0;  // Wrap around to the first slide
  } else if (index < 0) {
    currentInternship = totalInternshipSlides - 1;  // Wrap around to the last slide
  } else {
    currentInternship = index;  // Set the current internship to the new index
  }
  
  // Adjust the translateX property to show the selected slide
  internshipContainer.style.transform = `translateX(-${currentInternship * 100}%)`;
}

// Function to go to the next internship
function nextInternship() {
  showInternship(currentInternship + 1);
}

// Function to go to the previous internship
function prevInternship() {
  showInternship(currentInternship - 1);
}

// Initialize by showing the first course and internship
showCourse(currentCourse);
showInternship(currentInternship);
