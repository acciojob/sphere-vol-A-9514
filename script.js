function volume_sphere() {
  let item = document.getElementById("radius").value;
  let volume= Math.pow(Number(item),3)* 4/3 * Math.PI;
  console.log(volume);
  document.getElementById("volume").value = volume;
  console.log(document.getElementById("volume"));
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;