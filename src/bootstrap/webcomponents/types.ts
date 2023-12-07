export type CustomElementProps<T extends HTMLElement> = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<T>, HTMLElement>,
  "className" | "htmlFor"
> & {
  class?: string;
  for?: string;
};
