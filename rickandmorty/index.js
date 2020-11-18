const getData = async () => {
  const response = await axios.get(
    'https://rickandmortyapi.com/api/character/?name=morty&species=humanoid'
  );
  console.log(response);
  renderCharacters(response.data.results);
};

renderCharacters = characters => {
  let charactersDiv = document.querySelector('.characters');
  characters.forEach(element => {
    let div = document.createElement('div');
    div.className = 'character';
    let h1 = document.createElement('h1');
    h1.innerHTML = element.name;
    div.appendChild(h1);
    charactersDiv.appendChild(div);
  });
};

getData();
