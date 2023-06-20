let news = [];
let total_pages = 0;
let page = 1;
const getLatestNews = async () => {
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10`
  );
  let header = new Headers({
    "x-api-key": "db_8lyqni3nGFj-VfybLWZ3H3mcoz8iMfl_Hzm32S0E",
  });
  let response = await fetch(url, { headers: header });
  let data = await response.json();
  total_pages = data.total_pages;
  page = data.page;
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
const pagination = () => {
  let paginationHTML = ``;
  // total_page
  // page
  // page = 1;
  // page_group
  let pageGroup = Math.ceil(page / 5);
  //last
  let last = pageGroup * 5;
  //first
  let first = last - 4;
  //first ~ last page print
  for (let i = first; i <= last; i++) {
    paginationHTML += `<li class="page-item"><a class="page-link">${i}</a></li>`;
  }
  document.querySelector(".pagination").innerHTML = paginationHTML;
};
pagination();
