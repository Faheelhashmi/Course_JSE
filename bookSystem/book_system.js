
let books=[];
function addBook() {
	const bookName = document.getElementById('bookName').value;
	const authorName = document.getElementById('authorName').value;
	const bookDescription = document.getElementById('bookDescription').value;
	const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
	if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
		const book = {
				name: bookName,
				authorName: authorName,
				bookDescription: bookDescription,
				pagesNumber: pagesNumber
				};
		books.push(book);
		showbooks();
		clearInputs();
	} else {
		alert('Please fill in all fields correctly.');
	}
}

function showbooks() {
	const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
							<p><strong>Book Name: </strong>${book.name}</p>
							<p><strong>Author Name:</strong> ${book.authorName}</p>
							<p><strong>Book Description:</strong> ${book.bookDescription}</p>
							<p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>`
						);
	document.getElementById('books').innerHTML = booksDiv.join('');
}

function clearInputs() {
	document.getElementById('bookName').value = '';
	document.getElementById('authorName').value = '';
	document.getElementById('bookDescription').value = '';
	document.getElementById('pagesNumber').value = '';
}
Copied!

//<!DOCTYPE html>
//<html lang="en">
//<head>
//    <meta charset="UTF-8">
//    <title>Book Management System</title>
//</head>
//<body>
//    <h1>Book Management System</h1>
//    <label for="bookName">Book Name:</label><br>
//    <input type="text" id="bookName"><br><br>
//    <label for="authorName">Author Name:</label><br>
//    <textarea id="authorName" rows="4"></textarea><br><br>
//    <label for="bookDescription">Book Description</label><br>
//    <textarea id="bookDescription" rows="4"></textarea><br><br>
 //   <label for="pagesNumber">No. of Pages Time</label><br>
  //  <input type="number" id="pagesNumber"><br><br>
  //  <button onclick="addBook()">Add Book</button>
  //  <h2>books</h2>
  //  <div id="books">
  //      <!-- books will be displayed here -->
  //  </div>
  //  <script src="./book_system.js"></script>
//</body>
//</html>   
