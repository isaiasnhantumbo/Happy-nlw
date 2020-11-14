const map = L.map("mapid").setView([-25.9107546, 32.4859487], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});
let marker;
//create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//add o campo de fotos
function addPhotoField() {
  // Pegar o container de fotos #images
  const container = document.querySelector("#images");
  // PeGAR O CONTAINER PARA DUPLICAR .new-images
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // REALIAZAR O CLONE DA ULTIMA IMAGEM ADICIONADA
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //   VERIFICAR se o campo ESta vazio, se sim, nao adicionar ao container de imagem o novo field
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  //   LIMPAR OS CAMPOS ANTES DE ADICIONAR AO CONTAINEER DE IMAGES
  input.value = "";
  // ADICIONAR O CLONE AO CONTAINER DE #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //   LIMPAR O VALOR DO CAMPO
    span.parentNode.children[0].value = "";
    return;
  }
  //   DELETAR O CAMPO DUPLICADO
  span.parentNode.remove();
}

// SELECIONAR O SIM OU NAO
function toggleSelect(event) {
  // REMOVER A CLASS .active (DOS BOTÕES)
  document.querySelectorAll(".button-select button").forEach((button) => {
    button.classList.remove("active");
  });
  // PEGAR O BOTÃO CLICADO
  const button = event.currentTarget;
  // COLOCAR A CLASS .active NO BOTÃO SELECIONADO
  button.classList.add("active");
  // VERIFICAR SE EH SIM OU NAO
  const input = document.querySelector('["open-on-weekends"]');
  // ATUALIZAR O MEU INPUT HIDDEN COM O VALOR SELECIONADO
  input.value = button.dataset.value;
}
