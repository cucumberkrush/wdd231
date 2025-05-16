const courses = [
  { id: 'wdd230', name: 'Web Frontend I', credits: 3, completed: true, type: 'wdd' },
  { id: 'cse121b', name: 'JavaScript Language', credits: 3, completed: false, type: 'cse' },
  // Add all courses from the provided array
];

function renderCourses(filter = 'all') {
  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(course => course.type === filter);
  
  const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  
  document.getElementById('course-list').innerHTML = filteredCourses
    .map(course => `
      <div class="course-card ${course.completed ? 'completed' : ''}">
        <h3>${course.name}</h3>
        <p>${course.credits} credits</p>
      </div>
    `).join('');
  
  document.getElementById('total-credits').textContent = totalCredits;
}

// Event listeners for filters
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', (e) => {
    renderCourses(e.target.dataset.filter);
  });
});

// Initial render
renderCourses();