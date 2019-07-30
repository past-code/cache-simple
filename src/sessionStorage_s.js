let sessionStorage_s = {
    set(key, value){
        this.del(key);
        if(Object.prototype.toString.call(value) === '[object Object]' || Object.prototype.toString.call(value) === '[object Array]'){
            value = JSON.stringify(value)
        }
        window.sessionStorage.setItem(key, value);
    },
    get(key){
        if (!key)return null;
        let value = window.sessionStorage.getItem(key);
        if(typeof value === 'string'){
            try{
                value = JSON.parse(value)
            }catch(e){
                value = value;
            }
            
        }
        return value;
    },
    del(key){
        if (!key)return null;
        window.sessionStorage.removeItem(key);
    },
}

export default sessionStorage_s;