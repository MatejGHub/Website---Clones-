//This does: Expands & Collapses '.bxs-grid' 
var popUp = document.getElementById('popUp');
let toggleBtn = document.getElementById('toggle-button')

toggleBtn.addEventListener('click', () => {
  popUp.classList.toggle('show')
})

document.addEventListener('click', (event) => {
  let isClickedInside = toggleBtn.contains(event.target)
  let isClickedInsideGrid = popUp.contains(event.target)
  let isToggleButton = event.target === document.getElementById('toggle-button');

  if(!isClickedInside && !isToggleButton && !isClickedInsideGrid) {
    popUp.classList.remove('show')
  }
})

//This does: Expands & Collapses in '#toggle-profile'
let toggleProfile = document.getElementById('toggle-profile');
let popUpProfile = document.getElementById('popUpProfile');

toggleProfile.addEventListener('click', (event) => {
  popUpProfile.classList.toggle('show');
  if (popUp.classList.contains('show')) {
    popUp.classList.remove('show');
  }
  event.stopPropagation();
});

document.addEventListener('click', (event) => {
    let isClickedInsidePopUp = popUpProfile.contains(event.target);

    if (!isClickedInsidePopUp && popUpProfile.classList.contains('show')) {
      popUpProfile.classList.remove('show');
    }
});

//This does: Expands & Collapses '.show-mails' inside '#toggle-profile'
let showMails = document.querySelector('.show-mails')
let content = document.querySelector('.content')
let rsImg = document.querySelectorAll('.right-section-img')
let arrowIcon = document.querySelector('#btn button')

showMails.addEventListener('click', () => {
  content.classList.toggle('active')
  showMails.classList.toggle('active')
  rsImg.forEach(img => {
    img.classList.toggle('active')
  })

  arrowIcon.classList.toggle('rotate')
})

document.querySelector('.bx-x').addEventListener('click', () => {
  popUpProfile.classList.toggle('show')
})

//This does: Expands & Collapses 'bxs-image' icon
let ImageBox = document.querySelector('.search-image')
let showImageBox = document.querySelector('.bxs-image-add')
let imageBoxClose = document.querySelector('.bx-x')

showImageBox.addEventListener('click', () =>{
  ImageBox.classList.toggle('active')
})

window.addEventListener('click', (event) => {
  if(ImageBox.classList.contains('active') && event.target !== showImageBox && !ImageBox.contains(event.target)) {
    ImageBox.classList.remove('active')
  }
})

// This does: Focuses the search-bar && displays writting cursor
let searchIcon = document.querySelector('.bx-search')
let searchBar = document.querySelector('.search-bar input')

searchIcon.addEventListener('click', () => {
  searchBar.focus();
})

//This does: Opens search-bar search history
//Variables needed specified: SearchBar('.search-bar input')
let searchBarHistory = document.querySelector('.search-bar-search-history')
let searchBarToggle = document.querySelector('.search-bar')

searchBar.addEventListener('click', () => {
  searchBarHistory.classList.toggle('active')
  searchBarToggle.classList.toggle('active')
})
// **
//To be added: SearchBarHistory when clicked off the searchbarhistory it hides the searchbarhistory.
// **

//This does: Appends '.search-bar' searches when pressing enter
let ul = document.querySelector('.search-bar-search-history ul')
let icon = document.querySelector('.bx-time')
let input = document.querySelector('.search-bar input')

searchBar.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    let existingItems = ul.querySelectorAll('li').length;
    if (existingItems < 8) {
      let li = document.createElement('li');
      li.innerHTML = icon.outerHTML + input.value;
      ul.appendChild(li);
      input.value = '';
    } 
  }
});
