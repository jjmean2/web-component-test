import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { CustomElementProps } from "./types";

declare global {
  interface HTMLElementTagNameMap {
    "my-greeting-lit": MyGreetingLit;
  }

  namespace JSX {
    interface IntrinsicElements {
      "my-greeting-lit": CustomElementProps<HTMLDivElement> & {
        myname: string;
      };
    }
  }
}

@customElement("my-greeting-lit")
export class MyGreetingLit extends LitElement {
  static styles = css`
    :host {
      color: blue;
    }
  `;

  @property({ type: String })
  accessor myname: string | undefined;

  @property({ attribute: false })
  accessor data = {};

  render() {
    return html`
      <div>
        <h1>${this.myname}님 안녕하세요</h1>
        <button id="button">좋아요. 인사합시다.</button>
      </div>
    `;
  }
}
