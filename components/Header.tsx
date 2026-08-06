"use client";

import Link from "next/link";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="border-b border-neutral-800">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight"
                >
                    MIF
                    <span className="text-cyan-400">.</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
                    <Link
                        href="/"
                        className="transition hover:text-cyan-400"
                    >
                        Accueil
                    </Link>

                    <Link
                        href="#labs"
                        className="transition hover:text-cyan-400"
                    >
                        Projets
                    </Link>

                    <Link
                        href="#about"
                        className="transition hover:text-cyan-400"
                    >
                        À propos
                    </Link>

                    <Link
                        href="/contact"
                        className="transition hover:text-cyan-400"
                    >
                        Contact
                    </Link>

                    <Link
                        href="https://github.com/fayemameibra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition hover:border-cyan-400 hover:text-cyan-400"
                        aria-label="GitHub"
                    >
                        <BsGithub size={18} />
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-center rounded-lg border border-neutral-700 p-2 text-neutral-300 md:hidden"
                    aria-label="Menu"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t border-neutral-800 bg-neutral-950 md:hidden">
                    <nav className="flex flex-col p-6 text-neutral-300">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="py-3 transition hover:text-cyan-400"
                        >
                            Accueil
                        </Link>

                        <Link
                            href="#labs"
                            onClick={() => setIsOpen(false)}
                            className="py-3 transition hover:text-cyan-400"
                        >
                            Projets
                        </Link>

                        <Link
                            href="#about"
                            onClick={() => setIsOpen(false)}
                            className="py-3 transition hover:text-cyan-400"
                        >
                            À propos
                        </Link>

                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="py-3 transition hover:text-cyan-400"
                        >
                            Contact
                        </Link>

                        <Link
                            href="https://github.com/fayemameibra"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="mt-3 flex items-center gap-3 py-3 text-cyan-400"
                        >
                            <BsGithub size={18} />
                            GitHub
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
