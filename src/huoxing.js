// https://www.huoxing24.com/userCenter/6f21ae1a698e4d0d988297267ee58312

javascript: (function() {
    var list = $(".news-item");
    var result = [];
    list.each(function(i) {
        var pubDateElement = $(this).find("span.date");
        var pubDate = pubDateElement.text().trim();

        var readCountElement = $(this).find('.hotNum');
        var readCount = readCountElement.text().trim().replace("热度 ", "");

        var linkElement = $(this).find("a");

        var item = {
            pubDate: pubDate,
            title: $(this).find(".item-title").text().trim(),
            link: linkElement.attr("href"),
            readCount: readCount
        };
        result.push(item);

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
    });
})();

// Obsolete via #2
javascript: (function() {
    var list = $(".activity-list");
    var result = [];
    list.each(function(i) {
        var pubDateElement = $(this).find(".time");
        var pubDate = pubDateElement.text().trim();

        var linkElement = $(this).find("a");
        var cln = linkElement.clone().children().remove().end();

        var item = {
            pubDate: pubDate,
            title: cln.attr("title"),
            link: cln.attr("href")
        };
        result.push(item);
    });
    var resultText = "";
    $.each(result, function(i) {
        resultText += result[i].pubDate + "\t";
        resultText += result[i].title + "\t";
        resultText += result[i].link + "\r";
    });

    const el = document.createElement('textarea');
    el.value = resultText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
})();