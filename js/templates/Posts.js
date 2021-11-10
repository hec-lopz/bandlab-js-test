import getData from "../utils/getData.js";
import { getUsers } from "./UsersList.js";

let currentData = [];
const sortBtn = document.getElementById("sortBtn");
if (currentData.length === 0) {
  sortBtn.disabled = true;
}
const sortPosts = async () => {
  currentData.sort((a, b) => {
    const nameA = a.title.toLowerCase();
    const nameB = b.title.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 11;
    }

    return 0;
  });

  renderPosts(currentData);
};
sortBtn.addEventListener("click", sortPosts);

const createPost = ({ title, body, name, id, userId }) => {
  const postTemplate = `
    <h3 class="card__title">${title}</h3>
    <hr />
    <p class="card__body">${body.replace(/\\n/, "<br/>")}</p>
    <hr />
    <span> Posted By ${name}</span>
  `;

  const li = document.createElement("li");
  li.className = "card";
  li.dataset.id = id;
  li.dataset.userId = userId;

  li.innerHTML = postTemplate;

  return li;
};

export const getPosts = async () => {
  const postsData = await getData("posts");
  const usersData = await getData("users");
  const posts = postsData.map((post) => {
    const { name } = usersData.find((user) => user.id === post.userId);
    return { ...post, name: name };
  });

  sortBtn.disabled = false;
  currentData = [...posts];
  getUsers(usersData);
  renderPosts(posts);
};
export const filterPosts = async ({ id, userName }) => {
  const postsData = await getData(`posts?userId=${id}`);
  const posts = postsData.map((post) => ({ ...post, name: userName }));
  sortBtn.disabled = false;
  currentData = [...posts];
  renderPosts(posts);
};
const renderPosts = (posts) => {
  const postsContainer = document.getElementById("posts-container");
  const nodesList = posts.map((item) => createPost(item));
  postsContainer.innerHTML = "";
  postsContainer.append(...nodesList);
};
