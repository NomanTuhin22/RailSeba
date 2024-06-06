

// *********Card 1 *****selectior******
let card_One = document.getElementById('card_One');
// *********Card 2 ****selectior*******
let email = document.getElementById('email');
let password = document.getElementById('password');
let worning_div = document.getElementById('worning_div');
let loggin_Btn = document.getElementById('loggin_Btn');
let create_Btn = document.getElementById('create_Btn');
let card_Two = document.getElementById('card_Two');
let remember = document.getElementById('remember');
let label_Password = document.getElementById('label_Password');
let forget_Password = document.getElementById('forget_Password');
// *********Card 3 *****selectior******
let card_Three = document.getElementById('card_Three');
let get_Email = document.getElementById('get_Email');


// *******create worning******p****
let p = document.createElement('p');
    p.classList.add('worning');

// *************worning_F*****F*********
let worning_F = (worning) => {
    worning_div.children[0].style.display='none';
    worning_div.children[1].style.display='none';
    p.innerText = `${worning}` ;
    worning_div.appendChild(p);
    //****worning append***
    let clear = setInterval(() => {
        worning_div.children[0].style.display='block';
        worning_div.children[1].style.display='block';
        p.remove();
        clearInterval(clear);
    },5000)
}
// ***********forget_Password_F*************
let forget_Password_F = () => {
   let passwordValue = password.value;
   if(!email.value == '' && !passwordValue.match(/^([A-Z]{1})([a-z]{3})(\d{2})([$&+,:;=?@#|'<>.-^*()%!]{2})/)) {
      label_Password.innerText = 'New Password';
    //Rail00@#
     let num = Math.floor(Math.random(100) * 10);
     let newPassword = `Abcd0${num}#@`;
     //  ****copy clipboard***
     navigator.clipboard.writeText(newPassword);
     worning_F(newPassword);
   }
   else{
    let empty ='Empty @email !!'
    worning_F(empty);
   }
}
// ***********forget_Password_F*****Event********
forget_Password.addEventListener('click', forget_Password_F);
// ************Card_three_Show_F*****F*********
let Card_three_Show_F = (user_Email) => {
    card_One.style.display = 'none';
    card_Two.style.display = 'none';
    card_Three.classList.add('show');
    get_Email.innerText = `${user_Email}`;
}
// ************data_Remember_F*****F*********
let data_Remember_F = () => {
    let save = 'auto remember data';
    worning_F(save);
}
// ***remember***Event***
remember.addEventListener('click', data_Remember_F);
// *********setData_LocalStorage_F****F*****
let setData_LocalStorage_F = (user_Email) => {
    let sendData = [];
    sendData.push(user_Email);
    localStorage.setItem('email', sendData);
}
// *************create_Accound_F*****F*********
let loging_Accound_F = () => {
    let getData = localStorage.getItem('email');
    let len = localStorage.length;
    if(len == 0){
        let empty = 'Not Found Accound !!';
        worning_F(empty);
    }else{
        //****send data */
        Card_three_Show_F(getData);
    }
}
// *******create_Accound_F*****Event*****
loggin_Btn.addEventListener('click', loging_Accound_F);
// ***********create_Btn_F******Resgister Data****
let validation_F = () => {
    let user_Email = email.value;
    let user_Password = password.value;

    if(user_Email =="" || user_Password == ""){
      let empty = 'Empty Value !'
      worning_F(empty);
    }
    else {
        if(user_Email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            if(user_Password.match(/^([A-Z]{1})([a-z]{3})(\d{2})([$&+,:;=?@#|'<>.-^*()%!]{2})/)){
             // *****sed data card 3******** 
             Card_three_Show_F(user_Email);
             setData_LocalStorage_F(user_Email);
             email.value ='';
             password.value ='';
           }
           else {
               let p_Misematch = '[A-Z]{1}[a-z](3) and 0-9(2) and [#/$/% etc](2) only !';
               worning_F(p_Misematch);
           }
        }
        else {
            let p_Mise = 'Not Valid @mail !';
            worning_F(p_Mise);
        } 
    }
    
}
// ********create_Btn_F******Event****
create_Btn.addEventListener('click', validation_F);
