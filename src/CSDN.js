// https://blog.csdn.net/ontologycoding

javascript: (function() {
    var list = $(".article-item-box");
    var result = [];
    list.each(function(i) {
        var pubDateElement = $(this).find(".date");
        var pubDate = pubDateElement.text().trim();
        var linkElement = $(this).find("h4").find("a");
        var cln = linkElement.clone().children().remove().end();
        var readCountElement = $(this).find('.num').first();
        var readCount = readCountElement.text().trim();

        var item = {
            pubDate: pubDate,
            title: cln.text().trim(),
            link: cln.attr("href"),
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

// Obsolete
javascript: (function() {
    var list = $(".tab_page_list");
    var result = [];
    list.each(function(i) {
        var pubDateElement = $(this).find(".tab_page_b_r");
        var pubDate = pubDateElement.text().trim();
        var linkElement = $(this).find("h3").find("a");
        var cln = linkElement.clone().children().remove().end();
        var readCountElement = $(this).find('em');
        var readCount = readCountElement.text().trim();

        var item = {
            pubDate: pubDate,
            title: cln.text().trim(),
            link: cln.attr("href"),
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