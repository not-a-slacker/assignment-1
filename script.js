function toggle_like() {
    let like_button = document.getElementById("likeButton");
    let like_count_element = document.getElementById("count");
    let current_likes = localStorage.getItem("likes") || 0;


    let like_image = document.getElementById("likeImage");
    if (like_image.src.includes("thumbs-up1")) {
        like_image.src = "thumbs-down1.png";
        current_likes--;
    } else {
        like_image.src = "thumbs-up1.png";
        current_likes++;
    }
    like_count_element.textContent = current_likes;
    localStorage.setItem("likes", current_likes);
}
document.addEventListener("DOMContentLoaded", function () {
    let like_count_element = document.getElementById("count");
    let current_likes = localStorage.getItem("likes") || 0;
    like_count_element.textContent = current_likes;
});

