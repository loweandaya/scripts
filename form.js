addE(btns,'click',showForms);
addE(teacherbtn,'click',accountSwitch);
addE(studentbtn,'click',accountSwitchs);
event('.red','click',showlogin);
addE(sign,'click',showSign)
// addE(sign,'click',opacity)



// earea of callbacks
function showForms(){
  forms.classList.toggle('hide')
  header.style.Zindex = 0;
  // $('.header,center,footer,copyright,copyrights').style.opacity = 0.5
    // $('.header,.center,.footer,.copyright,.copyrights').style.backgroundColor = 'gray'
    $('.header .portabook').style.display = 'none'
  $('.whole-form').style.backgroundColor = 'white'
}

function accountSwitch(){
  teacher.classList.toggle('hide');
  student.classList.toggle('hide');
  teacherbtn.disabled = true;
  teacherbtn.style.backgroundColor = 'lightgray';
  studentbtn.style.backgroundColor = 'blue'
  studentbtn.disabled = false
  
}

function accountSwitchs(){
  student.classList.toggle('hide');
  teacher.classList.toggle('hide');
  studentbtn.disabled = true;
  teacherbtn.disabled = false
  studentbtn.style.backgroundColor = 'lightgray';
  teacherbtn.style.backgroundColor = 'blue'
  
}
function showlogin(){
  forms.classList.toggle('hide');
  login.classList.toggle('hide')
  btns.classList.toggle('hide')
}

function showSign(){
  forms.classList.toggle('hide');
  login.classList.toggle('hide')
  btns.classList.toggle('hide')
}

