var array_memoria = ['a','a','b','b','c','c','d','d','e','e','f','f','g','g','h','h','i','i','j','j'];
// for( var i = 0; i<array_memoria.length ; i++){
// 	var val = document.createElement('img');
// 	val.src=array_memoria[i];
// 	val.setAttribute('class','img'+i);
// }
// val $('<img>',{
// 	"src":array_memoria[i],
// 	"class":'img'+i;
// });
var valores_memoria = [];
var memoria_baraja_ids = [];
var barajas_volteadas = 0;


Array.prototype.memoria_bajara_mosaico = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function nuevaTabla(){
	barajas_volteadas = 0;
	var output = '';
    array_memoria.memoria_bajara_mosaico();
	for(var i = 0; i < array_memoria.length; i++){
		output += '<div id="baraja_'+i+'" onclick="memoriaVoltearBaraja(this,\''+array_memoria[i]+'\')"></div>';
	}
	document.getElementById('memoria_tabla').innerHTML = output;
}
nuevaTabla();
function memoriaVoltearBaraja(baraja,val){
	if(baraja.innerHTML == "" && valores_memoria.length < 2){
		baraja.style.background = 'white';
		baraja.innerHTML = '<img src="assets/img/img'+val+'.jpg" class = "img'+val+' style="background-size:contain; margin:0px;"" />';

		// if(val == 'A'){
		// 	var estrella;
		// 	estrella.createElement('IMG');
		// 	estrella.style.background = 'url(assets/css/carta1.jpg)';
		// 	val= estrella;
		// }
		if(valores_memoria.length == 0){
			valores_memoria.push(val);
			memoria_baraja_ids.push(baraja.id);
		} else if(valores_memoria.length == 1){
			valores_memoria.push(val);
			memoria_baraja_ids.push(baraja.id);
			if(valores_memoria[0] == valores_memoria[1]){
				barajas_volteadas += 2;
				valores_memoria = [];
            	memoria_baraja_ids = [];
				if(barajas_volteadas == array_memoria.length){
					swal({
					  title: 'FELICIDADES ,GANASTE!',
					  width: 600,
					  padding: 100,
					  imageUrl: 'https://cdn.pixabay.com/photo/2013/07/13/12/41/cup-160117_960_720.png',
					})
					document.getElementById('memoria_tabla').innerHTML = "";
					nuevaTabla();
				}
			} else {
				function voltear2Back(){
				    // voltear 2 barajas 
				    var baraja_1 = document.getElementById(memoria_baraja_ids[0]);
				    var baraja_2 = document.getElementById(memoria_baraja_ids[1]);
				    baraja_1.style.background = 'url(assets/img/arbol.jpg)';
				    baraja_1.style.backgroundSize = "contain";
				    baraja_1.style.backgroundRepeat = "no-repeat";
            	    baraja_1.innerHTML = "";
				    baraja_2.style.background = 'url(assets/img/arbol.jpg)';
            	    baraja_2.style.backgroundSize = "contain";
				    baraja_2.style.backgroundRepeat = "no-repeat";
            	    baraja_2.innerHTML = "";
				    // Limpiar arrays
				    valores_memoria = [];
            	    memoria_baraja_ids = [];
				}
				setTimeout(voltear2Back, 800);
			}
		}
	}
}