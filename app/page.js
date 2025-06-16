import Link from "next/link";

export default async function HomePage() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=386');
  const data = await res.json();

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">포켓몬 도감</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data.results.map((pokemon, index) => {
          const id = index + 1;
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <li key={pokemon.name} className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 text-center">
              <Link href={`/detail/${id}`}>
                <img src={imageUrl} alt={pokemon.name} className="mx-auto w-24 h-24" />
                <p className="mt-2 capitalize font-semibold">{pokemon.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
