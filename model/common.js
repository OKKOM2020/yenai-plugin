import { core } from "oicq";

export default new class common {
    /**
     * @description: 使用JS将数字从汉字形式转化为阿拉伯形式
     * @param {string} s_123
     * @return {number}
     */
    translateChinaNum(s_123) {
        //如果是纯数字直接返回
        if (/^\d+$/.test(s_123)) return Number(s_123)
        // -------------------------------------------------- 字典，甚至可以使用繁体 --------------------------------------------------
        let map = new Map()
        map.set('一', 1)
        map.set('壹', 1) // 特殊
        map.set('二', 2)
        map.set('两', 2) // 特殊
        map.set('三', 3)
        map.set('四', 4)
        map.set('五', 5)
        map.set('六', 6)
        map.set('七', 7)
        map.set('八', 8)
        map.set('九', 9)

        // -------------------------------------------------- 按照亿、万为分割将字符串划分为三部分 --------------------------------------------------
        let split = ''
        split = s_123.split('亿')
        let s_1_23 = split.length > 1 ? split : ['', s_123]
        let s_23 = s_1_23[1]
        let s_1 = s_1_23[0]
        split = s_23.split('万')
        let s_2_3 = split.length > 1 ? split : ['', s_23]
        let s_2 = s_2_3[0]
        let s_3 = s_2_3[1]
        let arr = [s_1, s_2, s_3]

        // -------------------------------------------------- 对各个部分处理 --------------------------------------------------
        arr = arr.map(item => {
            let result = ''
            result = item.replace('零', '')
            // [ '一百三十二', '四千五百', '三千二百一十三' ] ==>
            result = result.replace(/[一二三四五六七八九]/g, substring => {
                return map.get(substring)
            })
            // [ '1百3十2', '4千5百', '3千2百1十3' ] ==> ['0132', '4500', '3213']
            let temp
            temp = /\d(?=千)/.exec(result)
            let num1 = temp ? temp[0] : '0'
            temp = /\d(?=百)/.exec(result)
            let num2 = temp ? temp[0] : '0'
            temp = /\d?(?=十)/.exec(result)
            let num3
            if (temp === null) { // 说明没十：一百零二
                num3 = '0'
            } else if (temp[0] === '') { // 说明十被简写了：十一
                num3 = '1'
            } else { // 正常情况：一百一十一
                num3 = temp[0]
            }
            temp = /\d$/.exec(result)
            let num4 = temp ? temp[0] : '0'
            return num1 + num2 + num3 + num4
        })
        // 借助parseInt自动去零
        return parseInt(arr.join(''))
    }

    /**
     * @description: 陌生人点赞
     * @param {Number} uid QQ号
     * @param {Number} times 数量
     * @return {Object}
     */
    async thumbUp(uid, times = 1) {
        if (times > 20)
            times = 20;
        let ReqFavorite;
        if (Bot.fl.get(uid)) {
            ReqFavorite = core.jce.encodeStruct([
                core.jce.encodeNested([
                    Bot.uin, 1, Bot.sig.seq + 1, 1, 0, Buffer.from("0C180001060131160131", "hex")
                ]),
                uid, 0, 1, Number(times)
            ]);
        }
        else {
            ReqFavorite = core.jce.encodeStruct([
                core.jce.encodeNested([
                    Bot.uin, 1, Bot.sig.seq + 1, 1, 0, Buffer.from("0C180001060131160135", "hex")
                ]),
                uid, 0, 5, Number(times)
            ]);
        }
        const body = core.jce.encodeWrapper({ ReqFavorite }, "VisitorSvc", "ReqFavorite", Bot.sig.seq + 1);
        const payload = await Bot.sendUni("VisitorSvc.ReqFavorite", body);
        let result = core.jce.decodeWrapper(payload)[0];
        return { code: result[3], msg: result[4] };
    }



}