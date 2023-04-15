export default class TypePridcates {
  isHTMLElement(node: HTMLElement | null): node is HTMLElement {
    return node !== null;
  }

  isHTMLDivElement(node: HTMLDivElement | null): node is HTMLDivElement {
    return node !== null;
  }

  isHTMLButtonElement(
    node: HTMLButtonElement | null
  ): node is HTMLButtonElement {
    return node !== null;
  }
}
