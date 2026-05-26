// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

// Step 1: Main content element
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation: Part 2</h1>';//to get specific...too much data
mainEl.classList.add('flex-ctr');

// Step 2: Top menu nav bar
const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

// Step 3: Build menu links from data
menuLinks.forEach(function (link) {
  const a = document.createElement('a');
  a.setAttribute('href', link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
});

const subMenuEl = document.querySelector('#sub-menu');
if (subMenuEl) {
  subMenuEl.style.color = "blue";
}
subMenuEl.style.top = '0';
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';

// Set the height subMenuEl element to be "100%".
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
// Add the class of flex-around to the subMenuEl element.
// Set the CSS position property of subMenuEl to the value of absolute.
// Set the CSS top property of subMenuEl to the value of 0.

console.log("=================Part 4: Adding Menu Interaction===================")

// In order to add submenu links, we will need to restructure the menuLinks 
// array within index.js. Update the menuLinks array to the following:

const topMenuLinks = topMenuEl.querySelectorAll("a");// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function (e) {
  e.preventDefault()// The first line of code of the event listener function should
//  call the event object's preventDefault() method.
  if (e.target.tagName !== "a") {// The second line of code of the function should immediately return 
// if the element clicked was not an <a> element.
    return;
    console.log("a".target.textContent)// Log the content of the <a> to verify the handler is working.
  }
})

topMenuEl.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.tagName !== 'A') return;//This line cancels that default 
  //behavior so clicking a menu link doesn't cause a page reload or navigation.
  console.log(e.target.textContent);

  topMenuLinks.forEach(link => link.classList.remove('active'));
  e.target.classList.add('active');
});   

// Progress Check - Ensure that clicking ABOUT, CATALOG, etc. logs about, catalog, etc. when 
// a link is clicked. Clicking anywhere other than on a link should do nothing.





