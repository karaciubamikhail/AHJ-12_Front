import bindToDOM from "./Skeleton";
import Post from "./Post";
import Modal from "./Modal";

export default class Controller {
  constructor(board) {
    this.board = board;
    this.newsId = new Set();
    this.url = "https://server-common-ahj.herokuapp.com/news/latest";
    // "http://localhost:8080/news/latest";
  }

  init() {
    this.board.bindToDOM();
    this.autocomplete();
    this.ajaxRequest();
    this.btn = document.querySelector(".movie-news-refresh__btn");
    this.btn.addEventListener("click", this.onClickRefresh.bind(this));
  }

  autocomplete() {
    [...document.querySelectorAll(".box-wrap")].forEach((elem) => {
      bindToDOM(elem);
    });
  }

  async ajaxRequest() {
    try {
      const request = await fetch(this.url);
      const response = await request.json();

      this.getValue(response.data);
    } catch (err) {
      console.log("Error: ", err);
      this.showErrorMessage();
    }
  }

  getValue(obj) {
    if (!obj.length) {
      return;
    }

    [...document.querySelectorAll(".box-in")].forEach((elem) => elem.remove());
    obj.forEach((elem) => {
      const message = new Post(elem);
      message.init();
    });
  }

  showErrorMessage() {
    this.modal = new Modal(document.querySelector("#container"));
    this.modal.redrawModalForm();
  }

  onClickRefresh(e) {
    e.preventDefault();
    if (document.querySelector(".news__card")) {
      [...document.querySelectorAll(".news__card")].forEach((elem) =>
        elem.remove()
      );
      this.autocomplete();
    }

    this.ajaxRequest();
  }
}
