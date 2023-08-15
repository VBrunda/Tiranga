const chakra = document.getElementById("chakra");

for(i=0; i<12; i++){
    const spoke = document.createElement("div");
    spoke.className = "spokes";
    spoke.style.transform = `rotate(${i*15}deg)`;
    chakra.appendChild(spoke)
}