// 下面这两个函数有时间可以做成浏览器插件……
// 获取微信公众平台 “已群发消息” 当前页的文章信息
function getWechatMpPostInfo() {
    var list = $("#list_container .weui-desktop-mass__item");
    var result = [];
    list.each(function (i) {
        var pubDateElement = $(this).find(".weui-desktop-mass__time");
        var pubDate = pubDateElement.text().trim();

        var articleElements = $(this).find(".weui-desktop-mass-appmsg__bd");
        articleElements.each(function (j) {
            var linkElement = $(this).find(".weui-desktop-mass-appmsg__title");
            var readCountElement = $(this).find('.appmsg-view');
            var readCount = readCountElement.text().trim();

            var item = {
                pubDate: pubDate,
                title: linkElement.find("span").text(),
                link: linkElement.attr("href"),
                readCount: readCount
            };
            result.push(item);
        });
    });
    return result;
}

// 将当前页结果复制到剪切板
function copyWechatMpPostInfoResult() {
    var resultObj = getWechatMpPostInfo();
    if (resultObj) {
        var resultText = "";
        $.each(resultObj, function (i) {
            resultText += resultObj[i].pubDate + "\t";
            resultText += resultObj[i].title + "\t";
            resultText += resultObj[i].link + "\t";
            resultText += resultObj[i].readCount + "\r";
        });

        const el = document.createElement('textarea');
        el.value = resultText;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
}

// 复制到Excel的bookmarklet
javascript: (function () {
    var list = $("#list_container .weui-desktop-mass__item");
    var result = [];
    list.each(function (i) {
        var pubDateElement = $(this).find(".weui-desktop-mass__time");
        var pubDate = pubDateElement.text().trim();

        var articleElements = $(this).find(".weui-desktop-mass-appmsg__bd");
        articleElements.each(function (j) {
            var linkElement = $(this).find(".weui-desktop-mass-appmsg__title");
            var readCountElement = $(this).find('.appmsg-view');
            var readCount = readCountElement.text().trim();

            var item = {
                pubDate: pubDate,
                title: linkElement.find("span").text(),
                link: linkElement.attr("href"),
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