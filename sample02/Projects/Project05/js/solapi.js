function getPfInfo() {
  let pfid = document.getElementById("pfid").value;
  getPlusfriend(pfid);
}

function getPfInfos() {
  getPlusfriends();
}

function getTemplateInfo() {
  let templateId = document.getElementById("template-id").value;
  getTemplate(templateId);
}

function getTemplateInfos() {
  getTemplates();
}

function btn_sendMessage() {
  let name = document.getElementById("name").value;
  let tel = document.getElementById("tel").value;
  let btn_url = "http://pyy777053.dothome.co.kr/ghostbooks/index_sub.html";
  let templateId = "KA01TP220428062142615LLPiyDN8w4L";
  let pfid = "KA01PF22041206411o33TFWW9Sl71Ppp";
  let date = new Date();
  console.log(name);
  console.log(tel);
  console.log(btn_url);
  console.log(templateId);
  console.log(date);

  sendMessage(name, tel, btn_url, pfid, templateId);
}

const api_key = "NCSJTUHVWWQ0EWKT";
const api_secret = "AU16IKRS7CVUPXXWOWP3ECGMEFBB7VCQ";

function getAuthorization() {
  let salt = getSalt();
  // 30자의 랜덤 문자열 삽입
  let date = getDate();
  let value = date + salt;
  let signature = getSignature(value, api_secret);
  let authoriztion =
    "HMAC-SHA256 apiKey=" +
    api_key +
    ", date=" +
    date +
    ", salt=" +
    salt +
    ", signature=" +
    signature;
  return authoriztion;
}

function getSalt() {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 30; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function getDate() {
  let today = new Date().toISOString();
  return today;
}

function getSignature(value, key) {
  let signature = CryptoJS.HmacSHA256(value, key);
  // CryptoJS 사용해서 시그니처 생성
  return signature;
}

var request;

function getPlusfriend(pfid) {
  let url =
    "https://api.solapi.com/kakao/v1/plus-friends/KA01TP2204270342313028SGsUsbHINJ" +
    pfid;

  request = new XMLHttpRequest();

  if (!request) {
    alert("request create fail");
    return;
  }

  let authoriztion = getAuthorization();

  request.onreadystatechange = requestResult;
  request.open("GET", url);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("Authorization", authoriztion);
  request.send();
}
// 실제로 개발할 때는 이 기능을 서버로 호출하도록 옮겨야함
function getPlusfriends() {
  let url = "https://api.solapi.com/kakao/v1/plus-friends";

  request = new XMLHttpRequest();

  if (!request) {
    alert("request create fail");
    return;
  }

  let authoriztion = getAuthorization();

  request.onreadystatechange = requestResult;
  request.open("GET", url);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("Authorization", authoriztion);
  request.send();
}

function getTemplate(templateId) {
  let url = "https://api.solapi.com/kakao/v1/templates/" + templateId;

  request = new XMLHttpRequest();

  if (!request) {
    alert("request create fail");
    return;
  }

  let authoriztion = getAuthorization();

  request.onreadystatechange = requestResult;
  request.open("GET", url);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("Authorization", authoriztion);
  request.send();
}

function getTemplates() {
  let url = "https://api.solapi.com/kakao/v1/templates";

  request = new XMLHttpRequest();

  if (!request) {
    alert("request create fail");
    return;
  }
  // 인증값
  let authoriztion = getAuthorization();

  request.onreadystatechange = requestResult;
  request.open("GET", url);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("Authorization", authoriztion);
  request.send();
}

function sendMessage(name, tel, btn_url, pfid, templateId) {
  let url =
    "https://my-little-proxy.herokuapp.com/https://api.solapi.com/messages/v4/send"; //CORS 에러를 방지하기 위해 히로쿠로 프록시 서버를 만들었다.

  request = new XMLHttpRequest();
  // request 생성 안되면 예외처리
  if (!request) {
    alert("request create fail");
    return;
  }

  let authoriztion = getAuthorization();

  request.onreadystatechange = requestResult;
  request.open("POST", url);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("Authorization", authoriztion);

  let now = new Date();

  let year = now.getFullYear(); // 연도
  let month = now.getMonth() + 1; // 월
  let day = now.getDate(); // 일
  let hour = now.getHours(); // 현재 시간
  let minutes = now.getMinutes(); //분

  const date = `${year}년 ${month}월 ${day}일 ${hour < 13 ? "오전" : "오후"} ${
    hour < 12 ? hour : hour - 12
  }시 ${minutes}분`;

  var message = {
    message: {
      to: tel,
      from: "01033528779",
      text:
        "[고스트북스] 미미매거진 신간 알림 신청 완료\n\n" +
        name +
        "님, 안녕하세요.\n" +
        date +
        "일자로 신청하신 미미매거진" +
        " 신간 알림 신청이 완료되었습니다.\n곧 출간 안내 소식이 전달될 예정입니다. \n\n본 알림은 알림 신청 확인용 입니다.",
      type: "ATA",
      kakaoOptions: {
        pfId: pfid,
        templateId: templateId,
        buttons: [
          {
            buttonType: "WL",
            buttonName: "매거진 알아보기",
            linkMo: btn_url,
            linkPc: btn_url,
          },
        ],
      },
    },
  };

  var message = JSON.stringify(message);
  console.log(message);

  request.send(message);
  return;
}

function requestResult() {
  if (request.readyState == XMLHttpRequest.DONE) {
    // alert(request.responseText); alert("감사합니다. 알림톡을 확인해 주세요.");
    openModal02();
  }
}
