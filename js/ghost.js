const api = new GhostContentAPI({
    url: 'https://blog.doublemstudios.com',
    key: '26364e350f486654921c1e10f2',
    version: 'v5.0'
});

api.posts.browse({
    limit: 2,
    filter: 'tag:newsletter'
})
.then((obj) => {

    let posts = obj.reverse();

    blog_posts = document.getElementById('post-content');
    
    obj.forEach((post) => {

        let blog_date = new Date(Date(post.published_at));

        let blog_month = blog_date.getUTCMonth();
        let blog_day = blog_date.getUTCDate();
        let blog_year = blog_date.getUTCFullYear();

        blog_posts.insertAdjacentHTML("afterbegin", 
            `<div class="col-lg-6">
                <a href="${post.url}" target="_blank" class="mil-blog-card mil-mb-60">
                    <div class="mil-cover-frame mil-up">
                        <img src="${post.feature_image}" alt="${post.title}'s Cover">
                    </div>
                    <div class="mil-post-descr">
                        <div class="mil-labels mil-up mil-mb-30">
                            <div class="mil-label mil-upper">Reading Time</div>
                            <div class="mil-label mil-upper mil-accent">${post.reading_time} mins</div>
                        </div>
                        <h4 class="mil-up mil-mb-30">${post.title}</h4>
                        <p class="mil-post-text mil-up mil-mb-30">${post.custom_excerpt}</p>
                        <div class="mil-link mil-dark mil-arrow-place mil-up">
                            <span>Continue reading ➤</span>
                        </div>
                    </div>
                </a>
            </div>`
        );
    });
})
.catch((err) => {
    console.error(err);
});