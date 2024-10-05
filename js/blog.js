const api = new GhostContentAPI({
  url: "https://blog.doublemstudios.com",
  key: "f46af933483b30df1bca26d25f",
  version: "v5.0",
});

api.posts
  .browse({
    limit: 5,
    include: "tags, authors",
    filter: "tags:[engineering,artist-development,business]",
  })
  .then((obj) => {
    featured_posts = document.getElementById("featured-posts");
    blog_posts = document.getElementById("blog-posts");

    obj.forEach((post) => {
      let featured = post.featured;

      if (featured == true) {
        featured_posts.insertAdjacentHTML(
          "afterbegin",
          `<div class="col-lg-12">

              <a href="${post.url}" class="mil-blog-card mil-mb-60">
                  <div class="mil-cover-frame mil-up">
                      <img src="${post.feature_image}" alt="${post.title}'s Cover">
                  </div>
                  <div class="mil-post-descr">
                      <div class="mil-labels mil-up mil-mb-30">
                          <div class="mil-label mil-upper mil-accent">${post.primary_tag.name}</div>
                          <div class="mil-label mil-upper">${post.reading_time} mins</div>
                      </div>
                      <h4 class="mil-up mil-mb-30">${post.title}</h4>
                      <p class="mil-post-text mil-up mil-mb-30">${post.custom_excerpt}</p>
                      <div class="mil-link mil-up">
                          <span>Continue Reading →</span>
                      </div>
                  </div>
              </a>

          </div>`,
        );
      } else {
        blog_posts.insertAdjacentHTML(
          "afterbegin",
          `<div class="col-lg-12">

              <a href="${post.url}" class="mil-blog-card mil-blog-card-hori mil-more mil-mb-60">
                  <div class="mil-cover-frame mil-up">
                      <img src="${post.feature_image}" alt="${post.title}'s Cover">
                  </div>
                  <div class="mil-post-descr">
                      <div class="mil-labels mil-up mil-mb-30">
                          <div class="mil-label mil-upper mil-accent">${post.primary_tag.name}</div>
                          <div class="mil-label mil-upper">${post.reading_time} mins</div>
                      </div>
                      <h4 class="mil-up mil-mb-30">${post.title}</h4>
                      <p class="mil-post-text mil-up mil-mb-30">${post.custom_excerpt}</p>
                      <div class="mil-link mil-up">
                          <span>Continue Reading →</span>
                      </div>
                  </div>
              </a>

          </div>`,
        );
      }
    });
  })
  .catch((err) => {
    console.error(err);
  });
