var timer = null,
    index = 0,
    pics = document.getElementsByClassName("banner-slide"),
    lis = document.getElementsByTagName("li");


//封装一个代替getElementById()的方法
function byId(id){
    return typeof(id) === "string"?document.getElementById(id):id;
}

function slideImg() {
    var main = byId("main");
    var banner = byId("banner");
    main.onmouseover = function(){
        stopAutoPlay();
    }
    main.onmouseout = function(){
        startAutoPlay();
    }
    main.onmouseout();

    //点击导航栏切换图片
    for(var i=0;i<pics.length;i++){
        lis[6+i].id = i;
        //给每个li项绑定点击事件
        lis[6+i].onclick = function(){
            //获取当前li项的index值
            index = this.id;
            changeImg();
        }
    }
}
//开始播放轮播图
function startAutoPlay(){
    timer = setInterval(function(){
        index++;
        if(index>3){
            index = 0;
        }
        changeImg();
    },3000);
}
//暂停播放
function stopAutoPlay(){
    if (timer) {
        clearInterval(timer);
    }
}
//改变轮播图
function changeImg(){
    for(var i=0;i<pics.length;i++){
        pics[i].style.display = "none";
        lis[6+i].className = "";
    }
    pics[index].style.display = "block";
    lis[index+6].className = "changeColor";
}
slideImg();

function setContentTab(name, curr, n) {
    for (i = 1; i <= n; i++) {
        var menu = document.getElementById(name + i);
        var cont = document.getElementById("con_" + name + "_" + i);
        menu.className = i == curr ? "up" : "";
        if (i == curr) {
            cont.style.display = "block";
        } else {
            cont.style.display = "none";
        }
    }
}