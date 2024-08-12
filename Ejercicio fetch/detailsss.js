let url = `https://api-colombia.com/api/v1/CategoryNaturalArea`; // URL de la API para obtener departamentos
let speciesData = []; // Variable para almacenar los datos de departamentos
// Imágenes para los departamentos
const departmentImages = {
  // Define your department images here
};
// Función para obtener datos de la API
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    speciesData = data; // Guardar los datos en la variable
    mostrarData(data); // Mostrar los datos en la tabla
  })
  .catch((error) => console.log("Error fetching data:", error));
// Función para mostrar los datos en tarjetas
const mostrarData = (data) => {
  let body = "";
  for (var i = 0; i < data.length; i++) {
    let imageUrl = departmentImages[data[i].name] || data[i].urlImage; // Usa la imagen del mapa o la imagen por defecto
    body += `<div class="col-md-4">
                    <div class="card">
                        <img src="${imageUrl}" class="card-img-top" alt="${data[i].name}">
                        <div class="card-body">
                            <h5 class="card-title">${data[i].name}</h5>
                            <h5 class="card-title">${data[i].naturalAreas}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${data[i].description}</h6>
                        
                        </div>
                    </div>
                </div>`;
  }
  document.getElementById("data").innerHTML = body; // Actualiza el contenido del cuerpo de la tarjeta
};
