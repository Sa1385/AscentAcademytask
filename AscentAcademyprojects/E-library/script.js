// Get the search input and book list
const searchInput = document.getElementById("searchInput");
const bookList = document.getElementById("bookList");

// Add an event listener to the search input
searchInput.addEventListener("input", function(event) {
  // Get the search query
  const query = event.target.value.toLowerCase();

  // Filter the book list based on the search query
  const filteredBooks = Array.from(bookList.children).filter(function(book) {
    const title = book.querySelector(".book-title").textContent.toLowerCase();
    const author = book.querySelector(".book-author").textContent.toLowerCase();
    return title.includes(query) || author.includes(query);
  });

  // Hide or show the filtered books based on the search query
  Array.from(bookList.children).forEach(function(book) {
    if (filteredBooks.includes(book)) {
      book.style.display = "";
    } else {
      book.style.display = "none";
    }
  });
});
// Get the book and page elements
const book = document.getElementById("book");
const pages = Array.from(book.querySelectorAll(".page"));

// Set the current page to the first page
let currentPage = 0;

// Add event listeners to the left and right buttons
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");

leftButton.addEventListener("click", function() {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
});

rightButton.addEventListener("click", function() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePage();
  }
});

// Function to update the page display
function updatePage() {
  pages.forEach(function(page, index) {
    if (index === currentPage) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  });
}

// Call the updatePage function to display the first page
updatePage();