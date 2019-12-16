var cookies;

const items = document.getElementById("ft_list");

function deleteItem(e) {
    if (window.confirm("Are you sure?")) {
        const el = e.target;
        items.removeChild(el);
        cookies.removeItem(el.id);
    }
}

function createItem(e) {
    const text = window.prompt("Enter task");
    if (text) {
        let item = document.createElement("p");
        item.id = items.childNodes.length;
        item.textContent = text;
        cookies.setItem(items.childNodes.length, text, 24 * 60 * 60 * 1000);
        item = items.insertBefore(item, items.childNodes[0]);
        item.addEventListener("click", deleteItem);
    }
}

const newBtn = document.getElementById("new");
newBtn.addEventListener("click", createItem);

cookies = {
    getItem: function(sKey) {
        if (!sKey) {
            return null;
        }
        return (
            decodeURIComponent(
                document.cookie.replace(
                    new RegExp(
                        "(?:(?:^|.*;)\\s*" +
                        encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") +
                        "\\s*\\=\\s*([^;]*).*$)|^.*$"
                    ),
                    "$1"
                )
            ) || null
        );
    },
    setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires =
                        vEnd === Infinity ?
                        "; expires=Fri, 31 Dec 9999 23:59:59 GMT" :
                        "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie =
            encodeURIComponent(sKey) +
            "=" +
            encodeURIComponent(sValue) +
            sExpires +
            (sDomain ? "; domain=" + sDomain : "") +
            (sPath ? "; path=" + sPath : "") +
            (bSecure ? "; secure" : "");
        return true;
    },
    removeItem: function(sKey, sPath, sDomain) {
        if (!this.hasItem(sKey)) {
            return false;
        }
        document.cookie =
            encodeURIComponent(sKey) +
            "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
            (sDomain ? "; domain=" + sDomain : "") +
            (sPath ? "; path=" + sPath : "");
        return true;
    },
    hasItem: function(sKey) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        return new RegExp(
            "(?:^|;\\s*)" +
            encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") +
            "\\s*\\="
        ).test(document.cookie);
    },
    keys: function() {
        var aKeys = document.cookie
            .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "")
            .split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    }
};

for (const key of cookies.keys().reverse()) {
    if (key) {
        const el = document.createElement("p");
        el.textContent = cookies.getItem(key);
        items.appendChild(el);
    }
}