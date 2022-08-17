function profileSet(){
    document.getElementById("myProfileSet").style.display = "flex";
}

function profileSetClose(){
    document.getElementById("myProfileSet").style.display = "none";
    document.getElementById("nickNameUpdate").style.display = "none";
    document.getElementById("check").style.display = "none";
    document.getElementById("nickName").style.display = "block";
    document.getElementById("updateCancel").textContent = "수정";
    document.getElementById("nickName").textContent = document.getElementById("orignalNickName").value
}

function nickNameButton(){
    if(document.getElementById("nickNameUpdate").style.display == 'none'){
        document.getElementById("nickNameUpdate").style.display = "block";
        document.getElementById("check").style.display = "block";
        document.getElementById("nickName").style.display = "none";
        document.getElementById("updateCancel").textContent = "취소";
    } else if(document.getElementById("nickNameUpdate").style.display = 'block'){
        document.getElementById("nickNameUpdate").style.display = "none";
        document.getElementById("check").style.display = "none";
        document.getElementById("nickName").style.display = "block";
        document.getElementById("nickNameUpdate").value = "";
        document.getElementById("updateCancel").textContent = "수정";
    }
}

function nickNameChange(){
    document.getElementById("nickName").textContent = document.getElementById("nickNameUpdate").value
    document.getElementById("nickNameUpdate").style.display = "none";
    document.getElementById("check").style.display = "none";
    document.getElementById("nickName").style.display = "block";
    document.getElementById("updateCancel").textContent = "수정";
}

function isFileImage(obj) {
    let file_kind = obj.value.lastIndexOf('.');

    let file_name = obj.value.substring(file_kind+1,obj.length);

    let file_type = file_name.toLowerCase();

    let check_file_type=new Array();

    check_file_type=['jpg','gif','png','jpeg'];

    if(check_file_type.indexOf(file_type)==-1) {

    alert('이미지 파일(jpg, gif, png, jpeg)만 업로드 가능합니다.');

    let parent_Obj=obj.parentNode;

    let node=parent_Obj.replaceChild(obj.cloneNode(true),obj);

    document.getElementById("file").select();

    document.getElementById("file").value = "";

    return false;
    }
}