
//UI Logic
function runAll(event) {
    const characterName = document.getElementById("userName").value;
        console.log(characterName);

   function handleSelectCharName() {
        const charSelection = document.getElementById("height").value;
        console.log(charSelection);
   }
    
    
    function handleClassSelection(){
       const classSelection = document.querySelector("input[name='class']:checked").value;
         console.log(classSelection);
    
    event.preventDefault();

    }

    handleClassSelection();
    handleSelectCharName();

}


window.addEventListener("load", function() {
    document.getElementById("whole-form").addEventListener("submit", runAll);
    


});