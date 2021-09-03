const tail = (arr) => {
    const find = [];
    let k = 0;
    for (let i = 1; i < arr.length; i++) {
            find[k] = arr[i];
            k++;
        }
        if (arr.length==0) return null;
        return find
    }
    
