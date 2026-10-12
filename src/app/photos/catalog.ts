import catalog from "./photographs.json";
import type { PhotoCollectionId } from "./collections";

export type Photograph = {
  /** Original relative filename, including collection and any subfolder. */
  id: string;
  filename: string;
  collection: PhotoCollectionId;
  title: string;
  alt: string;
  src: string;
  thumbnailSrc: string;
  width: number;
  height: number;
  /** Global display order, ascending; ties preserve catalogue order. */
  order: number;
  /** False excludes the photograph from all public gallery filters. */
  visible: boolean;
  /** Exact Picfair photograph URL only; null keeps the purchase link hidden. */
  picfairUrl: string | null;
};

export function selectPublicPhotographs(photos: readonly Photograph[]): Photograph[] {
  return photos.filter((photo) => photo.visible).sort((a, b) => a.order - b.order);
}

export const photographs = selectPublicPhotographs(catalog as Photograph[]);
export const photoShopUrl = "https://gwenaellephoto.picfair.com/";
