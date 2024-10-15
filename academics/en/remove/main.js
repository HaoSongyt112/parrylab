let languageContent = {
    "en": {
       "homebtn": "Home",
       "newsbtn": "News",
       "contactbtn": "Contact",
       "langbtn": "English",
       "title": "ParryLab",
       "top-title": "Remove English Course",
       "classroom": "Classroom",
       "exercises": "Exercises",
       "textbook": "Textbook",
    },
    "bm": {
       "homebtn": "Home",
       "newsbtn": "Berita",
       "contactbtn": "Hubungi Kami",
       "langbtn": "Malay",
       "title": "ParryLab",
       "top-title": "Kursus Bahasa Inggeris ",
       "classroom": "Kelas",
       "exercises": "Latihan",
       "textbook": "Buku Teks",
    },
    "zh": {
       "homebtn": "主页",
       "newsbtn": "新闻",
       "contactbtn": "联络",
       "langbtn": "简体中文",
       "title": "ParryLab",
       "top-title": "课程类别",
       "classroom": "课室",
       "exercises": "练习",
       "textbook": "课本",
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