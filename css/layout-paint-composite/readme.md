# 
html(string)解析为dom树
css解析为cssom
合成render tree
生成layout tree
绘制 paint
composite合成：一个页面有很多分层,最终合成一个平面

# 性能优化
js也会relayout repaint composite
重排一定会引起重绘 重绘不一定会引起重排
改变了元素的布局：width,height,display (重排)relayout-> 3步
改变了元素的color,shadow (重绘) repaint-> 2步
composite: transform,opacity 前提条件：变化的元素要处于一个独立的层上面

# 可以操作层的改变
1. will-change
2. 3d transform: `translate3D(60px, 0, 0)`
3. animation transition 激活的时候
4. video
5. backface-visiblity:hidden; 背对面要不要显示

影响的是当前处于的一个层
