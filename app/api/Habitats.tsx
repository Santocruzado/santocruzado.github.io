interface Habitat {
  name: string;
  url: string;
}

export async function getHabitats(): Promise<Habitat[]> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon-habitat/");
  const habitats = await res.json();
  return habitats.results;
}
