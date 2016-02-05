var s=[
"gin.htm",
"http://freebitco.in/?r=2025386",
"http://bitcoinzebra.com/?ref=6c5607377afc",
"http://www.weekendbitcoin.com/?ref=283875",
"http://moonbit.co.in/?ref=d2a6c6fadbf8",
"http://bitcoinker.com/faucet?ref=791503364021",
"http://www.satoshicountry.org/?r=114655",
"http://www.satoshicity.org/?r=125071",
"http://bonusbitcoin.co/?ref=4EF51FE875CA",
"http://takefreebitcoin.com/?r=ca8b4c0fa0",
"http://claimbtc.com/?r=a8676ec057",
"http://www.coinpearl.me/?r=7T8dOw&a=",
"http://www.earnbtc.me/?r=7T8dOw&a=",
"http://www.earn-free-bitcoins.com/?r=7T8dOw&a=",
"http://www.freebitcoinsfast.com/?r=7T8dOw&a=",
"http://www.freebitcoin.mobi/?r=7T8dOw&a=",
"http://www.freebitcoin.ws/?r=7T8dOw&a=",
"http://www.freecoinbit.com/?r=7T8dOw&a=",
"http://www.raincoins.net/?r=7T8dOw&a=",
"http://www.smurfcoin.com/?r=7T8dOw&a=",
"http://www.bitcoins4.me/",
"http://bitcoiner.net/",
"http://www.btcflow.net/",
"http://www.freebitcoins.me/?a=",
"http://www.thefreebitcoins.com/?a=",
"http://www.srbitcoin.com/?a=",
"http://www.bitcats.net/?a=",
"http://www.canhasbitcoin.com/?a=",
"http://www.elbitcoingratis.es/?a=",
"http://www.rawbitcoins.com/?a=",
"http://www.fr33bitcoins.com/?a=",
"http://www.bitcoins4free.me/?a=",
"http://www.freebtc4all.com/?a=",
"http://www.virtualfaucet.com/?a=",
"http://www.faucetbtc.com/?a=",
"http://www.btc4you.com/?a=",
"http://www.nioctib.net/get-free-bitcoins/?a=",
"http://www.btcmine.net/?a=",
"http://www.thebitcoin.me/?a=",
"http://www.greencoins.org/?a=",
"http://www.bitcoinspain.net/?a=",
"http://www.freebitcoins4u.com/?a=",
"http://www.freebitcoinlottery.com/?a=",
"http://multifauceted.com",
"http://www.cleverpuffin.com/faucet/?id=19158",
"http://www.rabbitcoin.tk",
"http://www.freakfaucet.com",
"http://superfaucet.com",
"http://www.megafaucet.com",
"http://grifobitcoin.com",
"http://funnyfaucet.com",
"http://bitcoinhahn.de",
"http://faucet.galat.org",
"http://bitcoinflood.com/faucet/",
"http://www.bitcrate.net/index.php?ref=3665"
];
var adr,i,x=0,c=s.length;
function address() {
adr=prompt('Enter your bitcoin address:');
s=s.map(function(x){
  return x.indexOf("a=") != -1 ? x + adr : x; 
});
}
function next(){
x+=1;
if (x>c-1)
  {
  x=0;
  }
changeSrc();
}
function prev(){
x-=1;
if (x<=0)
  {
  x=c-1;
  }
changeSrc();
}
function jumpTo() {
i=prompt("Enter a number to skip to that faucet.");
x=0;
while (i!=x) {
  if (x>c-2) {
  break;
  }
  x+=1;
}
changeSrc();
}
function newTab() {
var win=window.open(document.getElementById("fm").src, '_blank');
win.focus();
}
function changeSrc() {
document.getElementById("fm").src=s[x];
}
