// Function to create a new tweet element
function createTweetElement(text, userId) {
    const post = document.createElement('div');
    post.classList.add('post');
    const timestamp = new Date().toLocaleString(); // Get current timestamp
    post.innerHTML = `
         <p>${text}</p>
        <p><span class="user-id"><i>@${userId}</i></span><br></p><p class="timestamp">${timestamp}</p>
        <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" alt="User Icon" class="user-icon"> <!-- User Icon -->
        
       
        <span class="edit-btn">&#9998;  EDIT</span>
        <span class="trash-btn">&#128465;  TRASH</span>
        <span class="like-btn">&#10084;  LIKE</span>
        <span class="likes">0</span>
    `;
    return post;
}

// Function to toggle tweet button based on input length
function toggleTweetButton() {
    const tweetInput = document.getElementById('tweet-input');
    const handleInput = document.getElementById('handle-input').value.trim();
    const tweetButton = document.getElementById('tweet-button');
    tweetButton.disabled = tweetInput.value.trim().length === 0 || handleInput.length === 0;
}

// Function to like 
function handleLikeButtonClick(event) {
    const likes = event.target.nextElementSibling;
    likes.textContent = parseInt(likes.textContent) + 1;
}

// Function to tweet button
function handleTweetButtonClick() {
    const tweetInput = document.getElementById('tweet-input');
    const tweetText = tweetInput.value.trim();
    const handleInput = document.getElementById('handle-input').value.trim();
    if (tweetText.length > 0 && handleInput.length > 0) {
        const tweetContainer = document.getElementById('tweet-container');
        const newTweet = createTweetElement(`${tweetText}`, handleInput);
        tweetContainer.appendChild(newTweet);
        tweetInput.value = '';
        document.getElementById('handle-input').value = ''; // Clear handle input
        toggleTweetButton();
    }
}

// Function to edit 
function handleEditButtonClick(event) {
    const post = event.target.parentElement;
    const textElement = post.querySelector('p');
    const newText = prompt('Edit your tweet:', textElement.textContent);
    if (newText !== null) {
        textElement.textContent = newText;
    }
}

// Function to trash
function handleTrashButtonClick(event) {
    const post = event.target.parentElement;
    post.remove();
}

// Adding event listeners
document.getElementById('tweet-input').addEventListener('input', toggleTweetButton);
document.getElementById('tweet-button').addEventListener('click', handleTweetButtonClick);
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('like-btn')) {
        handleLikeButtonClick(event);
    } else if (event.target.classList.contains('edit-btn')) {
        handleEditButtonClick(event);
    } else if (event.target.classList.contains('trash-btn')) {
        handleTrashButtonClick(event);
    }
});