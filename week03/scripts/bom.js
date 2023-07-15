const list = document.querySelector('.list');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

console.log("current saved list is [" + chaptersArray + "]");

button.addEventListener('click', () => {
    if (input.value != '') {  // check if the input is empty, if not, then
        displayList(input.value); // call displayList with the input.value argument,
        chaptersArray.push(input.value);  // push the input.value into the chaptersArray,
        console.log("added " + input.value + " to list"); //show information in console that your item is being registered in the list
        setChapterList(); // update the localStorage with the new array by calling a function named setChapterList,
        input.value = ''; // set the input.value to nothing, and
        input.focus(); // set the focus back to the input.
    } else {
      console.log("input must not be empty")
    }
});
  
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    console.log("created li element for " + item)
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        console.log("deleted " + item + " from list");
        input.focus(); // set the focus back to the input
    });
    
}

function setChapterList() {
  console.log("current saved list is [" + chaptersArray + "]");
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}