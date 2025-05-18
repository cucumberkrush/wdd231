document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: true },
        { code: "WDD 230", name: "Web Frontend Development I", credits: 3, completed: true },
        { code: "WDD 231", name: "Web Frontend Development II", credits: 3, completed: false },
        { code: "CSE 121B", name: "JavaScript Language", credits: 3, completed: true },
        { code: "CSE 111", name: "Programming with Functions", credits: 3, completed: false }
        // Add more courses as needed
    ];

    const container = document.getElementById('courses-container');
    const totalCredits = document.getElementById('total-credits');
    const filters = document.querySelectorAll('.filter');

    function displayCourses(coursesToShow) {
        container.innerHTML = '';
        let credits = 0;

        coursesToShow.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = `course-card ${course.completed ? 'completed' : ''}`;
            
            courseCard.innerHTML = `
                <h4>${course.code}</h4>
                <p>${course.name}</p>
                <p>Credits: ${course.credits}</p>
                <p>Status: ${course.completed ? '✓ Completed' : '⌛ In Progress'}</p>
            `;
            
            container.appendChild(courseCard);
            credits += course.credits;
        });

        totalCredits.textContent = credits;
    }

    function filterCourses(filter) {
        let filtered = courses;
        
        if (filter === 'wdd') {
            filtered = courses.filter(course => course.code.includes('WDD'));
        } else if (filter === 'cse') {
            filtered = courses.filter(course => course.code.includes('CSE'));
        }
        
        displayCourses(filtered);
    }

    // Event listeners for filter buttons
    filters.forEach(button => {
        button.addEventListener('click', function() {
            filters.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterCourses(this.dataset.filter);
        });
    });

    // Initial display
    displayCourses(courses);
});