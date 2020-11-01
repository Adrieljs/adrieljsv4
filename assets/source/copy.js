function copyer(containerid) {
    var elt = document.getElementById(containerid);
    if (document.selection) { // IE
        if(elt.nodeName.toLowerCase() === "input"){
            document.getElementById(containerid).select();
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
        }else{
            var range = document.body.createTextRange();
            range.moveToElementText(document.getElementById(containerid));
            range.select();
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
        } 

    } else if (window.getSelection) {
        if(elt.nodeName.toLowerCase() === "input"){
            document.getElementById(containerid).select();
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
        }else{
            var range_ = document.createRange();
            range_.selectNode(document.getElementById(containerid));
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range_);
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
    }
    }
}