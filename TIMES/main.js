let news = [];
const getLatestNews = async () => {
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10`
  );
  let header = new Headers({
    "x-api-key": "7l8uO4v6TEvToRlMN4XDzDy9Yuk1IV98K_lOLoSQkW0",
  });
  let response = await fetch(url, { headers: header });
  let data = await response.json();
  news = data.articles;

  render();
};

const render = () => {
  let newsHTML = "";

  newsHTML = news
    .map((item) => {
      return `<div class="row news">
    <div class="col-lg-4">
      <img
        class="news_img_size"
        src="${item.media}"
        alt="BTS"
      />
    </div>
    <div class="col-lg-8">
      <h2>${item.title}</h2>
      <p>${item.summary}</p>
      <div>${item.published_date}</div>
    </div>
  </div>`;
    })
    .join("");

  document.getElementById("newsBoard").innerHTML = newsHTML;
};
getLatestNews();
