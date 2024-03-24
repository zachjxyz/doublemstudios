const url = "https://blog.doublemstudios.com/ghost/api/content/posts/?key=26364e350f486654921c1e10f2&limit=2&include=authors";

document.addEventListener("DOMContentLoaded", function(event) {
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        idx_of_blogs = Object.keys(data.posts).length - 1;

        blog_posts = document.getElementById('post-content');

        for (i = idx_of_blogs; i >= 0; i--) {
            // let blog_id = data.posts[i].id;
            // let blog_html = data.posts[i].html;
            // let blog_slug = data.posts[i].slug;
            // let blog_author = data.posts[i].authors[i].name;
            let blog_title = data.posts[i].title;
            let blog_image = data.posts[i].feature_image;
            let blog_excerpt = data.posts[i].custom_excerpt;
            let blog_link = data.posts[i].url;
            let reading_time = data.posts[i].reading_time;
            let blog_date = Date.parse(data.posts[i].published_at);

            let date = new Date(blog_date);

            let blog_year = date.getFullYear();
            let blog_month = (date.getMonth() + 1).toString().padStart(2, "0");
            let blog_day = date.getUTCDate();
            
            blog_posts.insertAdjacentHTML("afterbegin", 
                `<div class="col-lg-6">
                    <a href="${blog_link}" target="_blank" class="mil-blog-card mil-mb-60">
                        <div class="mil-cover-frame mil-up">
                            <img src="${blog_image}" alt="${blog_title}'s Cover">
                        </div>
                        <div class="mil-post-descr">
                            <div class="mil-labels mil-up mil-mb-30">
                                <div class="mil-label mil-upper">Reading Time</div>
                                <div class="mil-label mil-upper mil-accent">${reading_time} mins</div>
                            </div>
                            <h4 class="mil-up mil-mb-30">${blog_month}/${blog_day}/${blog_year}: ${blog_title}</h4>
                            <p class="mil-post-text mil-up mil-mb-30">${blog_excerpt}</p>
                            <div class="mil-link mil-dark mil-arrow-place mil-up">
                                <span>Continue reading ➤</span>
                            </div>
                        </div>
                    </a>
                </div>`
            );
        }
    })
    .catch(error  => console.log(error));
  });