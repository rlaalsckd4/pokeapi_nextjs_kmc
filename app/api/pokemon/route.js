export async function GET() {
    const pokemonData = ['https://pokeapi.co/api/v2/']

    return Response.json({pokemonData})
}