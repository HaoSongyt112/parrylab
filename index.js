let languageContent = {
    "en": {
       "experiencebtn": "ParryLab <br> Experience",
       "creatorsbtn": "My Creators",
       "aboutbtn": "About Me",
       "langbtn": "English",
       "title": "ParryLab",
       "title1": "Education is Life<br>And the Future is Right Around",
       "aboutme": "About Me!",
       "desc": "Hello! I am Parry, I will assist you in your journey to academic greatness! I am created by 3 students from SMK Seri Kembangan, My creators have designed me to be advanced yet simple. Find out more by exploring my features!",
       "ftitle": "ParryLab",
       "fdesc": "© 2024 All rights reserved",
       "fsocial": "Find us via social medias!",
    },
    "bm": {
       "experiencebtn": "Pengalaman <br> ParryLab",
       "creatorsbtn": "Pencipta Parry",
       "aboutbtn": "Pengenalan Parry",
       "langbtn": "Malay",
       "title": "ParryLab",
       "title1": "Pendidikan adalah Kehidupan<br>Dan Masa Depannya Ada Di Sekitar",
       "aboutme": "Tentang Saya!",
       "desc": "Hi! Saya Parry, saya akan membantu anda dalam perjalanan anda ke arah kehebatan akademik! Saya dicipta oleh 3 orang pelajar dari SMK Seri Kembangan, Pencipta saya telah membentuk secara lebih maju lagi mudah. Ketahui lebih lanjut dengan meneroka ciri saya!",
       "ftitle": "ParryLab",
       "fdesc": "© 2024 Semua hak terpelihara",
       "fsocial": "Cari kami melalui media sosial!",
    },
    "zh": {
       "experiencebtn": "帕里实验室",
       "creatorsbtn": "帕里的创办人",
       "aboutbtn": "关于帕里",
       "langbtn": "简体中文",
       "title": "ParryLab",
       "title1": "教育就是生活<br>而它的未来就在眼前",
       "aboutme": "关于我!",
       "desc": "你好！我是帕里，我将协助您实现学术成就！我是由 3 位来自 SMK Seri Kembangan 的学生创建的，我的创作者将我设计得既高级又简单。通过探索我的功能了解更多！",
       "ftitle": "ParryLab",
       "fdesc": "© 2024 版权所有",
       "fsocial": "在社交媒体上找到我们！",
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