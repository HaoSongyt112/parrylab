let languageContent = {
    "en": {
       "homebtn": "Home",
       "experiencebtn": "ParryLab <br> Experience",
       "aboutbtn": "About Me",
       "langbtn": "English",
       "title1": "My Creators!",
       "title2": "Coding Team",
       "title3": "Content Team",
       "text1": "ParryLab's is created by three students from SMKSK. Hao Song, Khoo Joshua and Joshua Fong, The three of them formed a group name J&H to embark on a journey to make ParryLab the best learning experience on the Internet",
       "text2": "The coding behind ParryLab is led by Hao Song. Using his coding knowledge, he provides ParryLab with a smooth and attractive design, as well as a functioning interface to let users interact with ease. <br><br> Hao Song, our coding maestro. Gives life and function to Parry's amazing classroom/lab. Hao Song has great problem solving skills, able to repair errors in matter of seconds <br><br> His excellent coding brings users a wonderful experience towards ParryLab. Not only that, Hao Song has extraordinary creativity",
       "text3": "The content inside of ParryLab is provided by Joshua Fong and Khoo Joshua. Both Joshua's work to give the best content for ParryLab, using their creativity to make lessons plans for each subjects. <br><br> Khoo Joshua is tasked with writing for Parry's messages. He has flawless grammar, keeps you enticed while reading and never fails to impress with his words <br><br> His grammar abilities gives him a wide range of writing options, Khoo Joshua brings writing excellency to ParryLab",
       "text4": "The graphics for ParryLab is provided by Joshua Fong. He is tasked with graphics because of his creativity and open mind <br><br> Using his creativity, he can bring colour and vibrance towards the site. Joshua Fong also helps to edit and polish off Parry",
       "ftitle": "ParryLab",
       "fdesc": "© 2024 All rights reserved",
       "fsocial": "Find us via social medias!",
    },
    "bm": {
       "homebtn": "Home",
       "experiencebtn": "Pengalaman <br> ParryLab",
       "aboutbtn": "Pengenalan <br> Parry",
       "langbtn": "Malay",
       "title1": "Pencipta Aku!",
       "title2": "Pasukan Pengekodan",
       "title3": "Pasukan Kandungan",
       "text1": "ParryLab's dicipta oleh tiga pelajar dari SMKSK. Hao Song, Khoo Joshua dan Joshua Fong, Mereka bertiga membentuk nama kumpulan J&H untuk memulakan perjalanan menjadikan ParryLab pengalaman pembelajaran terbaik di Internet",
       "text2": "Pengekodan di belakang ParryLab diketuai oleh Hao Song. Menggunakan pengetahuan pengekodannya, dia menyediakan ParryLab dengan reka bentuk yang licin dan menarik, serta antara muka yang berfungsi untuk membolehkan pengguna berinteraksi dengan mudah. <br><br> Hao Song, maestro pengekodan kami. Memberi kehidupan dan fungsi kepada bilik darjah/makmal Parry yang menakjubkan. Hao Song mempunyai kemahiran menyelesaikan masalah yang hebat, mampu membaiki ralat dalam masa beberapa saat <br><br> Pengekodannya yang cemerlang membawa pengguna pengalaman yang indah terhadap ParryLab. Bukan itu sahaja, Hao Song mempunyai kreativiti yang luar biasa",
       "text3": "Kandungan di dalam ParryLab disediakan oleh Joshua Fong dan Khoo Joshua. Kedua-dua kerja Joshua untuk memberikan kandungan terbaik untuk ParryLab, menggunakan kreativiti mereka untuk membuat rancangan pengajaran bagi setiap mata pelajaran. <br><br> Khoo Joshua ditugaskan untuk menulis untuk mesej Parry. Dia mempunyai tatabahasa yang sempurna, membuatkan anda terpikat semasa membaca dan tidak pernah gagal untuk menarik perhatian dengan kata-katanya <br><br> Kebolehan tatabahasanya memberikannya pelbagai pilihan penulisan, Khoo Joshua membawa kecemerlangan penulisan kepada ParryLab",
       "text4": "Grafik untuk ParryLab disediakan oleh Joshua Fong. Dia ditugaskan dengan grafik kerana kreativiti dan mindanya yang terbuka <br><br> Menggunakan kreativitinya, dia boleh membawa warna dan semangat ke arah tapak. Joshua Fong turut membantu mengedit dan menggilap Parry",
       "ftitle": "ParryLab",
       "fdesc": "© 2024 Semua hak terpelihara",
       "fsocial": "Cari kami melalui media sosial!",
    },
    "zh": {
       "homebtn": "主页",
       "experiencebtn": "帕里实验室",
       "aboutbtn": "关于帕里",
       "langbtn": "简体中文",
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