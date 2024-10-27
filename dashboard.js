let languageContent = {
    "en": {
       "homebtn": "Home",
       "newsbtn": "Dashboard",
       "contactbtn": "Back",
       "langbtn": "English",
       "title": "ParryLab",
       "top-title": "Dashboard",
       "box-title": "Welcome <span id='name'></span>!!!",
    },
    "bm": {
       "homebtn": "Home",
       "newsbtn": "Papan Pemuka",
       "contactbtn": "Kembali",
       "langbtn": "Malay",
       "title": "ParryLab",
       "top-title": "Papan Pemuka",
       "box-title": "Selamat Datang <span id='name'></span>!!!",
    },
    "zh": {
       "homebtn": "主页",
       "newsbtn": "新闻",
       "contactbtn": "联络",
       "langbtn": "简体中文",
       "title": "ParryLab",
       "top-title": "仪表板",
        "box-title": "欢迎 <span id='name'></span>!!!",
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
   location.href = "academics/home.html?lang="+sessionStorage.getItem("lang");
 }

 const queryString = window.location.search;
 const language = sessionStorage.getItem('lang')

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
