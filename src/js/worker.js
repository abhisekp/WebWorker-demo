self.addEventListener('message', (msgEv) => {
    const data = JSON.parse(msgEv.data);
    if(data === 'GO') {
        go();
    }
}, false);

function go() {
    console.log('Going...');
    let x = 0;
    while(x < Math.pow(10, 9)) {
        x++;
    }
    self.postMessage(JSON.stringify(x));
    self.close();
}
