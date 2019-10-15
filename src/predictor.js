export class CoinPredictor {

    constructor() {

        this.url = `https://api.coindesk.com/v1/bpi/currentprice.json`;

        this.bitcoinprice = 0;
        this.collapse = false;
        this.thread = setInterval(() => {
            if (!this.collapse) {
                this.Call();
            }

        }, 6000);
        this.killthread;
    }
    Call() {
        var theobj = this;
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {

            if (this.readyState === 4 && this.status === 200) {
                const response = JSON.parse(this.responseText);
                theobj.bitcoinprice = response.bpi.USD.rate;
                theobj.bitcoinprice = theobj.bitcoinprice.split(',').join('');

            }
        }
        request.open("GET", this.url, true);
        request.send();
    }

    Kill() {
        var theobj = this;
        theobj.killthread = setInterval(() => {
            if (this.collapse) {
                theobj.bitcoinprice--;

            }
        }, 1000);



    }
}