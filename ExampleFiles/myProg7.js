function doPrepRequest() {
	const param = 10;
	getAsyncData(param);
	doInformUser();    
  }
  
  function getAsyncData(x) {
	setTimeout(() => {
	  someAsyncFunc(x, doDisplayResult, dispError);
	}, 0);
  }
  
  function someAsyncFunc(x, result, error) {
	doSomethingComplicated();
	const i = Math.floor(Math.random() * x);
	if (i == 0) {
		error("0 value!");
	} else {
		result(i);
	}
}
  
  function doInformUser() {
	console.log("Request sent");
	document.getElementById("d1").innerHTML = 
	   "request sent";
  }
  
  function doDisplayResult(x) {
	console.log("result: " + x);
	document.getElementById("d2").innerHTML = 
	   "result: " + x;
  }
  
  function dispError(x) {
	console.log("error: " + x);
	document.getElementById("d2").innerHTML = 
	   "error: " + x;
  }
  
  function doSomethingComplicated() {
	let x = 0;
	for(let i = 0; i < 1000000000; i++) {
	  x+= Math.sqrt(i);
	}
	return x;
  }
  