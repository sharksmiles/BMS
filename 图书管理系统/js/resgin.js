/**
 * Created by Administrator on 2018/11/5 0005.
 */
function check(){
    var new_username=form1.new_username.value;//获取表单form1的用户名的值
    var new_password=form1.new_password.value;//获取表单form1密码值
    var news_password=form1.news_password.value;//获取表单form1密码值
    if((new_username=="")||(new_username==null)){
        alert("请输入用户名！");
        form1.new_username.focus();
        return;
    }
    if((new_password=="")||(new_password==null)){
        alert("请输入密码！");
        form1.new_password.focus();
        return;
    }
    if((news_password=="")||(news_password==null)){
        alert("请输入确认密码！");
        form1.new_password.focus();
        return;
    }
    if(form1.new_password.value!= form1.news_password.value){
        alert("前后密码不一致！！！");
    }
    else {
        alert("注册成功！！！");
        form1.submit();
        window.location.href="./index.html"
    }
}