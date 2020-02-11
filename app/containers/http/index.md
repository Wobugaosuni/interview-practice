## 1. http header 有哪些内容

#### 常规的：

- Request url
- Request method
- status code

#### Response Headers

- cache-control：强缓存、协商缓存

- Content-Type：服务端返回的数据类型
- Content-Encoding：服务端实际返回的数据压缩方式
- Content-Language：服务端返回的语言

- Content-Security-Policy：内容安全策略，以白名单的形式配置可信任的内容来源

- Access-Control-Allow-Origin、Access-Control-Allow-Methods

- Connection：默认是`keep-alive`，可设置`Connection: close`关闭长连接

#### Request Headers

- Accept：想要的数据类型
text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3

- Accept-Encoding：数据编码方式（压缩方式）
接受三种编码方式：gzip, deflate, br

- Accept-Language：期望展示的语言
`zh-CN,zh;q=0.9,en;q=0.8`
以逗号分隔。q表示权重。可自定义。国际化里可以设置

- User-Agent：浏览器的一些相关信息
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.87 Safari/537.36

- cookie

## 2. 介绍下http2的信道复用

一个tcp连接可以有多个http请求（chrome浏览器可以建立6个并发的tcp连接）（相同域名！）  
在http1.1，http请求是有先后顺序的  
在http2.0，http请求是可以并发的，同域名下所有通信都在单个连接上完成

- 好处
避免了因频繁创建连接产生的延迟，减少了内存消耗，提升了使用性能

- 参考
https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/14


## 3. 谈谈你对TCP三次握手的理解

TCP三次握手是TCP的建立连接的过程，所谓连接就是客户端和服务端双方都需要知道服务端的发送和接收能力是否正常。

1. 客户端向服务端发送报文，服务端接收到信息之后，知道了客户端的发送能力正常

2. 服务端向客户端发送报文，客户端接收到了信息之后，知道了服务端的发送和接收能力都正常

3. 客户端再向服务端发送报文，服务端接收到信息之后，知道了客户端的发送和接收能力都正常

至此，三次握手完成，客户端和服务端都确定了双方的发送和接收能力，可以进行数据传输了

## 4. 四次挥手

1. 主机1（可以使客户端，也可以是服务器端）告诉主机2，我没有数据发送了（此时主机2仍然可以发送数据）

2. 主机2告诉主机1，我“同意”你的关闭请求

3. 主机2请求关闭连接

4. 主机2关闭连接，主机1也可以关闭连接

参考：https://github.com/jawil/blog/issues/14

## 网页中的图片资源为什么分放在不同的域名下？

- http1.1下  
chrome最多可以开启6-8个TCP连接。
一个TCP连接可以发送多个http请求，串行，但前提是相同的域名。
不同的域名可以利用多个TCP的资源，提高网页加载速度

- http2.0
一个TCP连接可以发送多个http请求，而且是并行的。并行数取决于所在的浏览器设置

## HTTP vs HTTPS

- HTTPS协议需要到CA申请证书，一般免费证书很少，需要交费。

- HTTP协议运行在TCP之上，所有传输的内容都是明文，HTTPS运行在SSL/TLS之上，SSL/TLS运行在TCP之上，所有传输的内容都经过加密的。

- HTTP和HTTPS使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。

- HTTPS可以有效的防止运营商劫持，解决了防劫持的一个大问题。