let languageContent = {
    "en": {
       "homebtn": "Home",
       "newsbtn": "Dashboard",
       "contactbtn": "Tools",
       "langbtn": "English",
       "title": "ParryLab",
       "top-title": "Remove English Course",
    },
    "bm": {
       "homebtn": "Home",
       "newsbtn": "Papan pemuka",
       "contactbtn": "Alatan",
       "langbtn": "Malay",
       "title": "ParryLab",
       "top-title": "Kursus Bahasa Inggeris ",
    },
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
   else {
    switchLang('en')
    sessionStorage.setItem("lang", "en");
   }
}
