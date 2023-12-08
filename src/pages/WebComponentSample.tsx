import { ReactElement, useEffect, useRef } from "react";
import "../common/components/BookingInfo";
import styles from "./WebComponentSample.module.css";
import { MyGreetingLit } from "../bootstrap/webcomponents/lit";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.myTest = function test() {
  console.log("test");
};

console.log("styles", styles);

export function WebComponentSample(): ReactElement {
  const rootRef = useRef<HTMLDivElement>(null);
  const litRef = useRef<MyGreetingLit>(null);

  useEffect(() => {
    const { current } = litRef;
    console.log(current, current instanceof MyGreetingLit);

    const handler = function (event: Event): void {
      const composedPath = [...event.composedPath()];
      console.log(
        "outside button clicked",
        event.composed,
        event.target,
        composedPath,
        event
      );
    };

    current?.addEventListener("button-clicked", handler);

    return () => {
      current?.removeEventListener("button-clicked", handler);
    };
  }, []);

  return (
    <div ref={rootRef}>
      <h1>테스트</h1>
      <booking-info-r2wc title="유유jk">
        <p>긋긋</p>
      </booking-info-r2wc>
      <my-greeting-native
        class={styles.myGreeting}
        tabIndex={30}
        onClick={() => {
          console.log("TEST");
        }}
      >
        <p>하이하이</p>
      </my-greeting-native>
      <my-greeting-lit ref={litRef} myname="찬경">
        <p>하이하이</p>
      </my-greeting-lit>
    </div>
  );
}
