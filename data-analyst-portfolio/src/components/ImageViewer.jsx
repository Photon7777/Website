import { useRef } from "react";
import { FiMaximize2, FiX } from "react-icons/fi";
export default function ImageViewer({ src, alt, caption, priority = false }) {
  const dialog = useRef(null);
  return (
    <figure className="screenshot-figure">
      <button
        className="screenshot-button"
        type="button"
        onClick={() => dialog.current.showModal()}
        aria-label={`Enlarge: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          width="1280"
          height="720"
          loading={priority ? "eager" : "lazy"}
        />
        <span>
          <FiMaximize2 aria-hidden="true" />
        </span>
      </button>
      <figcaption>
        {caption}
        <span>Product screenshot</span>
      </figcaption>
      <dialog
        ref={dialog}
        className="image-dialog"
        aria-label={alt}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current.close();
        }}
      >
        <form method="dialog">
          <button className="icon-btn" aria-label="Close image">
            <FiX />
          </button>
        </form>
        <img src={src} alt={alt} />
        <p>{caption}</p>
      </dialog>
    </figure>
  );
}
