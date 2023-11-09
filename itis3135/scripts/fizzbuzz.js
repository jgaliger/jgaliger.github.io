
  


    function generateFizzBuzz(){
        const fizz="fizz";
        const buzz="buzz";
        const bang="BANG";
        let arr = [];
    for(let i=1;i<=125;i++)
    {
        if(i%3 ===0 && i%5===0 && i%7===0){
            arr.push(fizz + buzz + bang);
        }
        else if(i%7===0 && i%5===0){
            arr.push(buzz+bang);
        }
        else if(i%3 ===0 && i%7===0){
            arr.push(fizz+bang);
        }
        else if(i%3 ===0 && i%5===0){
            arr.push(fizz+buzz);
        }
        else if(i%7===0){
            arr.push(bang);
        }
        else if(i%5===0){
            arr.push(buzz);
        }
        else if(i%3 ===0){
            arr.push(fizz);
        }
        else{
            arr.push(i);
        }


    }
    console.log(arr);
    const resultContainer = document.getElementById("result"); 
    const paragraph = document.createElement("p");
    paragraph.textContent = arr.join(", "); 
    resultContainer.appendChild(paragraph);
    
    }
    generateFizzBuzz();