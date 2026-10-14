"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { X, Expand } from "lucide-react";
import type { Photograph } from "@/app/photos/catalog";

type GalleryPhoto = Pick<Photograph, "id" | "title" | "alt" | "src" | "thumbnailSrc">;

export function Gallery({ photos }: { photos: readonly GalleryPhoto[] }) {
  const [selected, setSelected] = useState<GalleryPhoto | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <div className="gallery compact">
        {photos.map((photo) => (
          <button
            type="button"
            className="gallery-photo"
            key={photo.id}
            onClick={() => {
              setSelected(photo);
              dialog.current?.showModal();
            }}
            aria-label={`Agrandir : ${photo.title}`}
          >
            <Image
              src={photo.thumbnailSrc}
              alt={photo.alt}
              fill
              sizes="(max-width: 600px) 85vw, 33vw"
            />
            <span>
              {photo.title}
              <Expand size={18} aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Photographie agrandie"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          type="button"
          className="close-lightbox"
          autoFocus
          onClick={() => dialog.current?.close()}
          aria-label="Fermer la photographie"
        >
          <X />
        </button>
        {selected && (
          <>
            <div className="lightbox-image">
              <Image src={selected.src} alt={selected.alt} fill sizes="90vw" loading="eager" />
            </div>
            <p>{selected.title}</p>
          </>
        )}
      </dialog>
    </>
  );
}
