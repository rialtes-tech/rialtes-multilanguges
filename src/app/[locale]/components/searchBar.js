"use client";
import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";


export default function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const router = useRouter();
    const inputRef = useRef()

    const handleSearch = () => {
        if (!query.trim()) return;
        router.push(`/searched-data?query=${encodeURIComponent(query)}`);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    return (
        <>
            <div className="flex items-center">
                {!isOpen ? (
                    <button
                        onClick={() => {
                            setIsOpen(true);
                        }}
                        className="p-2 hover:bg-gray-100 rounded-full transition"
                    >
                        <Search className="w-5 h-5 text-gray-600" />
                    </button>
                ) : (
                    <div
                        className={`
        flex items-center bg-gray-50 rounded-md px-3 py-2 overflow-hidden transition-all duration-300
        ${isOpen ? "z-50" : ""}
        w-full lg:w-[600px] max-lg:h-[65px]
        fixed top-0 left-0 right-0 bg-gray-100 shadow-md lg:static lg:bg-gray-50 lg:shadow-none
      `}>
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            ref={inputRef}
                            className="flex-1 bg-transparent text-gray-800 placeholder-gray-500
                                        border-0 focus:border-0 focus:outline-none focus:ring-0
                                        transition-all duration-300 searchInput"
                        />

                        <button
                            onClick={handleSearch}
                            className="p-2 text-gray-600 hover:text-blue-600">
                            <Search className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => {
                                setQuery("");
                                setIsOpen(false);
                            }}
                            className="p-2 text-gray-600 hover:text-blue-600"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>

        </>
    );
}
