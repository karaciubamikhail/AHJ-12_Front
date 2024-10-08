export default class Modal {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
        <div class="modal modal-active">   
		      <div class="modal-content">
			      <h3 class="description__title">Ошибка соединения!</h3>
            <p class="text__error">Не удалось загрузить новости. проверьте подключение к сети и перезагрузите страницу.</p>
            <div class="button__block">
              <button class="modal-close__btn">Ok!</button>
						</div>
				  </div>   
        </div>
`;
  }

  redrawModalForm() {
    this.parentEl.insertAdjacentHTML("afterbegin", this.constructor.markup);
    this.modalWrapperEl.classList.add("modal-active");
    this.modalButtonEl.addEventListener("click", (e) => {
      e.preventDefault();
      this.closeModalForm();
    });
  }

  get modalWrapperEl() {
    return this.parentEl.querySelector(".modal");
  }

  get modalButtonEl() {
    return this.parentEl.querySelector(".modal-close__btn");
  }

  closeModalForm() {
    this.modalWrapperEl.classList.remove("modal-active");
    this.parentEl.querySelector(".modal").remove();
  }
}
