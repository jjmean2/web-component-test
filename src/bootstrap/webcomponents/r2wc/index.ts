import { CustomElementProps } from "../types";
import BookingInfoR2WC from "./BookingInfoR2Wc";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "booking-info-r2wc": CustomElementProps<HTMLDivElement> & {
        title?: string;
      };
    }
  }
}
customElements.define("booking-info-r2wc", BookingInfoR2WC);
