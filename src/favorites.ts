const trey = document.querySelector(
  ".couple-card--him .couple-bio-list",
) as HTMLUListElement;
const madelyn = document.querySelector(
  ".couple-card--her .couple-bio-list",
) as HTMLUListElement;

export function loadFavorites() {
  const treyStats: Readonly<string[]> = [
    "Diehard Denver Broncos fan",
    "Loves Legos",
    "Studying Computer Software Engineering",
    "Mdelyn's Sweetheart",
  ];
  const madelynStats: Readonly<string[]> = [
    "Loves cooking Sliders",
    "Ohio State Buckeye fan",
    "Study Healthcare Administration",
    "Pinspired home chef",
  ];
  trey.innerHTML = treyStats.map((stat) => `<li>${stat}</li>`).join("");
  madelyn.innerHTML = madelynStats.map((stat) => `<li>${stat}</li>`).join("");
}
