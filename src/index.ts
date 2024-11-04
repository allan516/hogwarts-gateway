const showItems = document.querySelector('.show-items') as HTMLElement;
const getBook = document.querySelector('.books') as HTMLElement;

async function getCharactersApi() {
  const url: string = 'https://potterapi-fedeperin.vercel.app/pt/characters';
  const response = await fetch(url);
  try {
    if (response.ok) {
      const characters = await response.json();
      characters.forEach((element: Record<string, null>) => {
        const span = document.createElement('span');
        const name = document.createElement('p');
        const img = document.createElement('img');
        if (element.fullName !== null && element.image !== null) {
          name.innerHTML = element.fullName;
          img.src = element.image;
          img.style.clipPath = 'circle()';
          img.style.paddingTop = '40px';
          img.style.width = '100px';
          span.classList.add('.spanShowlist');
          span.appendChild(img);
          span.appendChild(name);
        }
        showItems.appendChild(span);
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
        console.log(element);
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
