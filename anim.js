// Sincronizar las letras con la canciónfast:
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
	{text: "Él la estaba esperando con una flor amarilla", time: 16, duration: 6},
	{text: "Ella lo estaba soñando con la luz en su pupila", time: 23.85, duration: 5.63},
	{text: "Y el amarillo del Sol iluminaba la esquina", time: 31.5, duration: 7},
	{text: "Lo sentía tan cercano, lo sentía desde niña", time: 39.5, duration: 5.2},
	
  	{ text: "Ella sabía que él sabía", time: 46, duration: 2.71 },
  	{ text: "Que algún día pasaría", time: 48.71, duration: 1.67 },
  	{ text: "Que vendría a buscarla", time: 50.38, duration: 1.8 },
  	{ text: "Con sus flores amarillas", time: 51.4, duration: 4 },

	{ text: "No te apures, no detengas", time: 58.7, duration: 2 },
  	{ text: "El instante del encuentro", time: 60.5, duration: 1.85 },
  	{ text: "Está dicho que es un hecho", time: 62, duration: 2.3 },
  	{ text: "No la pierdas, no hay derecho", time: 64.2, duration: 1.91 },
  	{ text: "No te olvides que la vida", time: 66.21, duration: 3.47 },
  	{ text: "Casi nunca está dormida", time: 69.28, duration: 4 },

	{ text: "En ese bar tan desierto nos esperaba el encuentro", time: 92.3, duration: 5.35 },
  	{ text: "Ella llegó en limusina amarilla por supuesto", time: 100.3, duration: 5.64 },
  	{ text: "Él se acercó de repente la miro tan de frente", time: 108.3, duration: 7.20 },
  	{ text: "Toda una vida soñada y no pudo decir nada", time: 116.3, duration: 5.75 },

	{ text: "Ella sabía que él sabía", time: 123, duration:2.71 },
  	{ text: "Que algún día pasaría", time: 125.71, duration:1.67 },
  	{ text: "Que vendría a buscarla", time: 127.38, duration:1.8 },
  	{ text: "Con sus flores amarillas", time: 129.18, duration:4 },

	{ text: "No te apures, no detengas", time: 135, duration: 2 },
  	{ text: "El instante del encuentro", time: 137, duration: 1.85 },
  	{ text: "Está dicho que es un hecho", time: 138.85, duration: 2.3 },
  	{ text: "No la pierdas, no hay derecho", time: 141.15, duration: 1.91 },
  	{ text: "No te olvides que la vida", time: 143.06, duration: 3.47 },
  	{ text: "Casi nunca está dormida", time: 146.53, duration: 4 },

	{ text: "Flores amarillas", time: 15.8, duration: 4 },

	{ text: "Ella sabía que él sabía", time: 168, duration:2.71 },
  	{ text: "Que algún día pasaría", time: 170.71, duration:1.67 },
  	{ text: "Que vendría a buscarla", time: 172.38, duration:1.8 },
  	{ text: "Con sus flores amarillas", time: 174.18, duration:4 },

	{ text: "No te apures, no detengas", time: 180.5, duration: 2 },
  	{ text: "El instante del encuentro", time: 182.5, duration: 1.85 },
  	{ text: "Está dicho que es un hecho", time: 184.35, duration: 2.3 },
  	{ text: "No la pierdas, no hay derecho", time: 186.65, duration: 1.91 },
  	{ text: "No te olvides que la vida", time: 188.56, duration: 3.47 },
  	{ text: "Casi nunca está dormida", time: 192.03, duration: 4 },
	    
  	{ text: "Ella sabía que él sabía", time: 197.5, duration: 2.5 },
  	{ text: "Él sabía, ella sabía", time: 200, duration: 1.72 },
  	{ text: "Que él sabía, ella sabía", time: 201.72, duration: 1.91 },
  	{ text: "y <span class='texto-no'>NO</span> se olvidaron de sus flores amarillas <span class='texto-no'>SABÉS</span>", time: 204, duration: 4 },
	  
  	{ text: "<span class='texto-amo'>TE AMO LUCILA</span>", time: 210, duration: 4 },
]

// Animar las letras
function updateLyrics(duration) {
	var time = Math.floor(audio.currentTime);
	var currentLine = lyricsData.find(
	  (line) => time >= line.time && time < line.time + duration
	);
  
	if (currentLine) {
	  var fadeInDuration = 0.1; // Duración del efecto de aparición
	  var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
	  lyrics.style.opacity = opacity;
	  lyrics.innerHTML = currentLine.text;
	} else {
	  lyrics.style.opacity = 0;
	  lyrics.innerHTML = "";
	}
}

function updateLyricsHandler() {
	var time = Math.floor(audio.currentTime);
	var currentLine = lyricsData.find(
	  (line) => time >= line.time && time < line.time + line.duration
	);
  
	if (currentLine) {
	  updateLyrics(currentLine.duration); // Usa la duración personalizada
	} else {
	  lyrics.style.opacity = 0;
	  lyrics.innerHTML = "";
	}
}
setInterval(updateLyricsHandler, 1000);

// Función para ocultar el título 
function ocultarTitulo() {
	var titulo = document.querySelector(".titulo");
	titulo.style.animation =
	  "fadeOut 3s ease-in-out forwards"; // Duración y función de temporización de la desaparición
	setTimeout(function () {
	  titulo.style.display = "none";
	}, 3000); // Espera 3 segundos antes de ocultar completamente
  }
  
  setTimeout(ocultarTitulo, 221000);

/*   function setStartTime(seconds) {
	audio.currentTime = seconds;
}

setStartTime(195); // Comienza en el segundo 40 */