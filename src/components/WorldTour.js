import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.css";

function WorldTour() {
  useEffect(() => {
    /*--------------------
Vars
--------------------*/
    let progress = 50;
    let startX = 0;
    let active = 0;
    let isDown = false;

    /*--------------------
Contants
--------------------*/
    const speedWheel = 0.02;
    const speedDrag = -0.1;

    /*--------------------
Get Z
--------------------*/
    const getZindex = (array, index) =>
      array.map((_, i) =>
        index === i ? array.length : array.length - Math.abs(index - i)
      );

    /*--------------------
Items
--------------------*/
    const $items = document.querySelectorAll(".xarousel-item");
    const $cursors = document.querySelectorAll(".cursor");

    const displayItems = (item, index, active) => {
      const zIndex = getZindex([...$items], active)[index];
      item.style.setProperty("--zIndex", zIndex);
      item.style.setProperty("--active", (index - active) / $items.length);
    };

    /*--------------------
Animate
--------------------*/
    const animate = () => {
      progress = Math.max(0, Math.min(progress, 100));
      active = Math.floor((progress / 100) * ($items.length - 1));

      $items.forEach((item, index) => displayItems(item, index, active));
    };
    animate();

    /*--------------------
Click on Items
--------------------*/
    $items.forEach((item, i) => {
      item.addEventListener("click", () => {
        progress = (i / $items.length) * 100 + 10;
        animate();
      });
    });

    /*--------------------
Handlers
--------------------*/
    const handleWheel = (e) => {
      const wheelProgress = e.deltaY * speedWheel;
      progress = progress + wheelProgress;
      animate();
    };

    const handleMouseMove = (e) => {
      if (e.type === "mousemove") {
        $cursors.forEach(($cursor) => {
          $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
      }
      if (!isDown) return;
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const mouseProgress = (x - startX) * speedDrag;
      progress = progress + mouseProgress;
      startX = x;
      animate();
    };

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    /*--------------------
Listeners
--------------------*/
    document.addEventListener("mousewheel", handleWheel);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchstart", handleMouseDown);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);
    return () => {
      document.removeEventListener("mousewheel", handleWheel);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchstart", handleMouseDown);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div class="xarousel">
        <Link to="/worldtour/italy">
          <div class="xarousel-item">
            <div class="xarousel-box">
              <div class="title">Italy</div>
              <div class="num">01</div>
              <img src="./assets/images/Italy.jpg" alt="colosseum" />
            </div>
          </div>
        </Link>
        <Link to="/worldtour/mexico">
          <div class="xarousel-item">
            <div class="xarousel-box">
              <div class="title">Mexico</div>
              <div class="num">02</div>
              <img src="./assets/images/Mexico.jpg" alt="aztec-temple" />
            </div>
          </div>
        </Link>
        <Link to="/worldtour/france">
          <div class="xarousel-item">
            <div class="xarousel-box">
              <div class="title">France</div>
              <div class="num">03</div>
              <img src="./assets/images/Paris.jpg" alt="effiel-tower" />
            </div>
          </div>
        </Link>
        <Link to="/worldtour/india">
          <div class="xarousel-item">
            <div class="xarousel-box">
              <div class="title">India</div>
              <div class="num">04</div>
              <img src="./assets/images/India.jpg" alt="taj-mahal" />
            </div>
          </div>
        </Link>
        <Link to="/worldtour/china">
          <div class="xarousel-item">
            <div class="xarousel-box">
              <div class="title">China</div>
              <div class="num">05</div>
              <img src="./assets/images/China.jpg" alt="great-wall-of-china" />
            </div>
          </div>
        </Link>
        <Link to="/worldtour/jamaica">
          <div class="xarousel-item">
            <div class="xarousel-box">
              <div class="title">Jamaica</div>
              <div class="num">06</div>
              <img src="./assets/images/Jamaica.jpg" alt="woman-with-flag" />
            </div>
          </div>
        </Link>
        <Link to="/worldtour/usa">
          <div class="xarousel-item">
            <div class="xarousel-box">
              <div class="title">U.S.A</div>
              <div class="num">07</div>
              <img src="./assets/images/USA.jpg" alt="statue-of-liberty" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export { WorldTour };
