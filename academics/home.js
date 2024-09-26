let languageContent = {
   "en": {
      "homebtn": "Home",
      "newsbtn": "News",
      "contactbtn": "Contact",
      "langbtn": "English",
      "title": "ParryLab",
      "top-title": "Subject Category",
      "box1": "English",
      "box2": "Malay",
      "box3": "Math",
      "box4": "Science",
      "box5": "Geography",
      "box6": "History",
      "box7": "English",
      "box8": "Malay",
      "box9": "English",
      "box10": "Malay",
      "box11": "English",
      "box12": "Malay",
   },
   "bm": {
      "homebtn": "Home",
      "newsbtn": "Berita",
      "contactbtn": "Hubungi Kami",
      "langbtn": "Bahasa Melayu",
      "title": "ParryLab",
      "top-title": "Kategori Mata Pelajaran",
      "box1": "Bahasa Inggeris",
      "box2": "Bahasa Melayu",
      "box3": "Matematik",
      "box4": "Sains",
      "box5": "Geografi",
      "box6": "Sejarah",
      "box7": "English",
      "box8": "Malay",
      "box9": "English",
      "box10": "Malay",
      "box11": "English",
      "box12": "Malay",
   },
   "zh": {
      "homebtn": "主页",
      "newsbtn": "新闻",
      "contactbtn": "联络",
      "langbtn": "简体中文",
      "title": "ParryLab",
      "top-title": "学科类别",
      "box1": "英文",
      "box2": "马来文",
      "box3": "数学",
      "box4": "科学",
      "box5": "地理",
      "box6": "历史",
      "box7": "English",
      "box8": "Malay",
      "box9": "English",
      "box10": "Malay",
      "box11": "English",
      "box12": "Malay",
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