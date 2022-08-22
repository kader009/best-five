

// first get player here

const Myplayer = [];

function Collect(NewPlayerName){
  // console.log(NewPlayerName); 

  
  const NewCreate = document.getElementById('create');
  
  NewCreate.innerHTML = '';
  
  for(let i = 0; i < NewPlayerName.length; i++){
    // console.log(Myplayer[i].getPlayers);
    const Findname = Myplayer[i].getPlayers;
    // console.log(Findname);
    const ol = document.createElement('ol');
    ol.style.color = 'white'
    ol.innerHTML = `
    <ol>
    <li>${Findname } </li>
    </ol>
    
    `;
    
    NewCreate.appendChild(ol);
    

  }
    

}


// get player value

function PickName(element){
  // console.log(element.parentNode.children);
  // console.log(element.parentNode.children[0].innerText);
  const PlayerName = element.parentNode.children[0].innerText;

  const NewPlayers = {
    getPlayers: PlayerName,
  }

  Myplayer.push(NewPlayers);

  Collect(Myplayer);

  document.getElementById('select').innerText = Myplayer.length;

  // console.log(Myplayer.length);
  // console.log(NewPlayers);
}


// add addeventlistener

document.getElementById('calculate').addEventListener('click', function(){
  // console.log('you click it');
  const InputValue = document.getElementById('budgetCal');
  const PlayerValue = document.getElementById('create');

  const NewValue = InputValue * PlayerValue;
  console.log(NewValue);
})




























