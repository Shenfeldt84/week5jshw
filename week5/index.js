function showData(name, imageSrc, editComments, date) {
  const nameInput = document.createElement("div");
  nameInput.classList.add("username");
  nameInput.textContent = name;

  const image = document.createElement("img");
  image.classList.add("img__size");
  image.src = setAvatar(imageSrc);

  const commentsDiv = document.createElement("div");
  commentsDiv.textContent = editComments;

  const chatDate = document.createElement("div");
  chatDate.classList.add("chat__date");
  chatDate.textContent = date;

  const nameContainer = document.querySelector(".service__chat");
  nameContainer.append(nameInput);
  nameContainer.append(image);
  nameContainer.append(commentsDiv);
  nameContainer.append(chatDate);
}

function newDate() {
  const commentDate = new Date();
  return commentDate;
}

const noName = document.getElementById("show-no");
function correctName(str) {
  if (noName.checked) {
    rightName = "username";
    return rightName;
  } else {
    let rightName = str.trim();
    rightName = rightName[0].toUpperCase() + rightName.slice(1).toLowerCase();
    return rightName;
  }
}

function checkSpam(str) {
  let editComments = str.trim();
  editComments = /(viagra|xxx)/gi;
  return str.replace(editComments, "***");
}

function setAvatar(avatar) {
  const defaultAvatar = [
    "./images/avatar1.jpg",
    "./images/avatar2.jpg",
    "./images/avatar3.jpg",
    "./images/avatar4.jpg",
  ];

  if (avatar === "") {
    return defaultAvatar[Math.floor(Math.random() * defaultAvatar.length)];
  } else {
    return avatar;
  }
}

const button = document.getElementById("button");
button.addEventListener("click", () => {
  const formattedName = correctName(document.getElementById("name").value);
  document.getElementById("name").value = " ";

  const input = document.getElementById("avatar").value;
  document.getElementById("avatar").value = " ";

  const userComments = checkSpam(document.getElementById("comments").value);
  document.getElementById("comments").value = " ";

  const userDate = newDate();

  showData(formattedName, input, userComments, userDate);
});
