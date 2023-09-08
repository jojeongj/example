let section_4 = document.querySelector('#section_4');

function alarm() {
    const now = new Date().toISOString().replace("T", ' ').slice(0, -5);
    const apiKey = "NCSJTUHVWWQ0EWKT";
    const apiSecret = "AU16IKRS7CVUPXXWOWP3ECGMEFBB7VCQ";
    const salt = makeid(32);
    const payload = now + salt;
    const signature = GenerateHMAC(payload, apiSecret);

    if (signature != "") {
        section_4 = `HMAC-SHA256Encode apiKey=${apiKey}, date=${now}, salt=${salt}, signature=${signature}`;
    }

    return section_4;
}
let alarm2 = alarm();

function GenerateHMAC(payload, key) {
    var hash = CryptoJS.HmacSHA256(payload, key);
    var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
    return hashInBase64;
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const xhr = new XMLHttpRequest();
const method = "GET";
const url = "https://my-little-proxy.herokuapp.com/https://api.solapi.com/kakao/v1/plus-friends/KA01PF22041206411o33TFWW9Sl71Ppp";
// 요청을 초기화 합니다. 
xhr.open(method, url);
// onreadystatechange 이벤트를 이용해 요청에 대한 응답 결과를 처리합니다. 
xhr.onreadystatechange = function (event) {
    const { target } = event;
    if (target.readyState === XMLHttpRequest.DONE) {
        const { status } = target;
        if (status === 0 || (status >= 200 && status < 400)) {
            // 요청이 정상적으로 처리 된 경우 
            console.log(xhr.responseText);
        }
        else {
            // 에러가 발생한 경우 
        }
    }
};
// 서버에 요청을 보냅니다. 
xhr.setRequestHeader("Authorization", alarm2);
//Authorization 넣는다
// alarm() 부분이 value
xhr.send(null);
