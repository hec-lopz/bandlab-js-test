import { filterPosts } from "./Posts.js";

export const createUserListItem = ({ name, id }) => {
  const li = document.createElement("li");
  li.className = "filter__item";
  li.dataset.id = id;
  li.dataset.userName = name;
  li.innerText = name;

  li.addEventListener("click", (e) => filterPosts(e.target.dataset));

  return li;
};

export const getUsers = (data) => {
  const usersList = document.querySelector("#filterList");
  const nodeList = data.map((user) => createUserListItem(user));
  usersList.innerHTML = "";
  usersList.append(...nodeList);
};
