"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/site";
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header ${pathname === "/" ? "over-hero" : ""}`}>
      <Link href="/" className="brand" aria-label="EcoVanLife, accueil">
        <Image
          src="/images/logo-ecovanlife1.png"
          alt="EcoVanLife"
          width={2172}
          height={724}
          sizes="(max-width: 800px) 150px, 210px"
          className="header-logo"
        />
      </Link>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="main-navigation"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="main-navigation"
        className={open ? "navigation is-open" : "navigation"}
        aria-label="Navigation principale"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
