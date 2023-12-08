import r2wc from "@r2wc/react-to-web-component";
import { BookingInfo } from "../../../common/components/BookingInfo";
import { ComponentProps } from "react";

const BookingInfoR2WC = r2wc<
  Pick<ComponentProps<typeof BookingInfo>, "title" | "children">
>(BookingInfo, {
  props: {
    title: "string",
    children: "string",
  },
});

export default BookingInfoR2WC;
