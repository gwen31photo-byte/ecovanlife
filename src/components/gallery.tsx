"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { X, Expand } from "lucide-react";
import { photos } from "@/content/site";
export function Gallery({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState("Tout");
  const [selected, setSelected] = useState(photos[0]);
  const dialog = useRef<HTMLDialogElement>(null);
  const visible = (compact ? photos.slice(0, 3) : photos).filter(
    (photo) => filter === "Tout" || photo.category === filter,
  );
  return (
    <>
      {!compact && (
        <div className="filters" aria-label="Filtrer les photographies">
          {["Tout", "Nature", "Montagne", "Océan"].map((item) => (
            <button
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <div className={`gallery ${compact ? "compact" : ""}`}>
        {visible.map((photo) => (
          <button
            className="gallery-photo"
            key={photo.src}
            onClick={() => {
              setSelected(photo);
              dialog.current?.showModal();
            }}
            aria-label={`Agrandir : ${photo.title}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 700px) 100vw, 33vw"
            />
            <span>
              {photo.title}
              <Expand size={18} />
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Photographie agrandie"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="close-lightbox"
          autoFocus
          onClick={() => dialog.current?.close()}
          aria-label="Fermer la photographie"
        >
          <X />
        </button>
        <div className="lightbox-image">
          <Image src={selected.src} alt={selected.alt} fill sizes="90vw" />
        </div>
        <p>{selected.title} — photographie de démonstration</p>
      </dialog>
    </>
  );
}
