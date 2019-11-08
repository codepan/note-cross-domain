***JSONP是什么？***

JSON For Padding JSON的补充。其实本质和JSON没有半毛钱关系。使用script标签。它是变通的一种解决方案。

***使用JSONP服务器代码需要改动吗？***

答案是：不改动，别想成功。

***JSONP的实现原理***

与普通XHR请求不同的地方有：
1. 请求的Type
	请求的type类型是script，不是xhr
2. response的Content-Type
	响应的数据不是json对象，而是一段js脚本。也就是response的Content-Type是application/javascript，不是application/json
3.  URL
	JSONP的URL后面自动加入了一长串参数，其中有一个参数是callback=XXX，这个callback的值就是将来接口返回的JS脚本的函数名。也就是JS脚本其实就是对XXX函数的调用，而真正的JSON数据被当做函数的参数被传回
```
$.ajax({
	url: 'api/getUser.do',
    dataType: 'jsonp',  // 响应的数据类型是jsonp形式
    jsonp: 'callback', // 指定jsonp前后端约定的回调函数的名称，默认是callback
    success: function (json) {
    }
})
```

***JSONP有什么弊端？***

- 服务器需要改动代码来支持
- 只支持GET 因为底层是script的src，所以只能是GET
- 发送的不是XHR请求 XHR会有异步、事件等众多特性