let cookie_s = {
    /**
	 * 设置cookie
	 * @param {string} sName cookie名
	 * @param {string} sValue cookie值
	 * @param {int} iExpireSec 失效时间（秒）
	 * @param {string} sDomain 作用域
	 * @param {string} sPath 作用路径
	 * @param {bool} bSecure 是否加密
	 * @return {void}
	 */
    set(sName,sValue,iExpireSec,sDomain,sPath,bSecure){
		if(sName==undefined) {
			return;
		}
		if(sValue==undefined) {
			sValue="";
        }
        if(Object.prototype.toString.call(sValue) === '[object Object]' || Object.prototype.toString.call(sValue) === '[object Array]'){
            sValue = JSON.stringify(sValue)
        }
        let oCookieArray = [sName+"="+escape(sValue)];
		if(!isNaN(iExpireSec)){
			let oDate = new Date();
            oDate.setTime(oDate.getTime()+iExpireSec*1000);
            if(iExpireSec != 0){
                oCookieArray.push("expires=" + oDate.toGMTString())
            }else{
                iExpireSec = '';
            }
		}
		if(sDomain!=undefined){
			oCookieArray.push("domain="+sDomain);
		}
		if(sPath!=undefined){
			oCookieArray.push("path="+sPath);
		}
		if(bSecure){
			oCookieArray.push("secure");
		}
		document.cookie=oCookieArray.join("; ");
	},
	/**
	 * 获取cookie
	 * @param {string} sName cookie名
	 * @param {string} sValue 默认值
	 * @return {string} cookie值
	 */
	get(sName,sDefaultValue){
		let sRE = "(?:; |^)" + sName + "=([^;]*);?";
		let oRE = new RegExp(sRE);
		
		if (oRE.test(document.cookie)) {
            let value = unescape(RegExp["$1"]);
            if(typeof value === 'string'){
                try{
                    value = JSON.parse(value)
                }catch(e){
                    value = value;
                }
                
            }
			return value;
		} else {
			return sDefaultValue||null;
		}
	},
	/**
	 * 删除cookie
	 * @param {string} sName cookie名
	 * @param {string} sDomain 作用域
	 * @param {sPath} sPath 作用路径
	 * @return {void} 
	 */
	del(sName, sDomain, sPath){
		let oDate = new Date();
		cookie_s.set(sName,"", -oDate.getTime()/1000, sDomain, sPath);
	}	
}

export default cookie_s;
