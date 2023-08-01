class Modal {
  constructor() {
    this.modal = document.querySelector("#modal_background");
    this.modalWindow = document.querySelector("#modal_window");
    this.modalTriggers = Array.from(document.querySelectorAll("#modal_btn"));
    this.modalContent = Array.from(document.querySelectorAll("#modal_content"));
    this.closeButton = document.querySelector("#close_window");
    this.activeIndex = null;

    this.init();
  }

  init() {
    this.modalTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const index = trigger.dataset.index;
        this.openModal(index);
      });
    });

    this.closeButton.addEventListener("click", () => {
      this.closeModal();
    });

    window.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.closeModal();
      }
    });
  }

  openModal(index) {
    this.activeIndex = index;
    this.modal.classList.remove("invisible");
    for (let i = 0; i < this.modalContent.length; i++) {
      const element = this.modalContent[i];
      if (element.dataset.index == this.activeIndex) {
        element.classList.remove('hidden');
      }
    }
  }

  closeModal() {
    this.modal.classList.add("invisible");
        for (let i = 0; i < this.modalContent.length; i++) {
          const element = this.modalContent[i];
          if (element.dataset.index == this.activeIndex) {
            element.classList.add("hidden");
          }
        }
    this.activeIndex = null;
  }
}

new Modal();
