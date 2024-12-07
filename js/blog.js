document.addEventListener("DOMContentLoaded", () => {
  const api = new GhostContentAPI({
    url: "https://blog.doublemstudios.com",
    key: "f46af933483b30df1bca26d25f",
    version: "v5.0",
  });

  api.posts
    .browse({
      include: "tags, authors, created_at",
      filter: "tags:[artist-development, business, engineering]",
      order: "published_at ASC",
    })
    .then((posts) => {
      // console.log(posts);

      // Get DOM elements
      const featuredPostsContainer = document.getElementById("featured-posts");
      const blogPostsContainer = document.getElementById("blog-posts");

      // Ensure containers exist before proceeding
      if (!featuredPostsContainer || !blogPostsContainer) {
        console.error(
          "Error: One or more target containers are missing in the DOM.",
        );
        return;
      }

      // Process posts
      posts.forEach((post) => {
        const isFeatured = post.featured;
        const postHTML = `
          <div class="col-lg-12">
              <a href="${post.url}" class="mil-blog-card ${
                isFeatured ? "" : "mil-blog-card-hori mil-more"
              } mil-mb-60">
                  <div class="mil-cover-frame mil-up">
                      <img src="${post.feature_image}" alt="${post.title}'s Cover">
                  </div>
                  <div class="mil-post-descr">
                      <div class="mil-labels mil-up mil-mb-30">
                          <div class="mil-label mil-upper mil-accent">${post.primary_tag?.name || "No Tag"}</div>
                          <div class="mil-label mil-upper">${post.reading_time} mins</div>
                      </div>
                      <h4 class="mil-up mil-mb-30">${post.title}</h4>
                      <p class="mil-post-text mil-up mil-mb-30">${post.custom_excerpt}</p>
                      <div class="mil-link mil-up">
                          <span>Continue Reading →</span>
                      </div>
                  </div>
              </a>
          </div>
        `;

        // Add post to the appropriate container
        if (isFeatured) {
          featuredPostsContainer.insertAdjacentHTML("afterbegin", postHTML);
        } else {
          blogPostsContainer.insertAdjacentHTML("afterbegin", postHTML);
        }
      });
    })
    .catch((err) => {
      console.error("Error fetching posts:", err);
    });
});
