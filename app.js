showNotes();
    let addBtn = document.getElementById("Btn");
    addBtn.addEventListener("click",function(e){
        let addTxt = document.getElementById("notebox");
        let notes = localStorage.getItem("notes");

        if (notes==null) noteObj =[];
        else noteObj = JSON.parse(notes);
        notesObj.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";

    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes==null) notesObj = [];
    else notesObj = JSON.parse(notes);

    let html = "";

    notesObj.forEach(function (element, index) {
        html += `<div class="bg-white note max-w-sm rounded overflow-hidden shadow-lg h-auto ">
                    <div class="px-6 py-4 h-auto w-100% pb-[50px]">
                        <div class="front-bold text-xl mb-2  ">
                        <u>
                        Note ${index + 1}
                        </u>
                        
                        </div>
                        <p class="text-gray-700 text-xl">
                            ${element}
                        </p>

                        <button id="${index}" onclick="deleteNote(this.id)" class="btn text-md border-2 border-gray-300 rounded-lg  mt-[50px] mb-[50px] w-[px] px-2 h-[50px] mx-[50px] hover:border-4 hover:bg-gray-50 ">Delete</button>
                    </div>
                </div>`;
            
        
    });

    let notesElm = document.getElementById("notes");

    if(notesObj.length != 0) notesElm.innerHTML = html;
    else
        notesElm.innerHTML = `Nothing to Show! Please create a Note using above TextBox.`;

}

function deleteNote(index){
    let notes = localStorage.getItem("notes");

    if(notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);

    notesObj.splice(index, 1);


    localStorage.setItem("notes",
    JSON.stringify(notesObj));

    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function() {

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('note');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
            
        }
        else{
            element.style.display = "none";
        }
        
    })
    
});

var input = document.getElementById("notebox");
input.addEventListener("keyup",function (event) {
    if(event.keyCode===13){
        event.preventDefault();
        document.getElementById("Btn").click();
    }
    
});
