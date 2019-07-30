# cache-simple
A Simple Tool for Processing cookie localStorage sessionStorage

## Installation
```
$ npm i -S cache-simple
```
## In node.js


```
import { cookie_s, localStorage_s, sessionStorage_s } from 'cache-simple';

/**
 * 
 * or
import cacheSimple from 'cache-simple';
let cookie_s = cacheSimple.cookie_s,
    localStorage_s = cacheSimple.localStorage_s,
    sessionStorage_s = cacheSimple.sessionStorage_s;
 * 
 * 
 */

// input data support  String Object Array
let data = "this is a test string";
// let data = {
//     a: '1',
//     b: {
//         c: 'c',
//         d: 'd'
//     },
//     e: [1, 2, 3]
// }

// let data = [
//     {name: 'zhangsan',age: 18},
//     {name: 'lisi',age: 19}
// ]
/**
 * Set cookie
 * @param {string}  cookie name
 * @param   cookie value
 * @param {int}  Failure time (seconds)
 * @param {string}  Scope
 * @param {string}  Path of action
 * @param {bool}  Encryption or not
 **/
 //forExample:
 //set(sName,sValue,iExpireSec,sDomain,sPath,bSecure) //Complete params
 cookie_s.set('key',data,1*60*60*24*7)

 /**
 * get cookie
 * @param {string}  cookie name
 * @param {string}  Default values
 * @return  cookie value
 */
//forExample:
cookie_s.get('key')

 /**
 * delete cookie
 * @param {string}  cookie name
 * @param {string}  Scope
 * @param {sPath}   Path of action
 */
//forExample:
cookie_s.del('key')



/**
 * Set localStorage_s
 * @param {string}  localStorage name
 * @param   localStorage value
 * @param {int}  Failure time (seconds)
 **/
 //forExample:
localStorage_s.set('key',data,1*60*60*24*7)

 /**
 * get localStorage
 * @param {string}  get localStorage name
 * @return  localStorage value
 */
 //forExample:
localStorage_s.get('key')


/**
 * delete localStorage
 * @param {string}  localStorage name
 */
//forExample:
localStorage_s.del('key')




/**
 * Set sessionStorage
 * @param {string}  sessionStorage name
 * @param   sessionStorage value
 **/
 //forExample:
 sessionStorage_s.set('key',data)

 /**
 * get sessionStorage
 * @param {string}  get sessionStorage name
 * @return  sessionStorage value
 */
 //forExample:
 sessionStorage_s.get('key')


/**
 * delete sessionStorage
 * @param {string}  sessionStorage name
 */
//forExample:
sessionStorage_s.del('key')

```
