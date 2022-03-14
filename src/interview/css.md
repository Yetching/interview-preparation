## Css复习
1. 块级元素和行内元素
   - 块级元素独占一行，宽度默认填满父元素宽度；行内宽度随元素内容变化，设置宽高无效
   - 垂直方向的padding和margin，行内元素不会起边距效果，但其本身padding会填充
   - 行内块级元素同行排列但可以设置宽高等，如img、input等元素

2. 前端跨页面通信
   - 同源页面
     - Broadcastcannel，new的时间传入字符串key，同一key的bc实例间可以互相通信
     - service-worker
     - localstorage，通过window.onstorage事件监控localstorage的变化同时在回调里完成页面通信
     - shared worker
     - IndexedDB
     - window.open和window.opener
     - ws...
   - 非同源页面: 使用iframe嵌入同源的网页，然后iframe和原页面通信，iframe之间通过同源的方案通信
   
3. 前端路由原理