window.onload=function(){
	var bird={
		x:140,
		y:264,
		w:40,
		h:40,
	}
	var guandaos=[
		{top:{x:300,y:0,w:80,h:300},
         bottom:{x:300,y:420,w:80,h:300},
	    },
	    {top:{x:510,y:0,w:80,h:300},
         bottom:{x:510,y:420,w:80,h:300},
	    }
	]
	var ctx=document.querySelector('#canvas').getContext('2d');
    var draw=function(){



         ctx.clearRect(0,0,320,568);
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
    	for(var i=0;i<guandaos.length;i++){
    		var z=guandaos[i];
    		z.top.x-=3;
    		z.bottom.x-=3;
    		ctx.fillRect(z.top.x,z.top.y,z.top.w,z.top.h);
    		ctx.fillRect(z.bottom.x,z.bottom.y,z.bottom.w,z.bottom.h);
    		if(recvsrec(bird,z.top) ||recvsrec(bird,z.bottom) ){
    			return;
    		}
    		if(z.top.x<=-z.top.w){
    			z.top.x=320;
    			z.bottom.x=320;
    			z.top.h=Math.random()*390+10;
    			z.bottom.y=z.top.h+120;
    			z.bottom.h=568-z.top.h-120;
    		}
    	}
    	
  
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