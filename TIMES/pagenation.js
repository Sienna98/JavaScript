const pagination = () => {
  let paginationHTML = ``;
  // total_page
  let total_pages = 0;
  // page
  let page = 1;
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
