export function postMessage(worker, msg) {
    return worker.postMessage(JSON.stringify(msg));
}

export function getMessage(msgEv) {
    return JSON.parse(msgEv.data);
}
