//function for changing selected wallet element styling
const walletSelect = () => {
    const wallet1 = document.querySelector('#providerBtn1');
    const wallet2 = document.querySelector('#providerBtn2');
    const wallet3 = document.querySelector('#providerBtn3');
    const blueBackground = 'rgb(167, 182, 227)';

    const walletSelectArray = [wallet1, wallet2, wallet3];

    walletSelectArray.forEach((wallet) => {
        wallet.addEventListener('click', () => {
            if(wallet.style.backgroundColor === blueBackground){
                wallet.style.backgroundColor = 'red';
                console.log(typeof wallet);
            } else {
                wallet.style.backgroundColor = blueBackground;
            }
        });
    });
};

walletSelect();