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

function Bookmark(title, url) {
  this.title = title;
  this.url = url;
  this.edit = function(newTitle, url) {
    this.title = newTitle;
    this.url = url;
  };
}

function Folder(id) {
  this.bookmarks = [];
  this.id = id;
  this.addBookmark = function(bookmark) {
    this.bookmarks.push(bookmark);
  };
  console.log("New folder has been created!");
}

let listOfFolders = [];

function handleAddFolder(){
  const folderName = document.querySelector("#folderName").value;
  const folder = new Folder(folderName);
  listOfFolders.push(folder);
  console.log(listOfFolders);
}

function showFolder() {
  folder.classList.replace("folder--hidden", "folder");
}

function hideFolder() {
  folder.classList.replace("folder", "folder--hidden");
}

// Main method

var rottenTomato = new Bookmark("IMDB", "www.imdb.com");
rottenTomato.edit("rotten", "rottentomatoes.com");
var bestArtist = new Bookmark("Gunther", "www.gunther.com");

var efe = new Folder(1);
efe.addBookmark(rottenTomato);
efe.addBookmark(bestArtist);
console.log("Listing the bookmarks titles from folder '" + efe.id + "'");
console.log(efe.bookmarks[0].title);
console.log(efe.bookmarks[1].title);

const addFolderButton = document.querySelector("#addFolder");
addFolderButton.addEventListener("click", handleAddFolder);
