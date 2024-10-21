let languageContent = {
    "en": {
       "question1": "1. Which of the following is labelled wrongly in the diagram?",
    },
    "bm": {
        "question1": "1. Antara berikut, yang manakah dilabelkan secara salah dalam rajah?",
    },
    "zh": {
        "question1": "1. Which of the following is labelled wrongly in the diagram?",
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