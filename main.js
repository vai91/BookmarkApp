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
let listOfFolders = [];

// Handle methods
function handleAddFolder() {
  const folderName = document.querySelector("#folderName").value;
  if (folderName === "" || folderName === " ") {
    alert("Folder name can not be empty, enter something.");
  } else if (checkExistFolderNames(listOfFolders, folderName)) {
    alert(`${folderName} exists, enter something else.`);
  } else {
    const folder = new Folder(folderName);
    listOfFolders.push(folder);
    editFolderList();
  }
}

function checkExistFolderNames(listOfFolders, folderName) {
  for (let i = 0; i < listOfFolders.length; i++) {
    if (folderName === listOfFolders[i].id) {
      console.log("Folder name exists.");
      return true;
    } else {
      console.log("Unique");
    }
  }
}

function editFolderList() {
  const folderNamesList = [];
  for (let i = 0; i < listOfFolders.length; i++) {
    const folder = `<option>${listOfFolders[i].id}</option>`;
    folderNamesList.push(folder);
  }

  // Dropdown List
  const folderList = document.querySelectorAll(
    "#folderList-show, #folderList-add"
  );
  for (let i = 0; i < folderList.length; i++) {
    folderList[i].innerHTML = folderNamesList;
  }
}

function handleAddBookmark() {
  // Create bookmark
  const bookmarkTitle = document.querySelector("#title").value;
  const bookmarkUrl = document.querySelector("#url").value;
  const bookmark = new Bookmark(bookmarkTitle, bookmarkUrl);

  // Add bookmark to folder
  const folder = document.querySelector("#folderList-add").value;
  const [bookmarkFolder] = listOfFolders.filter(function (value){ return value.id === folder});
  bookmarkFolder.addBookmark(bookmark);
}

function handleShowBookmark() {
  const folderName = document.querySelector("#folderList-show").value;
  const folder = (function() {
    for (let i = 0; i < listOfFolders.length; i++) {
      if(listOfFolders[i].id === folderName){
        return listOfFolders[i];
      }
    }
     console.log("we fucked up, sorry.");
  })();
  const folderNameShow = document.querySelector("#folderNameShow");
  const folderTitle = `${folder.id}`;
  folderNameShow.innerText = folderTitle;
  
//TO DO -> abi arrayden dolayi arada virgul cikiyor, cozmemiz lazim.
  const bookmarksList = document.querySelector("#bookmarksList");
  let bookmarksListArray = [];
  for (let i = 0; i < folder.bookmarks.length; i++) {
    const { title, url } = folder.bookmarks[i];
    const bookmarkLi = `<a href="${url}"><li>${title}</li></a>`;
    bookmarksListArray.push(bookmarkLi);
  }
  bookmarksList.innerHTML = bookmarksListArray;
}

// DOM elements and event listeners
const addFolderButton = document.querySelector("#addFolder");
addFolderButton.addEventListener("click", handleAddFolder);

const addBookmarkButton = document.querySelector("#addBookmark");
addBookmarkButton.addEventListener("click", handleAddBookmark);

const showBookmarkButton = document.querySelector("#showBookmark");
showBookmarkButton.addEventListener("click", handleShowBookmark);




