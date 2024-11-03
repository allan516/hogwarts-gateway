const showItems = document.querySelector('.show-items') as HTMLElement;
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
          img.style.paddingTop = '60px';
          img.style.width = '150px';
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

getCharactersApi();
