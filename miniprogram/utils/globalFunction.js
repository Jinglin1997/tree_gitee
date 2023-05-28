  // 参数解析：
 
 	// ctx:  canvas绘图上下文
 	// str:  需要绘制的文本内容
 	// draw_width:  绘制后的文字显示宽度
 	// lineNum:  最大行数，多出部分用'...'表示， 如果传-1可以达到自动换行效果
 	// startX:  绘制文字的起点 X 轴坐标
 	// startY:  绘制文字的起点 Y 轴坐标
	// steps:  文字行间距

var myFunction = {
  textPrewrap:function(ctx, content, drawX, drawY, lineHeight, lineMaxWidth, lineNum) {
    var drawTxt = ''; // 当前绘制的内容
    var drawLine = 1; // 第几行开始绘制
    var drawIndex = 0; // 当前绘制内容的索引
    // 判断内容是否可以一行绘制完毕
    if(ctx.measureText(content).width <= lineMaxWidth) {
      ctx.fillText(content.substring(drawIndex, i), drawX, drawY);
    } else {
      for (var i = 0; i < content.length; i++) {
          drawTxt += content[i];
          if (ctx.measureText(drawTxt).width >= lineMaxWidth) {
              if (drawLine >= lineNum) {
                  ctx.fillText(content.substring(drawIndex, i) + '..', drawX, drawY);
                  break;
              } else {
                  ctx.fillText(content.substring(drawIndex, i + 1), drawX, drawY);
                  drawIndex = i + 1;
                  drawLine += 1;
                  drawY += lineHeight;
                  drawTxt = '';
              }
          } else {
              // 内容绘制完毕，但是剩下的内容宽度不到lineMaxWidth
              if (i === content.length - 1) {
                  ctx.fillText(content.substring(drawIndex), drawX, drawY);
              }
          }
      }
}
return drawLine;
}
}

module.exports={
  myFunction: myFunction, 
}