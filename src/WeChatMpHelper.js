// 下面这两个函数有时间可以做成浏览器插件……
// 获取微信公众平台 “已群发消息” 当前页的文章标题及链接
function getWechatMpPostTitleLink() {
    var list = $("#list_container .weui-desktop-mass-appmsg__title");
    var result = [];
    list.each(function(i) {
        var cln = $(this).clone()
            .children()
            .remove()
            .end();
        var item = {
            title: cln.text().trim(),
            link: cln.attr("href")
        }
        result.push(item);
    });
    return result;
}

// 将当前页结果复制到剪切板
function copyWechatMpPostTitleLinkResult() {
    var resultObj = getWechatMpPostTitleLink();
    if (resultObj) {
        var resultText = "";
        $.each(resultObj, function(i) {
            resultText += resultObj[i].title + "\n";
            resultText += resultObj[i].link + "\n\r";
        });

        const el = document.createElement('textarea');
        el.value = resultText;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
}

// 现在用 bookmarklet 最方便，把下面的代码添加到书签栏即可
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