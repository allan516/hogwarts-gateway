export class DomElement {
  span = document.createElement('span');
  name = document.createElement('p');
  img = document.createElement('img');

  create(element: Record<string, null>) {
    if (element.fullName !== null && element.image !== null) {
      this.name.innerHTML = element.fullName;
      this.name.style.padding = '15px';
      this.img.src = element.image;
      this.img.style.borderRadius = '5px';
      this.img.style.border = '1px solid white';
      this.img.style.width = '150px';
      this.img.classList.add('img-hover');
      this.span.style.padding = '10px';
      this.span.appendChild(this.img);
      this.span.appendChild(this.name);
      return this.span;
    }
  }
}

export const dom = new DomElement();
