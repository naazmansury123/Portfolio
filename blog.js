// Fetch and display blog posts
document.addEventListener("DOMContentLoaded", () => {
    const postContainer = document.getElementById("post-container");
  
    // Mock API URL for example (replace with a real API if available)
    const apiUrl = "https://jsonplaceholder.typicode.com/posts?_limit=5";
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((posts) => {
        postContainer.innerHTML = ""; // Clear loading message
        posts.forEach((post) => {
          const postElement = document.createElement("div");
          postElement.classList.add("post");
          
          postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p class="post-excerpt">${post.body.substring(0, 100)}...</p>
            <p class="post-full-content" style="display: none;">${post.body}</p>
            <button class="read-more-btn">Read More</button>
          `;
          
          // Add click event for Read More button
          postElement.querySelector(".read-more-btn").addEventListener("click", function () {
            const fullContent = postElement.querySelector(".post-full-content");
            const excerpt = postElement.querySelector(".post-excerpt");
            
            if (fullContent.style.display === "none") {
              fullContent.style.display = "block";
              excerpt.style.display = "none";
              this.textContent = "Show Less";
            } else {
              fullContent.style.display = "none";
              excerpt.style.display = "block";
              this.textContent = "Read More";
            }
          });
  
          postContainer.appendChild(postElement);
        });
      })
      .catch((error) => {
        postContainer.innerHTML = "<p>Failed to load posts. Please try again later.</p>";
        console.error("Error fetching posts:", error);
      });
  });
  