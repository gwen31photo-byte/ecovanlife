"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowUpRight, Expand, X } from "lucide-react";
import { photographs, photoShopUrl, type Photograph } from "./catalog";
import { photoCollections } from "./collections";
import styles from "./photo-gallery.module.css";

function LightboxImage({ photo }: { photo: Photograph }) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  return (
    <div className="lightbox-image" aria-busy={status === "loading"}>
      {status !== "loaded" && (
        <div className={styles.imageStatus} role="status">
          {status === "error" ? "Impossible de charger la photographie." : "Chargement…"}
        </div>
      )}
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="90vw"
        loading="eager"
        className={styles.lightboxPhoto}
        data-loaded={status === "loaded"}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
    </div>
  );
}

export function PhotoGallery() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<Photograph | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const visible = photographs.filter(
    (photo) => filter === "all" || photo.collection === filter,
  );

  return (
    <>
      <div className={styles.shop}>
        <a className="text-link" href={photoShopUrl} target="_blank" rel="noopener noreferrer">
          Découvrir ma boutique photo <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="filters" role="group" aria-label="Filtrer les photographies">
        {[{ id: "all", label: "Tout" }, ...photoCollections].map((collection) => (
          <button
            type="button"
            key={collection.id}
            aria-pressed={filter === collection.id}
            onClick={() => setFilter(collection.id)}
          >
            {collection.label}
          </button>
        ))}
      </div>
      <div className="gallery">
        {visible.map((photo, index) => (
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
              loading={index < 3 ? "eager" : "lazy"}
              sizes="(max-width: 700px) 100vw, 33vw"
            />
            <span className={styles.caption}>
              {photo.title} <Expand size={18} aria-hidden="true" />
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
            <LightboxImage key={selected.src} photo={selected} />
            <p className={styles.caption}>{selected.title}</p>
            {selected.picfairUrl?.trim() && (
              <div className={styles.purchase}>
                <a className="text-link" href={selected.picfairUrl} target="_blank" rel="noopener noreferrer">
                  Acheter sur Picfair <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            )}
          </>
        )}
      </dialog>
    </>
  );
}
