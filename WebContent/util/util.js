const appId = "094aa776d64c50d5b9e9043edd4ffd00";

function checkIsNotNull(data) {
	console.log("util js loaded")
    if (data === undefined || data === "undefined" || data == "" || data == null || data == "null" || 
    		data == "NULL") {
        return false
    }
    return true
}

function arrayContains(element, array){
    return (array.indexOf(element) > -1);
}