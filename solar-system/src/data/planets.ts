export type PlanetCategory = "star" | "terrestrial" | "gas_giant" | "ice_giant" | "dwarf";

export type CelestialBody = {
  id: string;
  name: string;
  category: PlanetCategory;
  /** Hex color for Three.js materials */
  color: string;
  emissive?: string;
  /** Visual orbit radius in scene units (not to scale) */
  orbitRadius: number;
  /** Visual sphere radius */
  radius: number;
  /** Orbital angular speed multiplier */
  orbitSpeed: number;
  /** Self-rotation speed */
  spinSpeed: number;
  /** Mean distance from Sun in AU (astronomical units) */
  meanDistanceAU: number;
  /** Sidereal orbital period in Earth years (approx) */
  orbitalPeriodYears: number;
  /** Equatorial diameter vs Earth (=1) */
  diameterVsEarth: number;
  /** Mass vs Earth (=1), Sun uses solar masses note in description */
  massVsEarth: number;
  naturalSatellites: number;
  surfaceTempC: string;
  atmosphere: string;
  summary: string;
  facts: string[];
};

export const SUN_ID = "sun";

export const sun: CelestialBody = {
  id: SUN_ID,
  name: "Sun",
  category: "star",
  color: "#fbbf24",
  emissive: "#f59e0b",
  orbitRadius: 0,
  radius: 1.15,
  orbitSpeed: 0,
  spinSpeed: 0.15,
  meanDistanceAU: 0,
  orbitalPeriodYears: 0,
  diameterVsEarth: 109,
  massVsEarth: 333000,
  naturalSatellites: 0,
  surfaceTempC: "~5,500 °C (photosphere); core ~15 million °C",
  atmosphere: "Hot plasma — mostly hydrogen (~73%) and helium (~25%)",
  summary:
    "The Sun is a G-type main-sequence star that contains more than 99% of the Solar System’s mass. Nuclear fusion in its core powers sunlight, heat, and the solar wind that shapes planetary magnetospheres and atmospheres.",
  facts: [
    "Light reaches Earth in about 8 minutes 20 seconds.",
    "The solar wind inflates a bubble called the heliosphere that protects the planets from interstellar cosmic rays.",
    "Sunspots reveal intense magnetic activity; solar storms can affect satellites and power grids on Earth.",
  ],
};

export const planets: CelestialBody[] = [
  {
    id: "mercury",
    name: "Mercury",
    category: "terrestrial",
    color: "#9ca3af",
    orbitRadius: 2.4,
    radius: 0.14,
    orbitSpeed: 1.6,
    spinSpeed: 0.4,
    meanDistanceAU: 0.39,
    orbitalPeriodYears: 0.24,
    diameterVsEarth: 0.38,
    massVsEarth: 0.055,
    naturalSatellites: 0,
    surfaceTempC: "-173 to 427 °C (extremes)",
    atmosphere: "Exosphere — trace atoms blasted by solar wind",
    summary:
      "Mercury is the smallest planet and the closest to the Sun. It has a heavily cratered surface and the largest orbital eccentricity of the eight planets.",
    facts: [
      "A day on Mercury (sunrise to sunrise) lasts about 176 Earth days.",
      "Despite being closest to the Sun, Venus is hotter on average due to Mercury’s thin atmosphere.",
      "NASA’s MESSENGER mapped the surface in detail and confirmed water ice in permanently shadowed polar craters.",
    ],
  },
  {
    id: "venus",
    name: "Venus",
    category: "terrestrial",
    color: "#e7c08d",
    orbitRadius: 3.2,
    radius: 0.2,
    orbitSpeed: 1.18,
    spinSpeed: -0.08,
    meanDistanceAU: 0.72,
    orbitalPeriodYears: 0.62,
    diameterVsEarth: 0.95,
    massVsEarth: 0.82,
    naturalSatellites: 0,
    surfaceTempC: "~465 °C average (runaway greenhouse)",
    atmosphere: "Dense CO₂ with sulfuric acid clouds",
    summary:
      "Venus is similar in size to Earth but wrapped in thick clouds. A crushing atmosphere and greenhouse effect make it the hottest planetary surface in the Solar System.",
    facts: [
      "Venus rotates backwards (retrograde) compared to most planets.",
      "Surface pressure is about 92 times Earth’s sea level.",
      "Soviet Venera probes landed and transmitted images from the surface in the 1970s–80s.",
    ],
  },
  {
    id: "earth",
    name: "Earth",
    category: "terrestrial",
    color: "#3b82f6",
    emissive: "#0ea5e9",
    orbitRadius: 4.1,
    radius: 0.21,
    orbitSpeed: 1,
    spinSpeed: 0.9,
    meanDistanceAU: 1,
    orbitalPeriodYears: 1,
    diameterVsEarth: 1,
    massVsEarth: 1,
    naturalSatellites: 1,
    surfaceTempC: "~15 °C global mean (habitable)",
    atmosphere: "Nitrogen ~78%, Oxygen ~21%, trace gases, water vapor",
    summary:
      "Earth is the only known world with liquid surface water and life. Plate tectonics, a strong magnetic field, and a stable climate window enabled complex biology.",
    facts: [
      "The Moon likely formed from debris after a Mars-sized impact early in history.",
      "Earth’s axial tilt (~23.4°) drives seasons as we orbit the Sun.",
      "The International Space Station orbits ~400 km up — still inside Earth’s thin atmospheric drag.",
    ],
  },
  {
    id: "mars",
    name: "Mars",
    category: "terrestrial",
    color: "#c2410c",
    orbitRadius: 5.2,
    radius: 0.16,
    orbitSpeed: 0.8,
    spinSpeed: 0.85,
    meanDistanceAU: 1.52,
    orbitalPeriodYears: 1.88,
    diameterVsEarth: 0.53,
    massVsEarth: 0.107,
    naturalSatellites: 2,
    surfaceTempC: "-63 °C average",
    atmosphere: "Thin CO₂ with dust storms",
    summary:
      "Mars is a cold desert world with ancient river valleys and polar ice caps. Robotic missions search for past habitability and prepare for future human exploration.",
    facts: [
      "Olympus Mons is the tallest volcano in the Solar System.",
      "Phobos orbits Mars faster than Mars rotates — it rises in the west and sets in the east.",
      "Perseverance rover caches samples for a potential Mars Sample Return campaign.",
    ],
  },
  {
    id: "jupiter",
    name: "Jupiter",
    category: "gas_giant",
    color: "#d4a574",
    orbitRadius: 7.2,
    radius: 0.52,
    orbitSpeed: 0.43,
    spinSpeed: 1.8,
    meanDistanceAU: 5.2,
    orbitalPeriodYears: 11.86,
    diameterVsEarth: 11.2,
    massVsEarth: 318,
    naturalSatellites: 95,
    surfaceTempC: "Cloud tops ~-110 °C (no solid surface)",
    atmosphere: "Hydrogen and helium with ammonia, methane, water clouds",
    summary:
      "Jupiter is the largest planet — a gas giant whose Great Red Spot is a centuries-old storm. Its strong gravity and magnetic field dominate the outer Solar System environment.",
    facts: [
      "Jupiter may have a dense core surrounded by metallic hydrogen.",
      "Io’s volcanism is driven by tidal heating from Jupiter’s gravity.",
      "The Juno mission maps gravity and magnetic fields from polar orbit.",
    ],
  },
  {
    id: "saturn",
    name: "Saturn",
    category: "gas_giant",
    color: "#e8d4b0",
    orbitRadius: 9,
    radius: 0.44,
    orbitSpeed: 0.32,
    spinSpeed: 1.65,
    meanDistanceAU: 9.58,
    orbitalPeriodYears: 29.45,
    diameterVsEarth: 9.45,
    massVsEarth: 95,
    naturalSatellites: 146,
    surfaceTempC: "Cloud tops ~-140 °C",
    atmosphere: "Hydrogen and helium; ammonia ice clouds",
    summary:
      "Saturn is famous for its icy ring system and lower average density than water (if you had a bathtub big enough, Saturn would float).",
    facts: [
      "Rings are mostly water ice from micrometers to house-sized chunks.",
      "Titan has a thick nitrogen atmosphere and methane lakes — studied by Cassini-Huygens.",
      "Hexagon-shaped jet stream persists at Saturn’s north pole.",
    ],
  },
  {
    id: "uranus",
    name: "Uranus",
    category: "ice_giant",
    color: "#7dd3fc",
    orbitRadius: 10.8,
    radius: 0.34,
    orbitSpeed: 0.23,
    spinSpeed: 1.1,
    meanDistanceAU: 19.2,
    orbitalPeriodYears: 84,
    diameterVsEarth: 4,
    massVsEarth: 14.5,
    naturalSatellites: 28,
    surfaceTempC: "Cloud tops ~-195 °C",
    atmosphere: "Hydrogen, helium, methane (blue color)",
    summary:
      "Uranus is an ice giant with a extreme axial tilt — it essentially rolls around its orbit. Methane absorbs red light, giving the planet a cyan appearance.",
    facts: [
      "Voyager 2 is the only spacecraft to fly by Uranus (1986).",
      "Interior models suggest a slushy mantle of water, ammonia, and methane ices.",
      "27 classical moons are named after characters from Shakespeare and Pope.",
    ],
  },
  {
    id: "neptune",
    name: "Neptune",
    category: "ice_giant",
    color: "#2563eb",
    emissive: "#1d4ed8",
    orbitRadius: 12.5,
    radius: 0.33,
    orbitSpeed: 0.18,
    spinSpeed: 1.05,
    meanDistanceAU: 30.05,
    orbitalPeriodYears: 164.8,
    diameterVsEarth: 3.88,
    massVsEarth: 17,
    naturalSatellites: 16,
    surfaceTempC: "Cloud tops ~-200 °C",
    atmosphere: "Hydrogen, helium, methane; fastest winds in the Solar System",
    summary:
      "Neptune is the farthest major planet from the Sun. Dark storms appear and disappear; winds can exceed 2,000 km/h.",
    facts: [
      "Triton orbits retrograde and likely was captured from the Kuiper Belt.",
      "Neptune was predicted mathematically before it was observed through a telescope.",
      "Voyager 2 flew by in 1989 — still our only close encounter.",
    ],
  },
];

export const dwarfPlanets = [
  {
    id: "pluto",
    name: "Pluto",
    category: "dwarf" as const,
    meanDistanceAU: 39.48,
    orbitalPeriodYears: 248,
    diameterVsEarth: 0.18,
    moons: 5,
    note: "Reclassified as a dwarf planet in 2006; New Horizons flew by in 2015.",
  },
  {
    id: "ceres",
    name: "Ceres",
    category: "dwarf" as const,
    meanDistanceAU: 2.77,
    orbitalPeriodYears: 4.6,
    diameterVsEarth: 0.076,
    moons: 0,
    note: "Largest object in the asteroid belt; studied by NASA’s Dawn mission.",
  },
];

export function getBodyById(id: string): CelestialBody | undefined {
  if (id === SUN_ID) return sun;
  return planets.find((p) => p.id === id);
}
