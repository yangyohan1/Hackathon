console.log('this is a popup!');

function getQuote() {
    return fetch('https://type.fit/api/quotes').then(response => {
    return response.json()
  }).then(jsonResponse => {
    if (!jsonResponse.length) {
      return []
    }
    return jsonResponse[Math.floor(Math.random() * jsonResponse.length)]
  })
  }
  getQuote().then(quote => {
    const famousQ = document.createElement('div')
    quoteHere.appendChild(famousQ)
    const text = quote.text;
    const author = quote.author;
    // alert("quote "+ text + ", " + author)
    //document.querySelector('header1').appendChild(famousQ);
    const display = document.getElementById('header1')
    
    console.log(display)
    display.innerHTML = (`"${text}" -${author}`)
})


  
