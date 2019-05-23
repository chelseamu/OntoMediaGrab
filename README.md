# WeChatMpHelper
获取微信公众平台 “已群发消息” 当前页的文章标题及链接

## Usage

根据需要选择以下内容，保存为Chrome浏览器书签即可。

### 复制到文本

```javascript
javascript: (function() {
    var list = $("#list_container .weui-desktop-mass-appmsg__title");
    var resultText = "";
    list.each(function(i) {
        var cln = $(this).clone()
            .children()
            .remove()
            .end();
        resultText += cln.text().trim() + "\n";
        resultText += cln.attr("href") + "\n\r";
    });
    const el = document.createElement('textarea');
    el.value = resultText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
})();
```

### 复制到Excel 

```javascript
javascript: (function() {
    var list = $("#list_container .weui-desktop-mass-appmsg__title");
    var resultText = "";
    list.each(function(i) {
        var cln = $(this).clone()
            .children()
            .remove()
            .end();
        resultText += cln.text().trim() + "\t" + cln.attr("href") + "\r";
    });
    const el = document.createElement('textarea');
    el.value = resultText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
})();
```
