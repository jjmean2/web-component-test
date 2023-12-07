import ReactDOM from "react-dom/client";
import { BookingInfo } from "../../common/components/BookingInfo";
import { CustomElementProps } from "./types";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "booking-info": CustomElementProps<HTMLDivElement>;
    }
  }
}

class BookingInfoWrapper extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    const root = ReactDOM.createRoot(mountPoint);
    root.render(<BookingInfo />);
  }
}
customElements.define("booking-info", BookingInfoWrapper);
