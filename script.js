document.addEventListener('DOMContentLoaded', function() {
    // Get all enroll buttons
    const enrollButtons = document.querySelectorAll('.enroll-btn');

    // Function to handle enrollment
    function enrollCourse(courseId) {
        // Here you can implement actual enrollment logic, such as storing in database or displaying a success message
        alert(`Enrolled in course ${courseId}`);
    }

    // Add click event listeners to each enroll button
    enrollButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const courseId = button.getAttribute('data-course-id');
            enrollCourse(courseId);
        });
    });
});
