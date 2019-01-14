import { test } from './lib.js';

function testExport (){
	console.log(test);
}

let foo = document.getElementById("test-button");
foo.addEventListener("click", testExport);