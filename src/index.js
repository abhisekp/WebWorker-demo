import './css/app';
console.log('Initiated');
import {postMessage, getMessage} from './js/worker-mixin';

document.addEventListener('DOMContentLoaded', init);

let workerBlob;
require(['raw!./js/worker'], (val) => {
    workerBlob = new Blob([val], {type: 'text/javascript'});
    console.log(workerBlob);
});

function init() {
    document.querySelector('.btn').addEventListener('click', (ev) => {
        ev.preventDefault();
        console.log('Clicked');

        if(!workerBlob) {
            return;
        }
        const workerURL = URL.createObjectURL(workerBlob);
        const worker = new Worker(workerURL);
        URL.revokeObjectURL(workerURL);

        worker.addEventListener('message', (msgEv) => {
            const data = getMessage(msgEv);
            console.log('Long Running Process result:', data);
        });
        postMessage(worker, 'GO');
    }, false);

    document.addEventListener('click', () => console.log('Doc clicked'));
}
