/* no-tscheck */

/* block comment */
// line comment 
/** doc block comment */
/** 
 * doc block comment 
 */
/// better line comment

import { html } from './renderer.js';

/**
 * my thing
 * @param {String} dir 		- symbolic
 */
const func = () => (null, undefined, 1 + 2 - 3 / 4 * 5 >= 6 || 7 ** 8 && 9)

/** darker quotes, obj. prop. stay blue even when a string, with blue quotes! */
let obj1 = { key1: 'one' , 'key2': 'two' , "key3": "three", path: "C:\\windows", prop: `string template ${ obj.key1 }` };
var o = {}
const b = 0
o.test
e.target.value.split(/\s+/)

const arr = [1,2,3]; arr[3] = 4;

var re = /^th[^ia]\[ia\]\s*([a-zA-Z]+)$/g;

`string template ${ obj1.key1 }`
let win = {}
win.c

this.x; this.a;

Object.create(); 
Math.round(); 
JSON.stringify(); 
console.log('this works')

localStorage.setItem();
localStorage.myprop
window.localStorage.setItem(); 
window.localStorage.myprop;

if( arr.length > 1) go()
let a = [2].length
for( let k in cell)
	if( k.num===1)

'abc'.endsWith('xyz')
let reg = /xyz.*/.test('abc')

export default 
class Thing { 
	constructor(){ super(); this.x = 0; }; 
	method(){ this.a; Math.abs(3.2) } 
	test(){
		this.scenes = []
		this.scenes.map( v => v+1)
	}
}
new Thing();
Thing.props = {}
define( 'my-thing', Thing)


/// lit-html (needs lit-html extension for proper syntax highlighting) 
const menu = (state) => html`
	<div id='menu-header' @click=${ this.onClickHeader }>
		${ this.scenes.map( scene => html`<div>${ scene.nam }</div>`) }
	</div>
`;

function lachose( arr=[]){

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


export const cycle = (from_val, vals, dir='>>', wrap=null) => /(\>\>|\+|up|1)/.test(dir) ? 
	vals[ nextIndexOf( from_val, vals, wrap !== null ? wrap : dir.endsWith('|')) ] :
	vals[ prevIndexOf( from_val, vals, wrap !== null ? wrap : dir.startsWith('|')) ];




/**  Better comments extension  */
///  	inline docs
////	important info 
//!!	warning
//!		watch out
//?		questions / todo etc.


func()
menu()
lachose()
re;
obj2;


/**
 *  Theme goals: 
 * 	minimal (e.g. single color for all values)
 * 	consistant colors, chosen and hierarchised according to their brightness
 *	"darker" colors for symbols to keep the focus on names
 *	try when possible to use context for even better consistancy: 
 		e.g. quotes on object keys adopt a similar blue as keys, 
		while string quotes adopt a dark green similar to values.