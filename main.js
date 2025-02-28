let mevalar = [
  {
    ism: "mercury",
  },
  {
    ism: "venus",
  },
  {
    ism: "earth",
  },
  {
    ism: "mars",
  },
];

function press() {
  let box = document.getElementById("box");
  let image = document.getElementById("image");
  let tahminiyIndex = Math.floor(Math.random() * mevalar.length);

  box.textContent = mevalar[tahminiyIndex].ism;
}
