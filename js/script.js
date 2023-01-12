
//UI Logic
function runAll(event) {
    event.preventDefault();
    

    handleCharName();
    handleSelectCharHeight();
    handleClassSelection();
}

    function handleCharName() {
    }

    function handleSelectCharHeight() {
        const charHeight = document.getElementById("height").value;
        let race = 'none';
        if (charHeight === '6'){
            race = "Elf"
        } else if (charHeight === '5'){
            race = "Human"
        } else if (charHeight === '4'){
            race = "Dwarf"
        }
        return race;
    }
    
    function handleClassSelection(){
        const classSelection = document.querySelector("input[name='classSelect']:checked").value;
        let className = 'none';
        if (classSelection === '1'){
            className = "Mage"
        } else if (classSelection === '2'){
            className = "Knight"
        } else if (classSelection === '3'){
            className = "Rogue"
        }
        return className;

    }


window.addEventListener("load", function() {
    document.getElementById("whole-form").addEventListener("submit", runAll);
    


});