"use client"
import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("favorites");
        if (stored) setFavorites(JSON.parse(stored));
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
        );
    };

    const isFavorite = (id) => favorites.includes(id);

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}
