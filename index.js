
const Myplayer = [];

function PickName(element){
  // console.log(element.parentNode.children);
  // console.log(element.parentNode.children[0].innerText);
  const PlayerName = element.parentNode.children[0].innerText;

  const NewPlayers = {
    getPlayers: PlayerName,
  }

  Myplayer.push(NewPlayers)

  console.log(Myplayer.length);
  // console.log(NewPlayers);
}










