// const API_KEY = "qSmVo7FB14CSSvPnaaED6WQ7icjQsXOi";

function handleSubmit(e) {
  let text = document.getElementById("searchText").value;
  let imgElem = document.getElementById("imgElement");

  let query = `https://api.giphy.com/v1/gifs/search?api_key=qSmVo7FB14CSSvPnaaED6WQ7icjQsXOi&q=${text}&limit=1&offset=0&rating=pg&lang=en`;

  // do a search
  fetch(query)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let url = data.data[0].images.original.url;
      console.log(url);

      imgElem.src = url;
    });
}

document.getElementById("searchButton").addEventListener("click", handleSubmit);
