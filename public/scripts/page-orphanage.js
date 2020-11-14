const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// get values from html >> database<<
const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;
// Create map
const map = L.map("mapid", options).setView([lat, lng], 16);

//create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popAnchor: [170, 2],
});
// create and add marker
L.marker([lat, lng], { icon }).addTo(map);

// IMAGE GALLERY

function selectImage(event) {
  const button = event.currentTarget;

  // Remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }
  // Selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // atualizar o container de imagem
  imageContainer.src = image.src;

  // adicionar a classe .activar para a imagem que foi clicada(button)
  button.classList.add("active");
}
