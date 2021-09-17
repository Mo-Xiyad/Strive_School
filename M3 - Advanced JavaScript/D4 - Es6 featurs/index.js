const api = () => {
    return fetch("https://striveschool-api.herokuapp.com/books")
}


const renderData = function () {
    api()
        .then((response) => response.json())
        .then((books) => {
            // const { ...book } = books
            filterBooks(books)
            let row = document.querySelector('#books-list')
            row.innerHTML = ''
            books.forEach((book) => {
                let { title, img, price } = book
                let = newCol = document.createElement('div')
                newCol.className = `col-md-4`
                newCol.innerHTML = `<div class="card mb-4 shadow-sm">
                <img src="${img}" class="img-fluid">
                <div class="card-body">
                <p class="card-text">${title}</p>
                <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button id="add-to-cart" onclick="addBook(event)" type="button" class="btn btn-sm btn-outline-secondary"><i class="bi bi-cart-plus"></i></button>
                <button onclick="removeCard(event)" type="button" class="btn btn-sm btn-outline-secondary">
                Hide
                </button>
                </div>
                <small class="text-muted">${price}</small>
                </div>
                </div>
                </div>`

                row.appendChild(newCol)
            })



        })
}


// search book here
// let books = []
// const searchBooksApi = () => {
//     fetch("https://striveschool-api.herokuapp.com/books")
//         .then((response) => response.json())
//         .then((datajson) => {
//             // I am passing this data into another function
//             books = datajson
//             // displayBooks(books)
//             filterBooks(datajson)
//             console.log(books)
//         })
// }

const filterBooks = (query) => {
    // const filteredBooks = [...]
    let newbooks = query.filter()
    // displayBooks(filteredBooks)

    console.log(query)
}


// const displayBooks = (booksToDisplay) => {
//     let row = document.querySelector('#books-list')
//     row.innerHTML = ''
//     booksToDisplay.forEach((book) => {
//         let { title, img, price } = book
//         let newCol = document.createElement('div')

//         newCol.className = `col-md-4`
//         newCol.innerHTML = `<div class="card mb-4 shadow-sm">
//                                   <img src="${img}" class="img-fluid">
//                                   <div class="card-body">
//                                     <p class="card-text">${title}</p>
//                                     <div class="d-flex justify-content-between align-items-center">
//                                       <div class="btn-group">
//                                         <button id="add-to-cart" onclick="addBook(event)" type="button" class="btn btn-sm btn-outline-secondary"><i class="bi bi-cart-plus"></i></button>
//                                         <button onclick="removeCard(event)" type="button" class="btn btn-sm btn-outline-secondary">
//                                           Hide
//                                         </button>
//                                       </div>
//                                       <small class="text-muted">${price}</small>
//                                     </div>
//                                   </div>
//                                 </div>`

//         row.appendChild(newCol)
//     })
// }

// const userSearch = (e) => {
//     const search = e.target.value
//     searchBooksApi(search)
// }

const addBook = (e) => {
    let list = document.querySelector('#selected-book')
    let col = e.target.closest('.col-md-4')
    let title = e.target.closest('.card-body').querySelector('.card-text')
    list.appendChild(title)
    col.remove()
}

const removeCard = (e) => {
    let removeCard = e.target.closest('.col-md-4')
    removeCard.remove()
}

window.onload = () => {
    renderData()
    filterBooks()
}