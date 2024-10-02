let languageContent = {
    "en": {
      "levels": "Levels:",
      "Remove": "Remove",
       "Form1": "Form 1",
       "Form2": "Form 2",
       "Form3": "Form 3",
       "Form4": "Form 4",
       "Form5": "Form 5",
       "title": "Subjects To Choose:",
       "EnglishTxt": "English",
       "MalayTxt": "Malay",
       "ChineseTxt": "Chinese",
       "MathTxt": "Mathematics",
       "ScienceTxt": "Science",
       "GeoTxt": "Geography",
       "HistoryTxt": "History",
       "submit": "Submit",       
    },
    "bm": {
      "levels": "Gred:",
      "Remove": "Tingkatan Peralihan",
       "Form1": "Tingkatan 1",
       "Form2": "Tingkatan 2",
       "Form3": "Tingkatan 3",
       "Form4": "Tingkatan 4",
       "Form5": "Tingkatan 5",
      "title": "Subjek Untuk Dipilih:",
      "EnglishTxt": "Bahasa Inggeris",
       "MalayTxt": "Bahasa Melayu",
       "ChineseTxt": "Bahasa Cina",
       "MathTxt": "Matematik",
       "ScienceTxt": "Sains",
       "GeoTxt": "Geografi",
       "HistoryTxt": "Sejarah",
       "submit": "Hantar",
    },
    "zh": {
      "levels": "级别:",
      "Remove": "留级班",
       "Form1": "初一",
       "Form2": "初二",
       "Form3": "初三",
       "Form4": "初四",
       "Form5": "初五",
      "title": "科目选择:",
      "EnglishTxt": "英文",
       "MalayTxt": "马来文",
       "ChineseTxt": "中文",
       "MathTxt": "数学",
       "ScienceTxt": "科学",
       "GeoTxt": "地理",
       "HistoryTxt": "历史",
       "submit": "提交",
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
 const urlParams = new URLSearchParams(queryString);
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