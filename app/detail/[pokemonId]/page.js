import ClientDetail from "../ClientDetail";


export default async function DetailPage({ params }) {
    const { pokemonId } = params;

    const [pokemonRes, speciesRes] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`),
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`),
    ]);

    if (!pokemonRes.ok || !speciesRes.ok) {
        return <div>데이터 오류</div>;
    }

    const pokemon = await pokemonRes.json();
    const species = await speciesRes.json();

    const koreanName = species.names.find((n) => n.language.name === "ko")?.name || pokemon.name;
    const koreanDescription =
        species.flavor_text_entries.find((entry) => entry.language.name === "ko")?.flavor_text.replace(/\f/g, " ") ||
        "설명이 없습니다.";

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    if (!res.ok) {
        throw new Error("포켓몬 데이터를 불러오지 못했습니다");
    }
    const data = await res.json();

    return (
        <main className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-center mb-4">{koreanName}</h2>

            <div className="flex justify-center gap-4 mb-4">
                <img src={pokemon.sprites.front_default} alt="front" />
                <img src={pokemon.sprites.back_default} alt="back" />
            </div>

            <p className="text-gray-700 whitespace-pre-line mb-4">{koreanDescription}</p>

            <p><strong>키:</strong> {pokemon.height}</p>
            <p><strong>몸무게:</strong> {pokemon.weight}</p>
            <p><strong>속성:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>

            <div className="mt-4 text-center">
                <ClientDetail pokemonId={parseInt(pokemonId)} />
            </div>
        </main>
    );
}
