function deleteEmptyProperty(object){
    for (var i in object) {
        var value = object[i];
        // console.log('typeof object[' + i + ']', (typeof value));
        if (typeof value === 'object') {
            if (Array.isArray(value)) {
                if (value.length == 0) {
                    delete object[i];
                    console.log('delete Array', i);
                    continue;
                }
            }

            deleteEmptyProperty(value);

            if (isEmpty(value)) {
                console.log('isEmpty true', i, value);
                delete object[i];
                console.log('delete a empty object');
            }
        } else {
            if (value === '' || value === null || value === undefined) {
                delete object[i];
                console.log('delete ', i);
            } else {
                console.log('check ', i, value);
            }
        }
    }
}


function isEmpty(object) {
    for (var name in object) {
        return false;
    }
    return true;
}



var object = {
    'name' : 'Sodino.com',
    'pEmpty' : '',
    'pNull' : null,
    'pUndefined' : undefined,
    'pArr' : [],
    'pArr1' : [
        {}
    ],
    'pObj' : {'arr':[]},
    'pObj1' : {
        'ele' : '',
        'obj' : {}
    }
};

deleteEmptyProperty(object);
console.log('---------------------------------------------------');
var string = JSON.stringify(object);
console.log(string);
