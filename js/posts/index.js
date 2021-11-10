import { getPosts } from "./templates/Posts.js";

const loadBtn = document.getElementById("loadPosts");

loadBtn.addEventListener("click", getPosts);
