function doPrepRequest() {
	getAsyncData("http://ip-api.com/json/www.bs7-augsburg.de", doDisplayResult, doDisplayError)
	doInformUser();    
}
  
 function getAsyncData(myData, result, error){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", myData, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200){
          result(xhr.response);
        } else {
          error(xhr.status);
        }
      }
    }
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8" );
    xhr.send();
  }
    
  function doInformUser() {
    console.log("Status: sent");
    document.getElementById("d1").innerHTML = 
	   "request sent";
  }
  
  function doDisplayResult(x) {
    console.log("result: " + x);
    document.getElementById("d2").innerHTML = 
	   "result: " + x;
  }

  function doDisplayError(x) {
    console.log("Error: " + x);
    document.getElementById("d2").innerHTML = 
	   "Error: " + x;
  }
    
  
  