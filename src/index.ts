const showItems = document.querySelector('.show-items') as HTMLElement;
async function getCharactersApi() {
  const url: string = 'https://potterapi-fedeperin.vercel.app/pt/characters';
  const response = await fetch(url);
  try {
    if (response.ok) {
      const characters = await response.json();
      characters.forEach((element: Record<string, null>) => {
        const name = document.createElement('p');
        const img = document.createElement('img');
        if (element.fullName !== null && element.image !== null) {
          name.innerHTML = element.fullName;
          img.src = element.image;
        }
        showItems.appendChild(img);
        showItems.appendChild(name);
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Response status: ${response.status}`);
  }
}

getCharactersApi();
