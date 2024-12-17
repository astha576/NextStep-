// Questions for the quiz
import 'https://cdn.jsdelivr.net/npm/chart.js'
const questions = [
    {
        question: "What subjects do you enjoy the most?",
        options: ["Science", "Mathematics", "Arts", "Literature", "Social Studies"]
    },
    {
        question: "How do you prefer to solve problems?",
        options: ["Analytical thinking", "Creative thinking", "Practical application", "Collaborative approach"]
    },
    {
        question: "What type of environment do you thrive in?",
        options: ["Office", "Laboratory", "Outdoors", "Creative studio", "Classroom"]
    },
    {
        question: "How do you feel about public speaking?",
        options: ["Love it", "Like it", "Neutral", "Dislike it", "Hate it"]
    },
    {
        question: "Do you prefer working independently or in a team?",
        options: ["Independently", "In a team", "Depends on the task"]
    },
    {
        question: "What motivates you the most?",
        options: ["Helping others", "Solving complex problems", "Creativity and expression", "Achieving personal goals"]
    },
    {
        question: "What type of tasks do you enjoy?",
        options: ["Research and analysis", "Hands-on activities", "Creative projects", "Organizing events"]
    },
    {
        question: "How do you handle stress?",
        options: ["Stay calm", "Seek support", "Take a break", "Work harder"]
    },
    {
        question: "What skills do you want to develop?",
        options: ["Technical skills", "Communication skills", "Leadership skills", "Creative skills"]
    },
    {
        question: "What type of projects excite you?",
        options: ["Innovative technology", "Artistic creations", "Community service", "Business ventures"]
    },
    {
        question: "How do you prefer to learn?",
        options: ["Visually", "Auditory", "Kinesthetic", "Reading"]
    },
    {
        question: "Do you enjoy working with data?",
        options: ["Yes, very much", "Somewhat", "Not really", "Not at all"]
    },
    {
        question: "Which of the following interests you the most?",
        options: ["Medicine", "Engineering", "Design", "Business", "Education"]
    },
    {
        question: "How do you feel about deadlines?",
        options: ["Thrives under pressure", "Prefer flexibility", "Work well with structure", "Can be stressed out"]
    },
    {
        question: "What impact do you want to have on the world?",
        options: ["Innovate technology", "Teach and inspire others", "Create art", "Drive social change"]
    },
    {
        question: "How do you like to communicate?",
        options: ["Writing", "Speaking", "Visual media", "One-on-one"]
    },
    {
        question: "Are you interested in entrepreneurship?",
        options: ["Very interested", "Somewhat interested", "Neutral", "Not interested"]
    },
    {
        question: "Do you enjoy working with your hands?",
        options: ["Yes, a lot", "Sometimes", "Not really", "Not at all"]
    },
    {
        question: "What type of technology interests you?",
        options: ["Computers", "Medical devices", "Art and design tools", "Educational technology"]
    },
    {
        question: "Do you prefer structure or flexibility in your work?",
        options: ["Structure", "Flexibility", "A mix of both"]
    },
    {
        question: "Which career paths are you curious about?",
        options: ["STEM fields", "Arts and humanities", "Business and finance", "Social services", "Education"]
    }
];

// Career options based on interests
const careerOptions = {
    "Science": ["Engineer", "Scientist", "Doctor", "Data Analyst", "Biochemist"],
    "Mathematics": ["Actuary", "Statistician", "Data Scientist", "Financial Analyst", "Economist"],
    "Arts": ["Artist", "Musician", "Designer", "Writer", "Photographer"],
    "Literature": ["Author", "Editor", "Publisher", "Content Writer", "Literary Critic"],
    "Social Studies": ["Social Worker", "Psychologist", "Counselor", "Historian", "Political Analyst"],
    "Engineering": ["Civil Engineer", "Mechanical Engineer", "Software Engineer", "Electrical Engineer"],
    "Business": ["Entrepreneur", "Marketer", "Financial Analyst", "Manager", "Salesperson"],
    "Education": ["Teacher", "Counselor", "Trainer", "Administrator", "Special Education Teacher"],
    "Social Services": ["Social Worker", "Counselor", "Psychologist", "Community Organizer", "Nonprofit Manager"],
    "Technology": ["Web Developer", "App Developer", "Cybersecurity Specialist", "Data Engineer"],
};

// Function to render questions
const questionsContainer = document.querySelector('.questionsContainer');

questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `<h2>${index + 1}. ${q.question}</h2>`;
    
    q.options.forEach(option => {
        questionDiv.innerHTML += `
            <label>
                <input type="radio" name="q${index}" value="${option}" required>
                ${option}
            </label><br>
        `;
    });
    
    questionsContainer.appendChild(questionDiv);
});

// Handle form submission
document.getElementById('quizForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const results = {};

    for (const [key, value] of formData.entries()) {
        if (results[value]) {
            results[value]++;
        } else {
            results[value] = 1;
        }
    }

    const careerDistribution = {};
    for (const key in results) {
        if (key in careerOptions) {
            careerDistribution[key] = results[key];
        }
    }

    drawChart(careerDistribution);
    displayResults(careerDistribution);
    document.getElementById('results').style.display = 'block';
});

// Draw the pie chart
function drawChart(data) {
    const ctx = document.getElementById('careerChart').getContext('2d');
    const chartData = {
        labels: Object.keys(data),
        datasets: [{
            data: Object.values(data),
            backgroundColor: ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2', '#59a14f'],
        }]
    };

    new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Career Recommendations'
                }
            }
        }
    });
}

// Display the recommended careers
function displayResults(data) {
    const careerOptionsContainer = document.getElementById('careerOptions');
    careerOptionsContainer.innerHTML = '';

    for (const career in data) {
        const careers = careerOptions[career];
        careerOptionsContainer.innerHTML += `<strong>${career} Career Options:</strong> ${careers.join(', ')}<br>`;
    }
}
