//方法一  当页面小于980时不满足会变形飘起来影响布局

// window.onload = function(){

//     //找到左边个人信息区id
//     var per = document.getElementsByClassName("personalall")[0];
//     //获取左侧距离窗口顶部距离
//     var perTop = per.offsetTop;
//     // console.log(perTop);

//     //找到右边的侧边栏
//     var Bar = document.getElementsByClassName("sideNav")[0];
//     var BarTop = Bar.offsetTop;
//     // console.log(BarTop);

// //     制作吸顶作用
//     window.onscroll = function(){

//         var backTop=document.documentElement.scrollTop ||document.body.scrollTop;

//         // console.log(backTop);

//         if( backTop - perTop > -15){
//             per.style.position = "fixed"
//             per.style.top = "15"+"px";
//             // per.style.zIndex = "100";
//         }
//         else{
//             per.style.position = "";
//           }

//         if( backTop - BarTop > -15){
//             Bar.style.position = "fixed"
//             Bar.style.top = "15"+"px";
//             //Bar.style.zIndex = "100";
//         }
//         else{
//             Bar.style.position = "";
//         }
//     }
// }




//方法二

$(function () {
    /*
    * personal + sideNav
    * 个人信息与侧边菜单吸顶
    */
    (function(){
      var $personal = $("#per");
    //   console.log($personal);
      var $personalMain = $("#per .personalall");
    //   console.log($personalMain);  
    //  var $navBar = $("#navBar");
    //   console.log($sideNav);   
      var $sideNav = $("#navBar .sideNav");

      $(window).scroll((function m() {

        //   var dd = $personal.offset().top;
        //   console.log(dd);

        if (($personal.offset().top - $(document).scrollTop()) <= 10){

          $personalMain.addClass("fixed");
          $sideNav.addClass("fixed");

        }else{
          $personalMain.removeClass("fixed");
          $sideNav.removeClass("fixed");
        }
        return m;
      })());
    })();
});
