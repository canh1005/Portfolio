function Validation() {
    this.kiemTraRong = function (input, spanId, message) {
        if(input === ""){
            getEle(spanId).style.display = 'block';
            getEle(spanId).innerHTML = message;
            return true;
        }
        getEle(spanId).style.display = 'none';
        return false;
    }
    this.kiemTraEmail = function (input, spanId, message){
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(input.match(mailformat)){
            getEle(spanId).style.display = 'none';
            return false;
        }
        getEle(spanId).style.display = 'block';
        getEle(spanId).innerHTML = message;
        return true;
    }
}

