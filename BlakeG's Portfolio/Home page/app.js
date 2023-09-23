function toggleContent(){
    var content = document.getElementById("content");
    if (content.style.display === "none"){
        content.style.display = "block";
    }else{
        content.style.display = "none";
    }
    }


    function toggleMenu() {
        const leftMenu = document.getElementById('leftMenu');
        leftMenu.classList.toggle('active');
    }
    // display ${storedName} in h1
    document.addEventListener("DOMContentLoaded", function () {
        console.log("DOMContentLoaded event fired.");
        // This event listener ensures the DOM is fully loaded before running the code.
    
        // Retrieve the username from localStorage
        const storedName = localStorage.getItem("name");
    
        // Check if a username exists in localStorage
        if (storedName) {
            // Find the element with the class "welcome-message"
            const welcomeMessage = document.querySelector(".welcome-message");
    
            // Update the text content of the element with the username
            welcomeMessage.textContent = `Welcome, ${storedName}!`;
        }
    });
    //comments section

//TODO trouble shoot and fix
document.addEventListener("DOMContentLoaded", function () {
    // This event listener ensures the DOM is fully loaded before running the code.

    // Retrieve the username from localStorage
    const storedName = localStorage.getItem("name");

    // Function to display saved comments
    function displaySavedComments() {
        const commentList = document.getElementById("comment-list");
        commentList.innerHTML = ""; // Clear the existing comments

        const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
        savedComments.forEach((commentText) => {
            // Create a container for each comment
            const commentContainer = document.createElement("div");
            commentContainer.className = "comment-container";

            // Append the comment to the container
            const commentElement = document.createElement("div");
            commentElement.className = "comment";
            commentElement.innerHTML = commentText;

            // Create a delete button for each comment
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-button";

            // Add event listener to delete button
            deleteButton.addEventListener("click", function () {
                // Remove the comment from savedComments
                const indexToRemove = savedComments.indexOf(commentText);
                if (indexToRemove !== -1) {
                    savedComments.splice(indexToRemove, 1);
                    localStorage.setItem("comments", JSON.stringify(savedComments));
                    // Display saved comments after deletion
                    displaySavedComments();
                }
            });

            // Append the comment and delete button to the container
            commentContainer.appendChild(commentElement);
            commentContainer.appendChild(deleteButton);

            // Append the container to the comment list
            commentList.appendChild(commentContainer);

            // Show the comment list with the styles
            commentList.style.display = "block";
        });
    }

    // Display saved comments on page load
    displaySavedComments();

    // Event listener for the "Post Comment" button
    document.getElementById("comment-button").addEventListener("click", function () {
        const commentText = document.getElementById("comment-input").value.trim();
        if (commentText !== "") {
            const formattedComment = `<strong>${storedName}</strong> Commented: ${commentText}`;

            // Save the comment in localStorage
            const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
            savedComments.push(formattedComment);
            localStorage.setItem("comments", JSON.stringify(savedComments));

            // Display saved comments
            displaySavedComments();

            // Clear the comment input
            document.getElementById("comment-input").value = "";
        }
    });
});


function clearUserName() {
    localStorage.removeItem("name"); // Remove the "name" key from localStorage
    const welcomeMessage = document.querySelector(".welcome-message");
    welcomeMessage.textContent = "Welcome!"; // Reset the welcome message
}

// Add event listener to the Clear Username button
document.getElementById("clearNameButton").addEventListener("click", function () {
    clearUserName();
});

//contact form
