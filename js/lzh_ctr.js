// 棋盘数据
var chessdata  =  new Array();
// 
var i,j,k = 0, img_num = 1;
// 棋子的图片位置 //存储图片的数组
var myname = new Array("icon/1.gif","icon/2.gif");

// init方法?
function init() {
    var x = document.getElementById("square");
    //二层循环用来生成九个div
    for (i = 0;i < 3;i++){
        for (j = 0;j < 3;j++){
            x.innerHTML += "<div onclick = drawfigure(this," + i + "," + j + ")></div>";
        }
    }
    //建立一个与九宫格对应的数组,存入chessdata中
    for (var i = 0; i < 3; i++) {
        chessdata[i] = new Array();
        for (var j = 0; j < 3; j++) {
            chessdata[i][j]  =  0;
        }
    }
}

function drawfigure(obj, x, y){
    if(chessdata[x][y] !=  0){
        // 若点击的格子处标记数组不为0,则发出警报
        alert("此处有棋子了！");
        return;
    }
    // img_num为一个全局的数字,初始化为1.
    // 此处,圆圈将赋值为4, 叉将赋值为3
    chessdata[x][y] = img_num % 2 + 3;
    // 在点击的格子处嵌入圈或叉的图片
    obj.innerHTML  =  '<img class="zhimg" src = "'+myname[img_num]+'"/>'; 
    // 更新img_num的值,使其始终位于0和1
    img_num = (img_num + 1) % 2;
    // 计算是否成线
    calculate(x,y);
}
 
//计算当前画图的位置是否有成一条线的
function calculate(x,y){    
    var n = x,m = y,sum = 0,sum1 = 0,sum2 = 0,sum3 = 0;
    //横向
    for(var i = 0;i < 3;i++){
        sum += chessdata[n][i];
        judge(sum);
    }
    //竖向
    for(var i = 0;i < 3;i++){
        sum1 += chessdata[i][m];
        judge(sum1);
    }
    //左斜
    if(n+m == 2){
        for(var i = 0;i < 3;i++){
            sum2 += chessdata[i][2-i];
            judge(sum2);
        }
    }
    //右斜
    if(n == m){
        for(var i = 0;i < 3;i++){
            sum3 += chessdata[i][i];
            judge(sum3);
        }
    }
}
 
//根据图形所带的值计算是否满足成线
function judge(sum){
    if(sum == 12){
        //判断胜利后弹出对话框，点击确定刷新
        alert("X win");
        window.location.reload();
    }
    else if(sum == 9){
        alert("O win");
        window.location.reload();
    }
}