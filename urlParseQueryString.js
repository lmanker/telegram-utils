function urlSafeDecode(str) {
    try {
        const urlEncoded = str.replace(/\+/g, '%20');
        return decodeURIComponent(urlEncoded);
    } catch (e) {
        return urlEncoded;
    }
}

function urlParseQueryString(queryString) {
    var params = {};
    if (!queryString.length) {
      return params;
    }
    var queryStringParams = queryString.split('&');

    var i, param, paramName, paramValue;
    for (i = 0; i < queryStringParams.length; i++) {
      param = queryStringParams[i].split('=');
      paramName = urlSafeDecode(param[0]);
      paramValue = param[1] == null ? null : urlSafeDecode(param[1]);
      params[paramName] = paramValue;
    }
    return params;
}
