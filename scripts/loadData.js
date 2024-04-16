// Function to load default values into form fields
function loadDefaultValues() {

    // Default values for each field
    const defaultValues = {
        userName: "JohnDoe",
        passWord: "Password123",
        gender: "Male",
        cardNumber: "1234567890123456",
        expDate: "1225",
        cvvNumber: "123"
    };

    // Loop through each field and set its value
    for (let field in defaultValues) {
        if (defaultValues.hasOwnProperty(field)) {
            
            if(field == "gender"){
                const radios = document.getElementsByName(field);
                    for (let i = 0; i < radios.length; i++){
                        if (radios[i].value === defaultValues[field]) {
                            radios[i].checked = true;
                            break;
                        }
                    }
                
                }
            else{
                 document.getElementById(field).value = defaultValues[field];
            }
        }
    }
}

//if i want to print default data on page load use this 
// window.onload = loadDefaultValues;
