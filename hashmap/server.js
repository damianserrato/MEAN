let hashmap = [];
hashmap.length = 30;

String.prototype.hashCode = function() {
    var hash = o;
    if(this.length == 0) {
        return hash;
    }
    for(i=0; i<this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash) + char;
        hash &= hash;
    }
    return hash;
}
let hashedKey = "role".hashCode();

function mod(input, div) {
    return (input % div + div) % div;
}
var idx = mod(hashedKey, hashMap.length);