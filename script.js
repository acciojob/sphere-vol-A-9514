function volume_sphere() {
  let item = document.getElementById("radius").value;
  let vol = Math.pow(Number(item),3)* 4/3 * Math.PI;
  console.log(vol);
  document.getElementById("volume").value = vol;
  console.log(document.getElementById("volume"));
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;