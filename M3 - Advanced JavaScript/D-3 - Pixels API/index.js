

const searchImg = () => {
  let query = document.querySelector('input[type="search"]').value

  api(query)
    .then((response) => {
      return response.json()
    })
    .then((body) => {
      let row = document.querySelector('#card-row')
      row.innerHTML = ''
      body.photos.forEach((photo) => {
        let img = photo
        let col = document.createElement('div')
        col.className = 'col-md-4'

        col.innerHTML = `<div class="card mb-4 shadow-sm">
                                  <img src="${img.src.medium}" alt="">
                                  <div class="card-body">
                                    <p class="card-text">
                                      This is a wider card with supporting text below as a natural
                                      lead-in to additional content. This content is a little bit
                                      longer.
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                      <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">
                                          View
                                        </button>
                                        <button onclick="hide(this.closest('.col-md-4'))" type="button" class="btn btn-sm btn-outline-secondary">
                                          Hide
                                        </button>
                                      </div>
                                      <small class="text-muted">9 mins</small>
                                    </div>
                                  </div>
                                </div>`

        row.appendChild(col)
      })
    })
    .catch((err) => console.log(rr))
}

const hide = (e) => {
  e.remove()
  // there is a "this" key work that is getting the event 
  // (this) key onto the function is targetinging that specific element
  // ".closest"
}

const api = (search) => {
  // return fetch('https://api.pexels.com/v1/search?query=' + search, {
  return fetch('https://api.pexels.com/v1/search?query=' + search, {
    "method": "GET",
    "headers": {
      "Authorization": "bearer 563492ad6f91700001000001fe7f1bfa604c4313af35b3f3b8ea9b23"
    }
  })
}



/* 
WHATS HEPPANING HERE IS 
1 - secondryImages()  get called first and withing there is a claaback function in the event listner
2 - And the event listner is refering to the    apiSearch()   withing that function  .THEN gets called with 
3-  renderData() and this is the function that gives the cards in the DOM

*/


// This api is returning the full json Data
const apiSearch = (data) => {
  return fetch('https://api.pexels.com/v1/search?query=' + data, {
    "method": "GET",
    "headers": {
      "Authorization": "bearer 563492ad6f91700001000001fe7f1bfa604c4313af35b3f3b8ea9b23"
    }
  })
    .then((response) => response.json())
    .then((datajson) => {
      // I am passing this data into another function
      renderData(datajson)
    })
}



// this is the secondry images
const renderData = (data) => {
  let row = document.querySelector('#card-row')
  row.innerHTML = ''
  data.photos.forEach((photo) => {
    console.log(photo.src)
    let img = photo
    let col = document.createElement('div')
    col.className = 'col-md-4'

    col.innerHTML = `<div class="card mb-4 shadow-sm">
                                  <img src="${img.src.medium}" alt="">
                                  <div class="card-body">
                                    <p class="card-text">
                                      This is a wider card with supporting text below as a natural
                                      lead-in to additional content. This content is a little bit
                                      longer.
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                      <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">
                                          View
                                        </button>
                                        <button onclick="hide(this.closest('.col-md-4'))" type="button" class="btn btn-sm btn-outline-secondary">
                                          Hide
                                        </button>
                                      </div>
                                      <small class="text-muted">9 mins</small>
                                    </div>
                                  </div>
                                </div>`

    row.appendChild(col)
  })
}

const secondryImages = () => {
  const btn = document.querySelector('#secondary-img')
  btn.addEventListener('click', () => {
    apiSearch('surf')
  })
}



window.onload = function () {
  secondryImages()
}