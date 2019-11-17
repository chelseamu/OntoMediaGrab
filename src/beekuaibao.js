// https://www.beekuaibao.com/homepage/476512660095344640
// Require insert jQuery first

javascript: (function() {
    var list = $(".content-item.KBH");
    var result = [];
    list.each(function(i) {
        var pubDateElement = $(this).find(".extra > span").first();
        var pubDate = pubDateElement.text().trim();

        var readCountElement = $(this).find('.extra span').last();
        var readCount = readCountElement.text().trim().replace("浏览", "");

        var titleElement = $(this).find(".title");
        var title = titleElement.text().trim();

        var item = {
            pubDate: pubDate,
            title: title,
            link: window.location.origin + $(this).attr("href"),
            readCount: readCount
        };
        result.push(item);
    });

    var resultText = "";
    $.each(result, function(i) {
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