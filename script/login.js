function login(){
    var id = document.querySelector('#id');
    var pw = document.querySelector('#pw');

    if(id.value == "" || pw.value == ""){
        alert("아이디 및 비밀번호를 확인해 주세요.");
    }else{
        location.href = 'index.html';
    }
}

function back(){
    history.go(-1);
}

function create_id(){
    var id = document.querySelector('#id');
    var pw = document.querySelector('#pw');
    var c_pw = document.querySelector('#c_pw');
    
    if(id.value == "" || pw.value == "" || c_pw.value == ""){
        alert("회원가입을 할 수 없습니다.");
    }else{
        if(pw.value !== c_pw.value){
            alert("비밀번호를 확인해 주세요.");
        }else{
            location.href = 'login.html';
        }
    }
}