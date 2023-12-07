import r2wc from "@r2wc/react-to-web-component";
import { BookingInfo } from "../../common/components/BookingInfo";
import { CustomElementProps } from "./types";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "booking-info-r2wc": CustomElementProps<HTMLDivElement>;
    }
  }
}
const BookingInfoR2WC = r2wc(BookingInfo);
customElements.define("booking-info-r2wc", BookingInfoR2WC);
