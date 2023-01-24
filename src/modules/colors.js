import { generateHexColor } from "../utils";

class Color {
  #hsl;
  #element;
  #textColor;
  constructor([h, s, l]) {
    this.#hsl = [h, s, l];
    this.hex = generateHexColor(this.#hsl);
    this.#generateElement();
  }

  #generateElement() {
    if (this.#hsl[2] > 50) {
      this.#textColor = "#000000";
    } else {
      this.#textColor = "#ffffff";
    }
    this.#element = `<div class="color" data-color="#${
      this.hex
    }" style="background-color: #${this.hex}">
        <p style="color: #${this.#textColor}">#${this.hex}</p>
    </div>`;
  }

  display(element) {
    element.insertAdjacentHTML("beforeend", this.#element);
  }
}

export default Color;
