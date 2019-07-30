
let localStorage_s = {
    setLocalStorage(key, value){
        if(Object.prototype.toString.call(value) === '[object Object]'){
            value = JSON.stringify(value)
        }
        window.localStorage.setItem(key, value);
    },
    getLocalStorage(key){
        if (!key)return null;
        let value = window.localStorage.getItem(key);
        if(typeof value === 'string'){
            try{
                value = JSON.parse(value)
            }catch(e){
                value = value;
            }
        }
        return value;
    },
    delLocalStorage(key){
        if (!key)return null;
        window.localStorage.removeItem(key);
    },


    /**
     * 设置 localStorage
     * @param key
     * @param value
     * @param expire 单位秒
     */
    set(key, value, expire){
        expire = typeof expire == 'number' ? expire * 1000 : 1000*60*60*24*365*10; // 默认10年
        this.delLocalStorage(key);
        let _time = new Date().getTime(),
            _age = expire,
            data = {};

        data._value = value;
        // 加入时间
        data._time = _time;
        // 过期时间
        data._age = _time + _age;

        try {
            this.setLocalStorage(key, data);
            return true;
        } catch (e) {
            return false;
        }
    },


    /**
     * 判断一个 localStorage 是否过期
     * @param key
     * @returns {boolean}
     */
    _isExpire(key) {

        let isExpire = true,
            data = this.getLocalStorage(key),
            now = new Date().getTime();

        if (data) {
            // 当前时间是否大于过期时间
            isExpire = now > data._age ? true : data; // 直接返回数据,在get里就不在取值了
        } else {
            // 没有值也是过期
        }
        return isExpire;
    },

    /**
     * 获取某个 localStorage 值
     * @param key
     * @returns {*}
     */
    get(key) {
        let result = this._isExpire(key),
            data = null;

        if (result !== true) {
            data = result._value;
        }

        return data;
    },

    /**
     * 删除缓存
     * @param key
     * @returns {boolean}
     */
    del(key){
        try {
            this.delLocalStorage(key);
            return true;
        } catch (e) {
            return false;
        }
    }
};

export default localStorage_s;