export default class Board {
  constructor(container) {
    this.container = container;
  }

  static get markup() {
    return `
    <div class="movie-news__widget">
      <div class="header__widjet">
        <h3 class="movie-news__title">Новости мира кино</h3>
        <button class="movie-news-refresh__btn">Обновить</button>
      </div>
      <ul class="news-container">
            <li class="box-wrap"></li>
            <li class="box-wrap"></li>
            <li class="box-wrap"></li>
            <li class="box-wrap"></li>
      </ul>
    </div>
`;
  }

  bindToDOM() {
    this.container.insertAdjacentHTML("afterbegin", this.constructor.markup);
  }
}
