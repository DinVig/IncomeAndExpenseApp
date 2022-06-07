import './App.css';

function App() {
  return(
     <ButtonFunction/>
  );
}  

function ButtonFunction() {



  
    const postrequest = async () => {
      
      console.log("started");


      let reqdata = {
        "username" : "dineshkumarSL",
        "emailid" : "dinesh@gmail.com",
        "password" : "pass"
      };
         

      const requestOptions = {
         method: "POST",
         //mode: 'no-cors',
         timeout:10000,
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(reqdata)
      };
      
      const response = await fetch("http://165.22.209.98/login",requestOptions)
      const responseJson = response
      
      console.log(responseJson)



    };

     return(

      <button onClick={postrequest} >Post request</button>

     );
   

  }










export default App;
