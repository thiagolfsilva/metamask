function logclick(){
    console.log("I was clicked");
}

ethereum = window.ethereum;

const ethereumButton = document.querySelector('.enableEthereumButton');

ethereumButton.addEventListener('click', () => {
  //Will Start the metamask extension
  ethereum.request({ method: 'eth_requestAccounts' });
  console.log("ethereum button was clicked");
});