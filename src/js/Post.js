export default class Post {
  constructor(data) {
    this.data = data;
    this.created = new Date(data.received).toLocaleString();
  }

  init() {
    const parent = [...document.querySelectorAll(".box-wrap")].find(
      (elem) => elem.firstElementChild === null
    );
    if (!parent) {
      return;
    }
    this.bindToDOM(parent);
  }

  static template(data, created) {
    return `
      <div class="news__card" data-id="${data.id}" data-time="${created}" data-author="${data.author}">
        <div class="news__wrapper">
          <div class="news__header">
            <div class="news__picture">
              <img class="news-img" alt="img" src="${data.image}">
            </div>
            <div class="news-info">
              <h4 class="news__title">${data.subject}</h4>
              <span class="datetime">${created}</span>
            </div>
          </div>
          <div class="news__content">
            <p class="news__text">${data.body}</p>
          </div>
        </div>
      </div>
      `;
  }

  bindToDOM(parent) {
    const post = this.addPost(this.data, this.created);

    parent.insertAdjacentHTML("beforeend", post);
  }

  addPost() {
    if (this.data) {
      this.getFormattedText(this.data);
      const result = this.constructor.template(this.data, this.created);

      return result;
    }
    return false;
  }

  getFormattedText(data) {
    const text = data.body.split("");
    if (text.length <= 170) {
      return;
    }
    const result = text.splice(0, 180);
    data.body = result.toString().replaceAll(",", "").concat("...");
  }
}
