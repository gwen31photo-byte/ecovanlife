import Image from "next/image";
import Link from "next/link";
import { roadTrips } from "@/content/road-trips";
import styles from "./road-trip-grid.module.css";

export function RoadTripGrid() {
  return (
    <div className={`adventure-grid ${styles.grid}`}>
      {roadTrips.map((trip) => {
        const content = (
          <>
            <div className="card-image">
              <Image
                src={trip.image}
                alt={trip.alt}
                fill
                sizes="(max-width: 800px) 100vw, 33vw"
              />
              <span className="image-label">{trip.region}</span>
            </div>
            <div className="card-meta">
              {trip.category}
              <span>·</span>
              {trip.duration}
              <span>·</span>
              {trip.country}
            </div>
            <h3>{trip.title}</h3>
            <p className={styles.description}>{trip.description}</p>
          </>
        );
        const className = `adventure-card ${styles.card}`;
        return trip.href ? (
          <Link className={className} href={trip.href} key={trip.title}>
            {content}
          </Link>
        ) : (
          <article className={className} key={trip.title}>
            {content}
          </article>
        );
      })}
    </div>
  );
}
