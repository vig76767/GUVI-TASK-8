
const items = Array.from({ length: 100 }, (_, i) => `id${i + 1}`);
const itemsPerPage = 10;
const itemContainer = document.getElementById('item-container');

let link = document.getElementsByClassName("link");
let currentlink = 1;


function showPage(page) {
  itemContainer.innerHTML = '';
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = items.slice(start, end);

  currentItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.textContent = item;
    itemContainer.appendChild(div);
  });
}


function activelink() {
  for (let l of link) {
    l.classList.remove("active");
  }
  event.target.classList.add("active");
  currentlink = parseInt(event.target.getAttribute("value"));
  showPage(currentlink);
}


function backBtn() {
  if (currentlink > 1) {
    for (let l of link) {
      l.classList.remove("active");
    }
    currentlink--;
    link[currentlink - 1].classList.add("active");
    showPage(currentlink);
  }
}

// Next button
function nextBtn() {
  if (currentlink < 10) {
    for (let l of link) {
      l.classList.remove("active");
    }
    currentlink++;
    link[currentlink - 1].classList.add("active");
    showPage(currentlink);
  }
}

// Show initial page
showPage(1);
