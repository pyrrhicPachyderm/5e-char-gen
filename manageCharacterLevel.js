var characterLevel = 0;

function changeCharacterLevel(){
	var newCharacterLevel = Number(document.getElementById("characterLevelSelect").value);
	
	var characterLevelForms = document.getElementById("characterLevelForms");
	
	while(newCharacterLevel > characterLevel){
		var newLevelForm = document.createElement("form");
		newLevelForm.setAttribute("id", "levelForm" + (characterLevel + 1));
		
		var newLevelFormTitle = document.createTextNode("Level " + (characterLevel + 1) + ": ");
		newLevelForm.appendChild(newLevelFormTitle);
		
		var newLevelClassSelect = document.createElement("select");
		newLevelClassSelect.setAttribute("id", "classSelect");
		//TODO: Set class select options
		newLevelForm.appendChild(newLevelClassSelect);
		
		characterLevelForms.appendChild(newLevelForm);
		
		var newLevelLinebreak = document.createElement("br");
		characterLevelForms.appendChild(newLevelLinebreak);
		
		characterLevel++;
	}
	
	while(newCharacterLevel < characterLevel){
		characterLevelForms.removeChild(characterLevelForms.lastChild);//removes newLine
		characterLevelForms.removeChild(characterLevelForms.lastChild);//removes form
		
		characterLevel--;
	}
	
	console.log("Character Level has been changed to " + characterLevel);
};
