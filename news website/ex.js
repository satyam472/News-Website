console.log('this practise.js');

let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=098e55e07bbb4a37a6af32bfcd28d4a0', true);

xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = '';
        let news;

        articles.forEach(function (element, index) {
            // console.log(element, index)
            news =`<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${element['urlToImage']}" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">${element['title']} <a href="${element['url']}" target="_blank" >Read more here</a> </p>
            </div>
          </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML=newsHtml;
        
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send();

// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=098e55e07bbb4a37a6af32bfcd28d4a0






//                <div class="card-header" id="heading${index}">
//                    <h2 class="mb-0">
//                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
//                        aria-expanded="false" aria-controls="collapse${index}">
//                       <b>Breaking News ${index + 1}:</b> ${element["title"]}
//                    </button>
//                    </h2>
//                </div>

//                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
//                    <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
//                </div>
//            </div>`