/*
1)Bookmark
  *title
  *url
2)User
3)Folder
  *
Bookmark yarat
bm sil
bm edit
bm paylas
bm listele

Add Folders for your bookmarks
Add bookmarks, in a preferred folder
show-hide folder/bookmark list
edit bookmark's -> title,url
changing a folder of a bookmark is another process.
========
What is shown to the users? 
text box for folder name, add folder button
text box for bookmark title and url, add bookmark button
List bookmarks by folders search box


*/

// Bookmark constructor
function Bookmark(title, url) {
  this.title = title;
  this.url = url;
  this.edit = function(newTitle, url) {
    this.title = newTitle;
    this.url = url;
  };
}

// Bookmark Folder constructor
function Folder(id) {
  this.bookmarks = [];
  this.id = id;
  this.addBookmark = function(bookmark) {
    this.bookmarks.push(bookmark);
  };
}

// Bookmark folder array
let listOfFolders = ["kontrol1", "kontrol2"];

// Handle methods
function handleAddFolder() {
  const folderName = document.querySelector("#folderName").value;
  const folder = new Folder(folderName);
  listOfFolders.push(folder.id);
  editFolderList();
}

function editFolderList() {
  const folderList = document.querySelector("#folderList");
  const folderNamesList = [];
  for (let i = 0; i < listOfFolders.length; i++) {
    const folder = `<option>${listOfFolders[i]}</option>`;
    folderNamesList.push(folder);
  }
  folderList.innerHTML = folderNamesList;
}

// DOM elements and event listeners
const addFolderButton = document.querySelector("#addFolder");
addFolderButton.addEventListener("click", handleAddFolder);
