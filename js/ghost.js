const url = "https://blog.doublemstudios.com/ghost/api/content/posts/?key=26364e350f486654921c1e10f2";

// const options = { }

fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {

        // Blog Post 1 Info
        title1 = data.posts[0].title;
        featureImage1 = data.posts[0].feature_image;
        excerpt1 = data.posts[0].custom_excerpt;
        url1 = data.posts[0].url;
        readingTime1 = data.posts[0].reading_time;

        document.getElementById("title1").insertAdjacentHTML("beforeend",title1);
        document.getElementById("featureImage1").src=featureImage1;
        document.getElementById("readingTime1").insertAdjacentHTML("afterbegin",readingTime1);
        document.getElementById("excerpt1").insertAdjacentHTML("afterbegin",excerpt1);

        // Blog Post 2 Info
        title2 = data.posts[1].title;
        featureImage2 = data.posts[1].feature_image;
        excerpt2 = data.posts[1].custom_excerpt;
        url2 = data.posts[1].url;
        readingTime2 = data.posts[1].reading_time;

        document.getElementById("title2").insertAdjacentHTML("beforeend",title2);
        document.getElementById("featureImage2").src=featureImage2;
        document.getElementById("readingTime2").insertAdjacentHTML("afterbegin",readingTime2);
        document.getElementById("excerpt2").insertAdjacentHTML("afterbegin",excerpt2);

        window.onload=()=>{
            var element = document.getElementById("blog1");
            element.href = url1;
            var element2 = document.getElementById("blog2");
            element2.href = url2;
        };
    })
    .catch(error  => console.log(error));