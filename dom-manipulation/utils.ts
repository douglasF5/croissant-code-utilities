//GETTING ELEMENTS
export function get(
  query: string,
  getAll: boolean = false
): HTMLElement | NodeList {
  if (getAll) {
    const elementCollection = document.querySelectorAll(query) as NodeList;
    return elementCollection;
  } else {
    const element = document.querySelector(query) as HTMLElement;
    return element;
  }
}

//APPENDING ELEMENTS
export function append(
  parent: HTMLElement,
  children: HTMLElement[],
  cleanup = false
): void {
  if (cleanup) {
    parent.innerHTML = '';
  }

  children.forEach((el) => {
    parent.append(el);
  });
}

//CREATING ELEMENTS
export function create(str: string): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = str;
  const newElement = wrapper.firstElementChild as HTMLElement;

  return newElement;
}
