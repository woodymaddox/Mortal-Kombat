let playerNameForm = document.getElementById("playerName");
var fighters = [
    {name:"Sub Zero", image:''},
    {name:"Scorpion", image:'scorpion.jpg'},
    {name:"Kitana",image:''},
    {name:"Raiden",image:'' }];

let ninjas = {};
const ninjaCards = [];



//Hide jumbo //
const hideJumbo = () => {
    document.getElementById('initJumbo').classList.add('d-none');
    document.getElementById('ninjaForm').classList.remove('d-none');

};

const ninjaSorting = () => {
    playerName = playerNameForm.value;
    ninjaList = document.getElementById('ninjaList');
    var child = document.createElement('div');
    child.classList.add('col-12', 'col-sm-12', 'col-md-6', 'col-lg-4', 'py-2');
    var str = '';
    str += '<div class="card">';
    // str += `<img src="https://cdnb.artstation.com/p/assets/images/images/014/605/715/large/mizuri-official-subzeromk11.jpg?1544665114" class='img-fluid'></img>`;
    str += '<div class="card-body text-center">';
    str += '   <h5 class="card-title">'+playerName+'</h5>';
    str += '   <p class="card-text">'+ fighters[getRandomNum(3)]+'.</p>';
    str += '   <span class="btn btn-danger" onclick="remove(this)">Delete</span>';
    str += '</div>';
    str += '</div>';
    child.innerHTML = str;
    ninjaList.appendChild(child);
}

const remove = (deletedFighter) => {
    deletedFighter.parentNode.parentNode.parentNode.remove();
};

const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const getRandomNum = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const createNinjaObject = (name) => {
    let fighter = fighters[getRandomNum(3)];
   ninjas.name = name;
    ninjas.fighter = fighter;
ninjas.isDeleted = false;
    

};

const createNinjaCard = (array) => {
  let domstring = "";
 array.foreach(ninjas => {
    domString += `<div class="card">`;
    domString += `<h2>${ninjas.name}</h2>`;
    domString += `<h2>${ninjas.fighter}</h2>`;
    domString += `<h2>${ninjas.isdeleted}</h2>`;
    domString += `<`
    domString += `</div>`;
});


printToDom("ninjaCards", domString);
}





