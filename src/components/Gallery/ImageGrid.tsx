import React, { useEffect, useRef } from "react";
import { TweenMax, Power1 } from "gsap";
import "./Style.css";

const ImageGrid = ({
  imgSrc = "https://unsplash.it/g/1024/768?image=874",
  containerName = "placeholder",
  rows = 5,
  columns = 5,
  margin = 2.5,
  animTime = 0.3,
}) => {
  const placeholderRef = useRef(null);

  useEffect(() => {
    const placeholder = placeholderRef.current;
    const container = document.createElement("div");
    container.className = "gridContainer";
    placeholder.appendChild(container);

    const w = container.offsetWidth / columns - margin;
    const h = container.offsetHeight / rows - margin;

    for (let i = 0, l = rows * columns; i < l; i++) {
      const gridTile = document.createElement("div");
      gridTile.className = "gridTile";
      gridTile.style.backgroundImage = `url(${imgSrc})`;

      const arr = [
        (w + margin) * (i % columns),
        (h + margin) * Math.floor(i / columns),
        (w + margin) * (i % columns) + w - margin,
        (h + margin) * Math.floor(i / columns),
        (w + margin) * (i % columns) + w - margin,
        (h + margin) * Math.floor(i / columns) + h - margin,
        (w + margin) * (i % columns),
        (h + margin) * Math.floor(i / columns) + h - margin,
      ];

      TweenMax.set(gridTile, {
        webkitClipPath: `polygon(${arr[0]}px ${arr[1]}px, ${arr[2]}px ${arr[3]}px, ${arr[4]}px ${arr[5]}px, ${arr[6]}px ${arr[7]}px)`,
        clipPath: `polygon(${arr[0]}px ${arr[1]}px, ${arr[2]}px ${arr[3]}px, ${arr[4]}px ${arr[5]}px, ${arr[6]}px ${arr[7]}px)`,
      });

      container.appendChild(gridTile);
      fixTilePosition(gridTile, i);
    }

    const handleMouseOver = (e) => {
      const allTiles = e.currentTarget.querySelectorAll(".gridTile");
      allTiles.forEach((tile) =>
        TweenMax.to(tile, animTime, {
          css: { backgroundPosition: "0px 0px" },
          ease: Power1.easeOut,
        })
      );
    };

    const handleMouseLeave = (e) => {
      const allTiles = e.currentTarget.querySelectorAll(".gridTile");
      allTiles.forEach((tile, index) =>
        fixTilePosition(tile, index, animTime, 150)
      );
    };

    placeholder.addEventListener("mouseover", handleMouseOver);
    placeholder.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners
    return () => {
      placeholder.removeEventListener("mouseover", handleMouseOver);
      placeholder.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [imgSrc, rows, columns, margin, animTime]);

  const fixTilePosition = (tile, ind, time = 0, offsetY = 0) => {
    const placeholder = placeholderRef.current;
    const container = placeholder.querySelector(".gridContainer");
    const w = container.offsetWidth / columns - margin;
    const h = container.offsetHeight / rows - margin;
    const centr = Math.floor((columns * rows) / 2);
    const centrCol = Math.ceil(centr / columns);
    const centrRow = Math.ceil(centr / rows);
    const offsetW = w / centrCol;
    const offsetH = h / centrRow;
    const left = Math.round(((ind % columns) - centrCol + 1) * offsetW);
    const top =
      Math.round((Math.floor(ind / columns) - centrRow + 1) * offsetH) -
      offsetY;

    TweenMax.to(tile, time, {
      css: { backgroundPosition: `${left}px ${top}px` },
      ease: Power1.easeOut,
    });
  };

  return (
    <>
      <div className={containerName} ref={placeholderRef}></div>
    </>
  );
};

export default ImageGrid;
