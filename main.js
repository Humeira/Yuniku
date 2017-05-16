var yuniku = {
    filter: function (array, key) {
        var noDuplicatesArray = [];
        var temp = [];
        for (var i in array) {
            temp[array[i][key]] = array[i];
        }
        for (var i in temp) {
            noDuplicatesArray.push(temp[i]);
        }
        return noDuplicatesArray;
    }
}
