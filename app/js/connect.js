/* To connect using MetaMask */
async function connect() {
    if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        window.web3 = new Web3(window.ethereum);
        const account = web3.eth.accounts;
        //Get the current MetaMask selected/active wallet
        const walletAddress = account.givenProvider.selectedAddress;
        console.log(`Wallet: ${walletAddress}`);
        const walletBalance = await web3.eth.getBalance(walletAddress)
        const walletBtn = document.getElementById("wall-btn")
        walletBtn.innerHTML = `Connected ETH Balance = ${walletBalance} ETH`
    } else {
        console.log("No wallet");
    }
}