"use client"

import { useFavorites } from "../context/favoritesContext";


export default function FavoriteBtn({ pokemonId }) {
    const { isFavorite, toggleFavorite } = useFavorites();

    return (
        <button onClick={() => toggleFavorite(pokemonId)}>
            {isFavorite(pokemonId) ? "❤️" : "🤍"}
        </button>
    );
}
