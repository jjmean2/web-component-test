import { ReactElement } from "react";
import "../common/components/BookingInfo";
import styles from "./WebComponentSample.module.css";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.myTest = function test() {
  console.log("test");
};

console.log("styles", styles);

export function WebComponentSample(): ReactElement {
  return (
    <div>
      <h1>테스트</h1>
      <my-greeting-native class={styles.myGreeting} myname="종완" />
      <my-greeting-lit myname="찬경" />
    </div>
  );
}
