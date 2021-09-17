
// const albumApi = () => {
//     return fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
// }

// let getfirst10 = []
// const displayAlbums = () => {
//     albumApi()
//         .then((response) => response.json())
//         .then((albums) => {
//             let sectionOne = document.querySelector('#good-morning')
//             // let getfirst10 = [] //getting the first 10 albums

//             for (let i = 0; i < 12; i++) {
//                 let data = albums.data[i]
//                 getfirst10.push(data)
//             }
//             // displayArtist()

//             getfirst10.forEach((data) => {
//                 const { title, id } = data.album
//                 const img = data.album.cover_medium
//                 let card = document.createElement('div')
//                 // console.log(data.album.id)
//                 card.innerHTML = `<div class="card card-morning-2 d-flex m-0 mb-2 mr-auto first-div-card-styles">
//                         <div class="d-flex align-items-center">
//                             <div class="d-flex align-items-center justify-content-center">
//                                 <a href="./Album.html?id=${id}">
//                                     <img class="" src="${img}" height="78px" alt="Card image cap"
//                                         style="width: auto; background-size: contain;">
//                                 </a>
//                             </div>
//                             <a href="./Album.html?id=${id}">
//                                 <p class="m-0 pl-3 font-weight-bold">${title}</p>
//                             </a>
//                         </div>
//                     </div>`

//                 // card.onclick = () => {
//                 //     window.location.assign("./Album.html?Id=" + id)
//                 // }
//                 sectionOne.appendChild(card)
//             })

//         })
// }

// displayAlbums()

// // artist page functions below
