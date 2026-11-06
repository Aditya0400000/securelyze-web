"use client";

import { useEffect, useId, useRef } from "react";

import "./FooterNightCity.css";

// The project's CSS loader emits global CSS, so every selector is explicitly
// namespaced to this illustration instead of changing shared configuration.
const styles = {
  "city": "footer-night-city",
  "scene": "footer-night-city__scene",
  "scrim": "footer-night-city__scrim",
  "spacer": "footer-night-city__spacer",
  "windowPulse": "footer-night-city__window-pulse",
  "amberPulse": "footer-night-city__amber-pulse",
  "twinkle": "footer-night-city__twinkle",
  "beacon": "footer-night-city__beacon",
  "beam": "footer-night-city__beam",
  "ring": "footer-night-city__ring",
  "vehicle": "footer-night-city__vehicle"
};

const GROUND = 598;
const BEACON = { x: 720, y: 230 };
const round = (value, precision = 0) => Number(value.toFixed(precision));

// The reference's seed and random-call order keep the skyline identical on
// the server, during hydration, and across visits.
function createCity() {
  let seed = 11;
  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const stars = Array.from({ length: 46 }, () => {
    const twinkle = random() > 0.6;
    return {
      x: round(random() * 1440),
      y: round(16 + random() * 300),
      radius: round(0.6 + random() * 0.9, 1),
      opacity: round(0.25 + random() * 0.4, 2),
      delay: twinkle ? round(random() * 6, 1) : null,
    };
  });
  const far = [];
  let x = -80;
  while (x < 1520) {
    const width = 44 + random() * 50;
    const height = 90 + random() * 140;
    const antenna = random() > 0.7;
    const windows = [];
    for (let index = 0; index < 3; index += 1) {
      if (random() > 0.5) {
        windows.push({
          x: round(x + 8 + random() * (width - 16)),
          y: round(GROUND - height + 12 + random() * (height - 30)),
        });
      }
    }
    far.push({ x: round(x), y: round(GROUND - height), width: round(width), height: round(height),
      antenna: antenna ? { x: round(x + width / 2), y: round(GROUND - height - 16) } : null,
      windows });
    x += width + 6 + random() * 10;
  }

  const near = [];
  const rooftops = [];
  x = -70;
  while (x < 1530) {
    const width = 56 + random() * 62;
    const height = 150 + random() * 170;
    if (x + width > 626 && x < 814) {
      x = 814;
      continue;
    }
    const top = GROUND - height;
    const roof = random() > 0.55;
    const windows = [];
    for (let y = top + 14; y < GROUND - 12; y += 17) {
      for (let windowX = x + 9; windowX < x + width - 10; windowX += 14) {
        const lit = random() < 0.42;
        const animated = lit && random() > 0.65;
        const mint = lit && random() > 0.82;
        windows.push({ x: round(windowX), y: round(y), lit, mint,
          duration: animated ? round(2.5 + random() * 5, 1) : null,
          delay: animated ? round(random() * 6, 1) : null });
      }
    }
    near.push({ x: round(x), y: round(top), width: round(width), height: round(height),
      roof: roof ? { x: round(x + width * 0.3), y: round(top - 10), width: round(width * 0.4) } : null,
      windows });
    rooftops.push({ x: x + width / 2, y: top });
    x += width + 8 + random() * 14;
  }

  const towerWindows = [];
  for (let y = 462; y < 590; y += 15) {
    for (let windowX = 652; windowX < 790; windowX += 16) {
      const lit = random() > 0.35;
      const animated = random() > 0.7;
      towerWindows.push({ x: windowX, y, lit,
        duration: animated ? round(3 + random() * 4, 1) : null,
        delay: animated ? round(random() * 5, 1) : null });
    }
  }
  const links = [2, 5, 8, 11, 14, 17, 20, 23].filter((index) => rooftops[index]).map((index, order) => {
    const roof = rooftops[index];
    return { start: { x: round(roof.x), y: round(roof.y) },
      control: { x: round((roof.x + BEACON.x) / 2), y: round(Math.min(roof.y, 230) - 70) },
      duration: 3200 + (order % 4) * 700, delay: order * 450 };
  });
  const vehicles = Array.from({ length: 6 }, (_, index) => ({
    y: 606 + (index % 2) * 12,
    width: round(10 + random() * 8),
    white: index % 3 === 0,
    duration: round(14 + random() * 14),
    delay: round(random() * 20),
    reverse: index % 2 !== 0,
  }));
  return { stars, far, near, towerWindows, links, vehicles };
}

const CITY = createCity();

function curve(link, near = { x: 0, y: 0 }, tower = { x: 0, y: 0 }) {
  return {
    start: { x: link.start.x + near.x, y: link.start.y + near.y },
    control: { x: link.control.x + (near.x + tower.x) / 2, y: link.control.y + (near.y + tower.y) / 2 },
    end: { x: BEACON.x + tower.x, y: BEACON.y + tower.y },
  };
}

function curvePath({ start, control, end }) {
  return `M${start.x} ${start.y} Q${control.x} ${control.y} ${end.x} ${end.y}`;
}

function curvePoint({ start, control, end }, progress) {
  const inverse = 1 - progress;
  return {
    x: inverse * inverse * start.x + 2 * inverse * progress * control.x + progress * progress * end.x,
    y: inverse * inverse * start.y + 2 * inverse * progress * control.y + progress * progress * end.y,
  };
}

function LitWindow({ window, tower = false }) {
  return (
    <rect x={window.x} y={window.y} width={tower ? 6 : 5} height="8" rx="1"
      fill={window.lit ? (window.mint ? "var(--city-mint)" : "var(--emerald-light)") : "var(--dark-green)"}
      opacity={tower || window.lit ? 0.9 : undefined}
      className={window.duration ? styles.windowPulse : undefined}
      style={window.duration ? { animationDuration: `${window.duration}s`, animationDelay: `-${window.delay}s` } : undefined} />
  );
}

export default function FooterNightCity() {
  const rootRef = useRef(null);
  const layers = useRef({});
  const paths = useRef([]);
  const packets = useRef([]);
  const id = useId().replace(/:/g, "");
  const fadeId = `${id}-city-fade`;
  const maskId = `${id}-city-mask`;
  const beamId = `${id}-city-beam`;

  useEffect(() => {
    const root = rootRef.current;
    const footer = root?.closest("footer");
    if (!footer) return undefined;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let visible = false;
    let frame = null;
    let previousTime = null;
    let elapsed = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let previousX = null;
    let previousY = null;

    function paint(staticPackets = false) {
      const offsets = {
        far: { x: currentX * -8, y: currentY * -3 },
        near: { x: currentX * -18, y: currentY * -6 },
        tower: { x: currentX * -11, y: currentY * -4 },
      };
      const moved = currentX !== previousX || currentY !== previousY;
      if (moved) {
        for (const [name, offset] of Object.entries(offsets)) {
          layers.current[name]?.setAttribute("transform", `translate(${offset.x} ${offset.y})`);
        }
        layers.current.beacon?.setAttribute("transform", `translate(${offsets.tower.x} ${offsets.tower.y})`);
        previousX = currentX;
        previousY = currentY;
      }
      CITY.links.forEach((link, index) => {
        const shape = curve(link, offsets.near, offsets.tower);
        if (moved) paths.current[index]?.setAttribute("d", curvePath(shape));
        const time = elapsed - link.delay;
        // Ease along the same reference curves without detaching either end
        // as the near skyline and the tower move at different depths.
        const progress = staticPackets ? (0.3 + index * 0.12) % 1 : Math.max(0, (time % link.duration) / link.duration);
        const point = curvePoint(shape, progress);
        const packet = packets.current[index];
        packet?.setAttribute("cx", point.x);
        packet?.setAttribute("cy", point.y);
        packet?.setAttribute("opacity", staticPackets || time >= 0 ? "1" : "0");
      });
    }

    function animate(time) {
      const delta = previousTime === null ? 0 : Math.min(time - previousTime, 64);
      previousTime = time;
      elapsed += delta;
      const interpolation = 1 - Math.exp(-delta / 110);
      currentX += (targetX - currentX) * interpolation;
      currentY += (targetY - currentY) * interpolation;
      if (Math.abs(targetX - currentX) < 0.0001) currentX = targetX;
      if (Math.abs(targetY - currentY) < 0.0001) currentY = targetY;
      paint();
      frame = window.requestAnimationFrame(animate);
    }

    function updatePlayback() {
      const playing = visible && !document.hidden && !motion.matches;
      root.dataset.running = String(playing);
      root.dataset.reducedMotion = String(motion.matches);
      if (!pointer.matches || motion.matches) targetX = targetY = 0;
      if (playing && frame === null) frame = window.requestAnimationFrame(animate);
      if (!playing) {
        if (frame !== null) window.cancelAnimationFrame(frame);
        frame = null;
        previousTime = null;
      }
      if (motion.matches) {
        currentX = currentY = 0;
        paint(true);
      }
    }

    function handlePointerMove(event) {
      if (event.pointerType !== "mouse" || !pointer.matches || motion.matches) return;
      const bounds = footer.getBoundingClientRect();
      targetX = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1));
      targetY = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1));
    }

    function resetPointer() {
      targetX = targetY = 0;
    }

    const observer = typeof IntersectionObserver !== "undefined" ? new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    }) : null;
    if (observer) observer.observe(footer);
    else visible = true;

    footer.addEventListener("pointermove", handlePointerMove, { passive: true });
    footer.addEventListener("pointerleave", resetPointer);
    motion.addEventListener("change", updatePlayback);
    pointer.addEventListener("change", updatePlayback);
    document.addEventListener("visibilitychange", updatePlayback);
    updatePlayback();

    return () => {
      observer?.disconnect();
      if (frame !== null) window.cancelAnimationFrame(frame);
      footer.removeEventListener("pointermove", handlePointerMove);
      footer.removeEventListener("pointerleave", resetPointer);
      motion.removeEventListener("change", updatePlayback);
      pointer.removeEventListener("change", updatePlayback);
      document.removeEventListener("visibilitychange", updatePlayback);
    };
  }, []);

  return (
    <>
      <div ref={rootRef} aria-hidden="true" data-footer-night-city="" data-running="false" data-reduced-motion="false" className={styles.city}>
        <div className={styles.scene}>
          <svg viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice" focusable="false" aria-hidden="true">
            <defs>
              <linearGradient id={fadeId} gradientUnits="userSpaceOnUse" x1="0" y1="200" x2="0" y2="380">
                <stop offset="0" stopColor="black" /><stop offset="1" stopColor="var(--white)" />
              </linearGradient>
              <mask id={maskId} maskUnits="userSpaceOnUse" x="-300" y="-200" width="2040" height="900">
                <rect x="-300" y="-200" width="2040" height="900" fill={`url(#${fadeId})`} />
              </mask>
              <linearGradient id={beamId} gradientUnits="userSpaceOnUse" x1="0" y1="228" x2="0" y2="-80">
                <stop offset="0" stopColor="var(--emerald-light)" stopOpacity="0.16" />
                <stop offset="1" stopColor="var(--emerald-light)" stopOpacity="0" />
              </linearGradient>
            </defs>

            <g data-city-stars="">
              {CITY.stars.map((star, index) => <circle key={index} cx={star.x} cy={star.y} r={star.radius} fill="var(--soft-green)" opacity={star.opacity}
                className={star.delay !== null ? styles.twinkle : undefined} style={star.delay !== null ? { animationDelay: `-${star.delay}s` } : undefined} />)}
            </g>

            <g mask={`url(#${maskId})`}>
              <g data-city-layer="far" ref={(node) => { layers.current.far = node; }}>
                {CITY.far.map((building, index) => (
                  <g key={index}>
                    <rect x={building.x} y={building.y} width={building.width} height={building.height} fill="var(--city-far-fill)" stroke="var(--city-far-line)" />
                    {building.antenna && <line x1={building.antenna.x} y1={building.y} x2={building.antenna.x} y2={building.antenna.y} stroke="var(--dark-green)" />}
                    {building.windows.map((window, windowIndex) => <rect key={windowIndex} x={window.x} y={window.y} width="3" height="4" fill="var(--emerald-light)" opacity="0.35" />)}
                  </g>
                ))}
              </g>
              <g data-city-layer="near" ref={(node) => { layers.current.near = node; }}>
                {CITY.near.map((building, index) => (
                  <g key={index}>
                    <rect x={building.x} y={building.y} width={building.width} height={building.height} fill="var(--charcoal)" stroke="var(--dark-green)" />
                    {building.roof && <rect x={building.roof.x} y={building.roof.y} width={building.roof.width} height="10" fill="var(--charcoal)" stroke="var(--dark-green)" />}
                    {building.windows.map((window, windowIndex) => <LitWindow key={windowIndex} window={window} />)}
                  </g>
                ))}
                {[[262, 470], [1110, 455], [1288, 500]].map(([x, y], index) => <rect key={index} x={x} y={y} width="5" height="8" rx="1" fill="var(--office-amber)" className={styles.amberPulse} style={{ animationDelay: `-${index}s` }} />)}
              </g>

              <g data-city-layer="tower" ref={(node) => { layers.current.tower = node; }}>
                <rect x="640" y="450" width="160" height="148" fill="var(--charcoal)" stroke="var(--office-desk-top)" />
                <rect x="668" y="360" width="104" height="92" fill="var(--charcoal)" stroke="var(--office-desk-top)" />
                <rect x="692" y="292" width="56" height="70" fill="var(--charcoal)" stroke="var(--office-desk-top)" />
                <line x1="720" y1="292" x2="720" y2="236" stroke="var(--emerald-light)" strokeWidth="2" />
                <path d="M720 372 L696 382 V404 C696 420 707 431 720 436 C733 431 744 420 744 404 V382 Z" fill="var(--office-bg)" stroke="var(--emerald-light)" strokeWidth="2.4" />
                <path d="M708 404 L716 412 L732 394" fill="none" stroke="var(--emerald-light)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {CITY.towerWindows.map((window, index) => <LitWindow key={index} window={window} tower />)}
                {[304, 318, 332, 346].flatMap((y) => [704, 718, 732].map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="6" height="7" rx="1" fill="var(--emerald-light)" opacity="0.8" />))}
              </g>

              <g data-city-connections="">
                {CITY.links.map((link, index) => (
                  <g key={index}>
                    <path ref={(node) => { paths.current[index] = node; }} d={curvePath(curve(link))} fill="none" stroke="var(--emerald-light)" strokeOpacity="0.28" strokeDasharray="3 6" />
                    <circle ref={(node) => { packets.current[index] = node; }} data-city-packet="" cx={link.start.x} cy={link.start.y} r="3" fill="var(--city-mint)" />
                  </g>
                ))}
              </g>
            </g>

            <g data-city-layer="beacon" ref={(node) => { layers.current.beacon = node; }}>
              <g className={styles.beam}><path d="M720 228 L330 -560 L1110 -560 Z" fill={`url(#${beamId})`} /></g>
              <circle className={styles.ring} cx="720" cy="228" r="14" fill="none" stroke="var(--emerald-light)" strokeWidth="1.5" />
              <circle className={styles.ring} cx="720" cy="228" r="14" fill="none" stroke="var(--emerald-light)" strokeWidth="1.5" style={{ animationDelay: "-1.6s" }} />
              <circle className={styles.beacon} cx="720" cy="228" r="5" fill="var(--office-amber)" />
            </g>

            <g data-city-road="">
              <rect x="-300" y={GROUND} width="2040" height="80" fill="var(--office-bg)" />
              <line x1="-300" y1={GROUND} x2="1740" y2={GROUND} stroke="var(--dark-green)" />
              <line x1="-300" y1="614" x2="1740" y2="614" stroke="var(--dark-green)" strokeDasharray="14 12" />
              {CITY.vehicles.map((vehicle, index) => <rect key={index} className={styles.vehicle} x="-60" y={vehicle.y} width={vehicle.width} height="3" rx="1.5" fill={vehicle.white ? "var(--office-shell)" : "var(--emerald-light)"} opacity="0.85"
                style={{ animationDuration: `${vehicle.duration}s`, animationDelay: `-${vehicle.delay}s`, animationDirection: vehicle.reverse ? "reverse" : "normal", "--vehicle-rest-x": `${(index + 1) * 210}px` }} />)}
            </g>
          </svg>
        </div>
        <div className={styles.scrim} />
      </div>
      {/* Reserve the exact height of the former mountain illustration. */}
      <div aria-hidden="true" className={styles.spacer} />
    </>
  );
}
