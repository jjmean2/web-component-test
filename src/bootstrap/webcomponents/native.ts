import { CustomElementProps } from "./types";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "my-greeting-native": CustomElementProps<HTMLDivElement> & {
        myname: string | null;
      };
    }
  }
}

class MyGreetingNative extends HTMLElement {
  get myname(): string | null {
    return this.getAttribute("myname");
  }
  set myname(value: string | null) {
    if (value === null) {
      this.removeAttribute("myname");
    } else {
      this.setAttribute("myname", value);
    }
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        :host {
          color: blue;
        }
        button {
          color: var(--button-color);
        }
      </style>
      <div>
        <h1>${this.myname}님 안녕하세요</h1>
        <button part="button" id="button">인사합시다.</button>
      </div>
    `;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
    const button = this.shadowRoot?.querySelector("#button");
    button?.addEventListener("click", () => {
      console.log("This is", this.myname);
    });
  }

  disconnectedCallback() {}
}

customElements.define("my-greeting-native", MyGreetingNative);
