import styles from './NeuralGraph.module.css';

const W = 460;
const H = 520;

/** Deterministic pseudo-random so the graph is identical on every render. */
function rand(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const LAYERS = [4, 6, 6, 3].map((count, layerIndex, all) => {
  const x = 60 + (layerIndex * (W - 120)) / (all.length - 1);
  const span = H - 140;
  return Array.from({ length: count }, (_, i) => ({
    id: `${layerIndex}-${i}`,
    layer: layerIndex,
    x,
    y: 70 + span * ((i + 0.5) / count) + (rand(layerIndex * 10 + i) - 0.5) * 26,
    r: layerIndex === 0 || layerIndex === all.length - 1 ? 4 : 3.4,
  }));
});

const NODES = LAYERS.flat();

// Keep ~70% of possible edges so the graph reads as a network, not a mesh.
const EDGES = [];
for (let l = 0; l < LAYERS.length - 1; l += 1) {
  LAYERS[l].forEach((from, i) => {
    LAYERS[l + 1].forEach((to, j) => {
      if (rand(l * 100 + i * 10 + j) > 0.42) {
        EDGES.push({ id: `${from.id}_${to.id}`, from, to, seed: rand(l * 7 + i * 3 + j) });
      }
    });
  });
}

// A handful of nodes carry a slow opacity pulse; the rest are static.
const PULSING = new Set(['1-1', '2-4', '0-2', '3-1', '2-0']);

export function NeuralGraph() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.glow} />
      <svg
        className={styles.svg}
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        focusable="false"
        role="presentation"
      >
        <defs>
          <linearGradient id="ng-edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#6366F1" stopOpacity="0.08" />
            <stop offset="0.5" stopColor="#8B5CF6" stopOpacity="0.55" />
            <stop offset="1" stopColor="#6366F1" stopOpacity="0.08" />
          </linearGradient>
          <radialGradient id="ng-node">
            <stop offset="0" stopColor="#A5B4FC" />
            <stop offset="1" stopColor="#6366F1" />
          </radialGradient>
        </defs>

        <g stroke="url(#ng-edge)" strokeWidth="1">
          {EDGES.map((e) => (
            <line key={e.id} x1={e.from.x} y1={e.from.y} x2={e.to.x} y2={e.to.y} />
          ))}
        </g>

        {NODES.map((n) => (
          <g key={n.id}>
            <circle
              className={PULSING.has(n.id) ? styles.halo : undefined}
              cx={n.x}
              cy={n.y}
              r={n.r * 3.4}
              fill="#6366F1"
              opacity="0.09"
            />
            <circle
              className={PULSING.has(n.id) ? styles.pulse : undefined}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="url(#ng-node)"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
