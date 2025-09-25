function Pokecard({ id, name, type, base_experience }) {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="pokecard">
      <h3>{name}</h3>
      <img src={imgSrc} alt={name} />
      <p>Type: {type}</p>
      <p>Base Experience: {base_experience}</p>
      {/*  base exp not needed, but still may be good to have*/}
    </div>
  );
}
