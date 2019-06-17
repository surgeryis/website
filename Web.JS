function dropDown(){
	document.getElementById("myDropdown").classList.toggle("show");
}
windiow.onclick = function(event){
	if (!event.target.matches('.dropbtn')){
		let drop = document.getElenentsByClassName("dropdown-content");
		let i;
		for(i = 0; i < dropdowns.length; i++){
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')){
			openDropdown.classList.remove('show');
	}
	}
	}
	}