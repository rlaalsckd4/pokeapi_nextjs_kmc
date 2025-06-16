"use client"

import Link from "next/link";
import { useFavorites } from "../context/favoritesContext";

export default function FavoritesPage() {
    const { favorites } = useFavorites();

    return (
        <main className="p-4">
            <h1 className="text-3xl font-bold text-center mb-6">❤️ 찜한 포켓몬</h1>
            {favorites.length === 0 ? (
                <p className="text-center text-gray-500">아직 찜한 포켓몬이 없습니다.</p>
            ) : (
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {favorites.map((id) => (
                        <li key={id} className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 text-center">
                            <Link href={`/detail/${id}`}>
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} className="mx-auto w-24 h-24"
                                />
                                <p className="mt-2 font-semibold">#{id}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}
