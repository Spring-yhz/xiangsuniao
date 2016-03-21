window.onload=function(){
	var bird={
		x:140,
		y:264,
		w:40,
		h:40,
	}
    var guandaoT=[
    {x:345,y:0,w:60,h:220},
    {x:535,y:0,w:60,h:220}
    ]
    var guandaoB=[
    {x:345,y:338,w:60,h:230},
    {x:535,y:338,w:60,h:230}
    ]
    var ctx=document.querySelector('#canvas').getContext('2d');
    var draw=function(){



        ctx.clearRect(0,0,320,568);
        var sjs=Math.random()*100+180;
    	//画小鸟
    	// bird.y+=1;
    	// ctx.fillRect(bird.x,bird.y,bird.w,bird.h);

        var imgs=document.querySelector("#aa");
        imgs.onload=function(){
           ctx.drawImage(imgs,0,0);
       }
       ctx.clearRect(0,0,320,568);
       ctx.drawImage(imgs,bird.x,bird.y,bird.w,bird.h);
       bird.y+=1;
       
       
        // 检测矩形之间的碰撞
        var recvsrec =  function(rect0,rect1){
          if (rect0.x >= rect1.x && rect0.x >= rect1.x + rect1.w) {
             return false;
         } else if (rect0.x <= rect1.x && rect0.x + rect0.w <= rect1.x) {
             return false;
         } else if (rect0.y >= rect1.y && rect0.y >= rect1.y + rect1.h) {
             return false;
         } else if (rect0.y <= rect1.y && rect0.y + rect0.h <= rect1.y) {
             return false;
         }
         return true;
     };

    	//画管道
    	//管道
        var imgT = document.querySelector('#guandaoT');
        var imgB = document.querySelector('#guandaoB');
        ctx.save();
        var vs;
        
        //ctx.fillStyle="rgba(255,255,255,0)"
        for(var i=0;i<guandaoT.length;i++){
            var d=guandaoT[i];
            if(recvsrec(bird,d)){
                vs=true;
            }
            d.x -= 2;
            if(d.x <= -50){
                d.x = 345;
                d.h = sjs;
            }
            ctx.fillRect(d.x,d.y,d.w,d.h);
            ctx.drawImage(imgT,d.x,d.y,d.w,d.h);
        }
        for(var i=0;i<guandaoB.length;i++){
            var d=guandaoB[i];
            console.log(d);
            if(recvsrec(bird,d)){
                vs=true;
            }
            d.x -= 2;
            if(d.x <= -50){
                d.x = 345;
                d.h = sjs+128;
                d.y = sjs+128;
            }
            ctx.fillRect(d.x,d.y,d.w,d.h);
            ctx.drawImage(imgB,d.x,d.y,d.w,d.h);

        }
        if(vs){
            return;
        }
        ctx.stroke();
        
    	//边界判断
    	
    	if(bird.y>=568-40){
    		ctx.fillRect(140,528,bird.w,bird.h);
    	}else if(bird.y<=0){
            ctx.fillRect(140,0,bird.w,bird.h);
        }else{
          requestAnimationFrame(draw);
      }
      
  }
  
  canvas.onclick=function(){
   bird.y-=20;
}

var r=requestAnimationFrame(draw);
}