let languageContent = {
   "en": {
      "homebtn": "Home",
      "newsbtn": "Dashboard",
      "contactbtn": "Back",
      "langbtn": "English",
      "title": "ParryLab",
      "top-title": "Subject Category",
      "nocourses": "You have no courses right now!",
      "bored": "Bored about the lessons? Try others!",
      "box1": "English",
      "box2": "Malay",
      "box3": "Chinese",
      "box4": "Math",
      "box5": "Science",
      "box6": "Geography",
      "box7": "History",
   },
   "bm": {
      "homebtn": "Home",
      "newsbtn": "Papan Pemuka",
      "contactbtn": "Kembali",
      "langbtn": "Malay",
      "title": "ParryLab",
      "top-title": "Kategori Mata Pelajaran",
      "nocourses": "Anda tiada kursus sekarang!",
      "bored": "Bosan akan pelajaran yang dipilih? Pilih yang lain!",
      "box1": "Bahasa Inggeris",
      "box2": "Malay",
      "box3": "Bahasa Cina",
      "box4": "Matematik",
      "box5": "Sains",
      "box6": "Geografi",
      "box7": "Sejarah",
   },
   "zh": {
      "homebtn": "主页",
      "newsbtn": "仪表板",
      "contactbtn": "回去",
      "langbtn": "简体中文",
      "title": "ParryLab",
      "top-title": "学科类别",
      "nocourses": "您现在没有课程!",
      "bored": "对课程感到厌倦？尝试其他的！",
      "box1": "英文",
      "box2": "马来文",
      "box3": "中文",
      "box4": "数学",
      "box5": "科学",
      "box6": "地理",
      "box7": "历史",
   }
}

var queryParams = new URLSearchParams(window.location.search);

function switchLang(lang) {
  queryParams.set("lang", lang);
  history.replaceState(null, null, "?"+queryParams.toString());
  sessionStorage.setItem("lang", lang);
  for (let key in languageContent[lang]) {
     document.getElementById(key).innerHTML = languageContent[lang][key];
  }
}

function academics() {
  location.href = "/learning.html?lang="+sessionStorage.getItem("lang");
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const language = urlParams.get('lang')

window.onload; {
  if (language == 'en') {
     switchLang('en');
     sessionStorage.setItem("lang", "en");
  }
  else if (language == 'bm') {
   switchLang('bm');
   sessionStorage.setItem("lang", "bm");
  }
  else if (language == 'zh') {
   switchLang('zh');
   sessionStorage.setItem("lang", "zh");
  }
  else {
   switchLang('en')
   sessionStorage.setItem("lang", "en");
  }
}
