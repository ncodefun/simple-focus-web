
import { html } from './renderer.js';

/**
 * Return index of a true thing
 * @param {array} arr a list of things to check
 */
function thing( arr){ return arr }

let x = 9; thing( x);
const arr = [1,2,3]; arr[3] = 4;
const obj = { key1: 'one' , 'key2': 'two' , "key3": 'three' }; obj.key1;

Object.create(); JSON.stringify();

class Thing { constructor() { super(); this.x = 0; }; methodA(){} } new Thing();

document.createElement(); window.localStorage.setItem(); 

/^test\w+[a-z].*[^i]$/g

/// 	lit-html 
html`
	<div id='menu' @click='${ () => { this.open = !this.open } }'>
`

// line comment 
/* block comment */
/** Doc comment */

//* 	These are 'better comments' styles 					

/// 	These are 'better comments' styles 					













///! 	important																	

///- 																						

///+ 																						




///V 	violet																		

///P 	purple																		


//# 	section																		
//- 	notes																			
//!! 	warning																		
//! 	important 


//* ============================================================================

/**
 * trying to put a bit of everything here...
 * @param {string} p1 should be some string
 */
function demo( p1, answer=false){
	for( let i=0; i<10; i++){ /**/ }
	if( answer===true)
		return 'treasure' in p1 || false;
}
const obj = {
	test: 		true,
	'testn': 	'true',
	'smokn': 	'true'
}
const arr = [];
const func = () => (null, undefined, 1 + 2 - 3 / 4 * 5 >= 6 || 7 ** 8 && 9)
func()



//# lit-html with the lit-html extension;  (this color is better comments extension)

const menu = html`
	<div id='menu-header' @click='${ () => { this.open = !this.open } }'>
	${ this.scenes.map( scene => html`
		<div>${ scene.name }</div>
	`)}
`;
const v = html`test`
let obj = { prop: `string template`, path: "C:\\windows" };

var re = /^th[^ia]t\[thing\]\s*([a-zA-Z]+)$/g;





/**
 * trying to put a bit of everything here...
 * @param {string} p1 should be some string
 */
function testingOneTwo(){
	if( test[0] > 1.2 || Number.isNaN(x)){
		for( let t of tests){
			if( typeof t === 'string'){ /**/ }
			const o = Object.assign({ prop:'' })
		}
	}
}

parseInt( this)