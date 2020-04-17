////使用原生JS
// window.onload = function(){
//     //个人信息与侧边菜单吸顶
//     (function(){
//         let oContainer = document.getElementById("container");
//         let oPer = document.querySelectorAll(".personalall");    //获取左侧个人信息节点 
//         let oPerTop = oPer[0].offsetTop;       //获取左侧距离顶部高度
//         // console.log(oPerTop);
//         window.onscroll = (function move(){
//             //获取滚动条实时高度
//             let backTop1 = document.documentElement.scrollTop || document.body.scrollTop;  
//             console.log(backTop1); 
//             if( oPerTop - backTop1 < 15){
//                 oContainer.className = "fixed";
//             }else{
//                 oContainer.className = "";
//                 // oContainer.classList.remove("fixed");   
//             }
//             return move;
//         })();        //立即执行解决滚动在下面时刷新两侧不固定  
//     })();

//     //侧边菜单点击事件
//     (function(){
//         let oLi = document.querySelectorAll("#navBar .sideNav li");
//         let oSection = document.querySelectorAll(".con-part");
//         let timer = null; 
//         let isbool = true; 
//         oLi.forEach((node,i)=>{
//             node.onclick = function(){
//                 // console.log(i);
//                 clearInterval(timer);
//                 let toTop = oSection[i].offsetTop;    //获取每个层距的文档高度
//                 console.log(toTop);
//                 //给对应的li标签有active名字，其他的去掉active名字
//                 oLi.forEach((ele)=>{
//                     ele.className = "";
//                 });
//                 node.classList.add("active");
//                 //实现点击缓慢滚动效果
//                 timer = setInterval(() => {
//                     let backTop = document.documentElement.scrollTop || document.body.scrollTop;
//                     console.log(backTop);
//                     //设置滚动的步长并减小
//                     var speed = Math.floor((backTop - toTop)/5);    
//                     // 阻止滚动事件
//                     isbool = true;
//                     document.documentElement.scrollTop = backTop - speed; 
//                     if( Math.abs(backTop - toTop)<5 ){     //控制清除定时器
//                         clearInterval(timer);
//                     }
//                 }, 30);
//                 window.onload = function(){
//                     window.onscroll = function(){
//                         if(!isbool){
//                             clearInterval(timer);
//                         }else{
//                             isbool = false;
//                         }
//                     }  
//                 }      
//             }
//         });
//     })();
// }

//     //滚动改变名字样式改变
//     (function(){
//         let oLi = document.querySelectorAll("#navBar .sideNav li");
//         let oSection = document.querySelectorAll(".con-part");
//         // window.onscroll = (function move1(){
//         //     let sTop = document.documentElement.scrollTop || document.body.scrollTop;
//         //     // console.log(sTop);
//         //     let len = oSection.length;
//         //     let index;
//         //     for(var i=0;i<len;i++){
//         //         let toTop2 = oSection[i].offsetTop;
//         //         // console.log(toTop);
//         //         if( toTop2  -  sTop > 150){
//         //             index = i - 1;
//         //             break;
//         //         }
//         //     }
//         //     index === undefined && (index = len - 1);
//         //     index = Math.max(index,0);
//         //     // console.log(index);
//         //     oLi.forEach((node)=>{
//         //         node.className = "";
//         //     });
//         //     oLi[index].className = "active"  
//         //     return move1;
//         // })();
//     })();
// };



//使用JQ写
$(function () {
    //个人信息与侧边菜单吸顶
    (function(){
        var $personal = $("#per");
        var $personalMain = $("#per .personalall");
        // var $navBar = $("#navBar");
        // console.log($sideNav);   
        var $sideNav = $("#navBar .sideNav");

        $(window).scroll((function move() {
            if (($personal.offset().top - $(document).scrollTop()) <= 10){
                $personalMain.addClass("fixed");
                $sideNav.addClass("fixed");

            }else{
                $personalMain.removeClass("fixed");
                $sideNav.removeClass("fixed");
            }
            return move;
        })());

    })();
    //侧边菜单点击事件
    (function(){
        let $li = $("#navBar .sideNav li");
        let $oSection = $(".con-part");
        let len = $oSection.length;
        //点击事件
        $li.click(function(){
            let i = $(this).index();    //存储点击索引
            let toTop = $oSection.eq(i).offset().top;
            //点击滚动效果
            $("html")
                .stop()
                .animate({scrollTop : toTop},300);
            // 点击改变样式
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active");
        });
        //滚动时改变名字
        // $(window).scroll(function(){
        //     let sTop = $(window).scrollTop();
        //     let index;
        //     for(let i=0;i<len;i++){
        //         let toTop = $oSection.eq(i).offset().top;  //获取每层距离顶部高度
        //         if( toTop - sTop > 150){
        //             index = i - 1;
        //             break;
        //         }
        //     }
        //     index === undefined && (index = len -1);
        //     index = Math.max(index,0);
        //     console.log(index);
        //     $li.eq(index) 
        //         .addClass("active")
        //         .siblings()
        //         .removeClass("active");        
        // });
        

        //滚动时改变名字
        function move(){
            let sTop = $(window).scrollTop();
            let index;
            for(let i=0;i<len;i++){
                let toTop = $oSection.eq(i).offset().top;  //获取每层距离顶部高度
                if( toTop - sTop > 150){
                    index = i - 1;
                    break;
                }
            }
            index === undefined && (index = len -1);
            index = Math.max(index,0);
            console.log(index);
            $li.eq(index) 
                .addClass("active")
                .siblings()
                .removeClass("active");        
        };
        move();
        //节流 --  持续性事件触发时
        let timer = null;
        $(window).scroll(function(){
            clearTimeout(timer);
            timer = setTimeout(move,200);
        });
    })();
});
