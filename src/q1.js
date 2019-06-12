module.exports = {
    store (arr) {
        let text = '';
        if (!(arr instanceof Array)) return ;

        if (!arr.length) return '';

        arr.map((item, key) => {
            let sep = '';
            if (text) text += '\n';
            // for (const [k, val] of Object.entries(item)) {
            //     if (!sep)
            //         sep += k + '=' + val;
            //     else
            //         sep += ';' + k + '=' + val;
            // };

            Object.keys(item).map( k => {
                if (item[k]) {
                    if (!sep)
                        sep += k + '=' + item[k];
                    else
                        sep += ';' + k + '=' + item[k];
                }
            });
            text += sep;
        });
        return text;
    },

    load (text) {
        if (typeof text != 'string') return ;
        if(text.length == 0) return ;

        let arr = text.split("\n");
        if (arr[0].length == 0) return [];

        return arr.map((item, key) => {
            if (item) {
                let tmp = item.split(";");
                item = tmp.reduce((arrOut, ele) => {
                    if (ele){
                        const [k, v] = ele.split("=");
                        if (k && v) {
                            arrOut[k] = v;
                        }
                    }
                    return arrOut;
                }, []);
            }
            return item;
        });
    }
}