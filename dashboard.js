let languageContent = {
    "en": {
       "homebtn": "Home",
       "newsbtn": "Dashboard",
       "contactbtn": "Back",
       "langbtn": "English",
       "title": "ParryLab",
       "top-title": "Dashboard",
       "academics": "Academics",
       "cocurriculum": "Co-Curriculum",
    },
    "bm": {
       "homebtn": "Home",
       "newsbtn": "Berita",
       "contactbtn": "Hubungi Kami",
       "langbtn": "Malay",
       "title": "ParryLab",
       "top-title": "Kategori",
       "academics": "Akademik",
       "cocurriculum": "Ko-Kurikulum",
    },
    "zh": {
       "homebtn": "主页",
       "newsbtn": "新闻",
       "contactbtn": "联络",
       "langbtn": "简体中文",
       "title": "ParryLab",
       "top-title": "课程类别",
       "academics": "学术",
       "cocurriculum": "课外活动",
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