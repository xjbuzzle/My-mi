
window.onload = function(){
    
    /*
    * 使图片可以自动切换
    */
    
    //获取img标签
    var img1 = document.getElementById("img1");
    
    //创建一个数组来保存图片的路径
    var imgArr = ["./img/img-list/banner1.jpg","./img/img-list/banner2.jpg","./img/img-list/banner3.jpg","./img/img-list/banner4.jpg","./img/img-list/banner5.jpg"];
    
    //创建一个变量，用来保存当前图片的索引
    var index = 0;
    
    //定义一个变量，用来保存定时器的标识
    var timer;
    
    timer = setInterval(function(){
        //使索引自增
        index++;
        //判断索引是否超过最大索引
        /*if(index >= imgArr.length){
            //则将index设置为0
            index = 0;
        }*/
        index %= imgArr.length;
        //修改img1的src属性
        img1.src = imgArr[index];
        
    },500);
};
