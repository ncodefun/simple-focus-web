/* no-tscheck */

/**
 *  Theme goals: 
 * 	minimal (e.g. single color for all values)
 * 	consistant colors, chosen and hierarchised according to their brightness
 *	darker colors for symbols to keep the focus on names
 *	try when possible to use context for even better consistancy: 
 		e.g. quotes on object keys adopt a similar blue as keys, 
		while string quotes adopt a dark green similar to values.
 */	
// line comment 
/* block comment */

import { html } from './renderer.js';

/**
 * Get the next or prev value of an array with current value
 * @param {any} from_val	- initial value
 * @param {Array} vals		- array
 * @param {String} dir 		- symbolic representation of direction and wrapping:
 * 													// >> << >>| |<< + - up down 1 -1
 * @return {any}					-	the next or prev value
 * Usage:  wrap -> cycle( val, vals, '>>'); 	no-wrap -> cycle( val, vals, '>>|') 
 */
export const cycle = (from_val, vals, dir='>>', wrap=null) => /(\>\>|\+|up|1)/.test(dir) ? 
	vals[ nextIndexOf( from_val, vals, wrap !== null ? wrap : dir.endsWith('|')) ] :
	vals[ prevIndexOf( from_val, vals, wrap !== null ? wrap : dir.startsWith('|')) ];

export default class Thing { 
	constructor(){ super(); this.x = 0; }; 
	methodA(){ console.log('this works')} 
}
new Thing();


export function lachose( arr){

	labelA:
	for( let i=0; i < arr.length; i++){
		if( i === 9){
			val = arr[ i];
			break labelA
		}
	}
	switch( val){
		case 10: 
			return true
		default: 
			return false
	}
}

/// darker quotes, keys stays blue even if string, with blue quotes! ///

const obj1 = { key1: 'one' , 'key2': 'two' , "key3": "three" }; obj1.key1;

let obj2 	 = { prop: `string template ${ obj1.key1 }`, path: "C:\\windows" };

const arr  = [1,2,3]; arr[3] = 4;

var re = /^th[^ia]t\[thing\]\s*([a-zA-Z]+)$/g;

Object.create(); JSON.stringify(); document.createElement(); window.localStorage.setItem(); 

const func = () => (null, undefined, 1 + 2 - 3 / 4 * 5 >= 6 || 7 ** 8 && 9)

/// 	lit-html (needs lit-html extension for proper syntax highlighting) 
const menu = () => html`
	<div id='menu-header' @click='${ () => { this.open = !this.open } }'>
		${ this.scenes.map( scene => html`<div>${ scene.name }</div>`) }
	</div>`;






/**  Better comments extension  */
///  	notes
////	important info 
//!!	warning
//!		watch out
//?		questions / todo etc.


func()
menu()
lachose()
re;
obj2;