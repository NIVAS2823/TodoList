$(document).ready(function () {
    // Add a new task
    $('#add-task-btn').click(function () {
        const task = $('#new-task').val();

        if (task) {
            // Append the task to the list
            $('#task-list').append('<li>' + task + '<button class="delete-task">X</button></li>');
            $('#new-task').val(''); // Clear input field
        } else {
            alert("Please enter a task!");
        }
    });

    // Delete task
    $('#task-list').on('click', '.delete-task', function () {
        $(this).parent().remove(); // Remove the parent list item
    });
});
