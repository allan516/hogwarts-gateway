const showItems = document.querySelector('.show-items') as HTMLElement;
const showItem2 = document.querySelector('.show-item2') as HTMLElement;
const showItem3 = document.querySelector('.show-item3') as HTMLElement;
const getBook = document.querySelector('.books') as HTMLElement;

async function getCharactersApi() {
  const url: string = 'https://potterapi-fedeperin.vercel.app/pt/characters';
  const response = await fetch(url);
  try {
    if (response.ok) {
      const characters = await response.json();
      characters.forEach((element: Record<string, null>) => {
        console.log(element);
        if (element.index !== null && element.index <= 7) {
          const span = document.createElement('span');
          const name = document.createElement('p');
          const img = document.createElement('img');
          if (element.fullName !== null && element.image !== null) {
            name.innerHTML = element.fullName;
            name.style.padding = '15px';
            img.src = element.image;
            img.style.borderRadius = '5px';
            img.style.border = '1px solid white';
            img.style.width = '150px';
            img.classList.add('img-hover');
            span.style.padding = '10px';
            span.appendChild(img);
            span.appendChild(name);
          }
          showItems.appendChild(span);
        } else if (element.index !== null && element.index <= 15) {
          const span = document.createElement('span');
          const name = document.createElement('p');
          const img = document.createElement('img');
          if (element.fullName !== null && element.image !== null) {
            name.innerHTML = element.fullName;
            name.style.padding = '15px';
            img.src = element.image;
            img.style.borderRadius = '5px';
            img.style.border = '1px solid white';
            img.style.width = '150px';
            img.classList.add('img-hover');
            span.style.padding = '10px';
            span.appendChild(img);
            span.appendChild(name);
          }
          showItem2.appendChild(span);
        } else if (element.index !== null && element.index > 15) {
          const span = document.createElement('span');
          const name = document.createElement('p');
          const img = document.createElement('img');
          if (element.fullName !== null && element.image !== null) {
            name.innerHTML = element.fullName;
            name.style.padding = '15px';
            img.src = element.image;
            img.style.borderRadius = '5px';
            img.style.border = '1px solid white';
            img.style.width = '150px';
            img.classList.add('img-hover');
            span.style.padding = '10px';
            span.appendChild(img);
            span.appendChild(name);
          }
          showItem3.appendChild(span);
        }
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Response status: ${response.status}`);
  }
}

async function getBooksApi() {
  const url: string = 'https://potterapi-fedeperin.vercel.app/pt/books';
  const response = await fetch(url);
  try {
    if (response.ok) {
      const books = await response.json();
      books.forEach((element: Record<string, null>) => {
        const name = document.createElement('p') as HTMLParagraphElement;
        const img = document.createElement('img') as HTMLImageElement;
        const description = document.createElement('p') as HTMLParagraphElement;
        const divDescription = document.createElement('div') as HTMLDivElement;
        const divImg = document.createElement('div') as HTMLDivElement;
        const div = document.createElement('div') as HTMLDivElement;
        if (
          element.title !== null &&
          element.cover !== null &&
          element.description !== null
        ) {
          name.innerHTML = element.title;
          description.innerHTML = element.description;
          img.src = element.cover;
          img.style.height = '250px';
          img.style.paddingTop = '60px';
          divImg.appendChild(img);
          divDescription.appendChild(name);
          divDescription.appendChild(description);
          div.appendChild(divImg);
          div.appendChild(divDescription);
          getBook.appendChild(div);
        }
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Response status: ${response.status}`);
  }
}

getCharactersApi();
getBooksApi();
