# WeChatMpHelper
获取微信公众平台 “已群发消息” 当前页的文章信息

## Usage

选择以下内容，保存为Chrome浏览器书签即可。

```javascript
javascript: (function () {
    var list = $("#list_container .weui-desktop-mass__item");
    var result = [];
    list.each(function (i) {
        var pubDateElement = $(this).find(".weui-desktop-mass__time");
        var pubDate = pubDateElement.text().trim();

        var articleElements = $(this).find(".weui-desktop-mass-appmsg__bd");
        articleElements.each(function (j) {
            var linkElement = $(this).find(".weui-desktop-mass-appmsg__title");
            var cln = linkElement.clone().children().remove().end();
            var readCountElement = $(this).find('.appmsg-view');
            var readCount = readCountElement.text().trim();

            var item = {
                pubDate: pubDate,
                title: cln.text().trim(),
                link: cln.attr("href"),
                readCount: readCount
            };
            result.push(item);
        });
    });
    var resultText = "";
    $.each(result, function (i) {
        resultText += result[i].pubDate + "\t";
        resultText += result[i].title + "\t";
        resultText += result[i].link + "\t";
        resultText += result[i].readCount + "\r";
    });

    const el = document.createElement('textarea');
    el.value = resultText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
})();
```