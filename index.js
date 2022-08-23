




const Myplayer = [];

function Collect(NewPlayerName){

  
  const NewCreate = document.getElementById('create');
  
  NewCreate.innerHTML = '';
  
  for(let i = 0; i < NewPlayerName.length; i++){
  

    
    
    const Findname = Myplayer[i].getPlayers;
    
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
  
  const PlayerName = element.parentNode.children[0].innerText;

  const NewPlayers = {
    getPlayers: PlayerName,
  }

  Myplayer.push(NewPlayers);

  Collect(Myplayer);

  document.getElementById('select').innerText = Myplayer.length;

  
}



document.getElementById('calculate').addEventListener('click', function(){

  const Input = document.getElementById('budgetCal');
  const InputValue = Input.value;

  const PlayerValue = document.getElementById('create');
  const TotalPlayerValuestring = PlayerValue.innerText;
  const TotalPlayerValue = parseFloat(TotalPlayerValuestring);


  const Expenses = document.getElementById('expenses');
  const TotalExpensesStr = Expenses.innerText;
  const TotalExpenses = parseFloat(TotalExpensesStr);
  

  const NewValuestr = TotalExpenses * TotalPlayerValue ;
  const NewValue = parseFloat(NewValuestr);

  Expenses.innerText = NewValue;



})


















