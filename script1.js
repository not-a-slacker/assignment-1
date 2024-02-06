function toggle_like1() {
    let like_button1 = document.getElementById("likeButton");
    let like_count_element1 = document.getElementById("count");
    let current_likes1 = localStorage.getItem("likes1") || 0;


    let like_image1 = document.getElementById("likeImage");
    if (like_image1.src.includes("thumbs-up1")) {
        like_image1.src = "thumbs-down1.png";
        current_likes1--;
    } else {
        like_image1.src = "thumbs-up1.png";
        current_likes1++;
    }
    like_count_element1.textContent = current_likes1;
    localStorage.setItem("likes1", current_likes1);
}
document.addEventListener("DOMContentLoaded", function () {
    let like_count_element1 = document.getElementById("count");
    let current_likes1 = localStorage.getItem("likes1") || 0;
    like_count_element1.textContent = current_likes1;
});