const hiddenFlag = "R0NTe2hpZGRlbl9hZG1pbl9mb3VuZH0=";

function login(){

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    let message = document.getElementById("message");

    if(username === "admin" && password === "admin123"){

        message.innerHTML = `
        
        <p class="loading">
        Decrypting secure server...
        </p>
        
        `;

        setTimeout(() => {

            message.innerHTML = `
            
            <h2>ACCESS GRANTED</h2>

            <p>Welcome Administrator</p>

            <div class="flag-box">
                FLAG: ${hiddenFlag}
            </div>

            `;

        }, 2000);        

    }
    else{

message.innerHTML = `
        
        <p class="error">
        ACCESS DENIED
        </p>
        
        `;
    }

}