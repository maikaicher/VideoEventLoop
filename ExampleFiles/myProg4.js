function myProgram() {
	doSayHello();
	setTimeout(() => {
		doSomethingComplicated();
	}
	, 2000);
	doSayHi();	
}

function doSayHello() {
	console.log("hello");
	let d1 = document.getElementById("d1").innerHTML = "hello";
  }
  
  function doSayHi() {
	console.log("hi");
	document.getElementById("d2").innerHTML = "hi";
  }

  function doSayReady() {
	document.getElementById("d3").innerHTML = "later";
	console.log("later");
  }
  
  function doSomethingComplicated() {
	let x = 0;
	for(let i = 0; i < 1000000000; i++) {
	  x+= Math.sqrt(i);
	}
	doSayReady();
	return x;
  }
  