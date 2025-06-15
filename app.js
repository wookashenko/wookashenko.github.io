angular.module('cvApp', [])
.controller('MainController', function($window) {
  const vm = this;

  vm.lang = 'pl';

  const translations = {
    pl: {
      profile: {
        name: 'Łukasz Bartnik',
        title: 'Młodszy specjalista ds. odnowy urządzeń mobilnych'
      },
      sections: [
        { id: 'about-me', title: 'O mnie', content: 'Cześć, nazywam się Łukasz i od kilku miesięcy zajmuję się odnową urządzeń mobilnych, głównie telefonów firmy Apple. Interesuję się sportem, polityką i motoryzacją. Wolny czas lubię spędzać na graniu w gry komputerowe, oglądaniu seriali i czytaniu książęk typu thriller/kryminał. Jestem osobą dokładną i precyzyjną, dbam o detale i jakość wykonywanej przeze mnie pracy. Chętnie uczę się nowych rzeczy i lubię doskonalić swoje umiejętności.' },
        { id: 'education', title: 'Wykształcenie', tags: ['2022–obecnie: Szkoła Główna Gospodarstwa Wiejskiego, Informatyka']},
        { id: 'experience', title: 'Doświadczenie', tags: ['lipiec 2023–październik 2024: Tester wyświetlaczy - GSMOK', 'październik 2024–styczeń 2025: Młodszy specjalista ds. wsparcia IT - moreBIT (grupa Symfonia)', 'luty 2025–obecnie: Młodszy specjalista ds. odnowy urządzeń mobilnych - Bolttech Repairs Poland']},
        { id: 'skills', title: 'Umiejętności', items: [
          { name: 'Programowanie', stars: 3 },
          { name: 'Zdolności manualne', stars: 5 },
          { name: 'Dokładność', stars: 5 },
          { name: 'Prawo jazdy: kategorie B i T', stars: 5 },
          { name: 'Język angielski', stars: 4 },
          { name: 'Język rosyjski', stars: 2 }
        ]},
        { id: 'interests', title: 'Zainteresowania', items: [
          { name: 'Technologia', stars: 5 },
          { name: 'Polityka', stars: 5 },
          { name: 'Motoryzacja', stars: 4 },
          { name: 'Sport', stars: 4 },
          { name: 'Historia', stars: 4 }
        ]},
        { id: 'links', title: 'Linki', link: 'https://luxtrade.pl/', socials: [
          { icon: 'images/facebook.svg', href: 'https://www.facebook.com/profile.php?id=100008666132198&locale=pl_PL' },
          { icon: 'images/x.svg', href: 'https://x.com/wookashenko' }
        ]}
      ],
      linkText: 'Naprawione i odnowione przeze mnie urządzenia możesz obejrzeć i zakupić',
      here: 'tutaj',
      cookieMessage: 'Ta strona używa plików cookie w celach informacyjnych. Kontynuując przeglądanie, wyrażasz na to zgodę.',
      accept: 'Ok'
    },
    en: {
      profile: {
        name: 'Łukasz Bartnik',
        title: 'Junior Specialist in Mobile Device Refurbishment'
      },
      sections: [
        { id: 'about-me', title: 'About Me', content: 'Hi, my name is Łukasz and for several months I have been refurbishing mobile devices, mainly Apple phones. I am interested in sports, politics, and automotive topics. In my free time I enjoy playing computer games, watching series, and reading thrillers/crime books. I am precise and careful, I pay attention to detail and the quality of my work. I like learning new things and improving my skills.' },
        { id: 'education', title: 'Education', tags: ['2022–present: Warsaw University of Life Sciences, Computer Science']},
        { id: 'experience', title: 'Experience', tags: ['July 2023–October 2024: Display Tester - GSMOK', 'October 2024–January 2025: Junior IT Support Specialist - moreBIT (Symfonia Group)', 'February 2025–present: Junior Specialist in Mobile Device Refurbishment - Bolttech Repairs Poland']},
        { id: 'skills', title: 'Skills', items: [
          { name: 'Programming', stars: 3 },
          { name: 'Manual dexterity', stars: 5 },
          { name: 'Accuracy', stars: 5 },
          { name: 'Driver license: categories B and T', stars: 5 },
          { name: 'English language', stars: 4 },
          { name: 'Russian language', stars: 2 }
        ]},
        { id: 'interests', title: 'Interests', items: [
          { name: 'Technology', stars: 5 },
          { name: 'Politics', stars: 5 },
          { name: 'Automotive', stars: 4 },
          { name: 'Sports', stars: 4 },
          { name: 'History', stars: 4 }
        ]},
        { id: 'links', title: 'Links', link: 'https://luxtrade.pl/', socials: [
          { icon: 'images/facebook.svg', href: 'https://www.facebook.com/profile.php?id=100008666132198&locale=en_US' },
          { icon: 'images/x.svg', href: 'https://x.com/wookashenko' }
        ]}
      ],
      linkText: 'You can view and buy devices repaired and refurbished by me',
      here: 'here',
      cookieMessage: 'This website uses cookies for informational purposes. By continuing to browse, you consent to their use.',
      accept: 'Ok'
    }
  };

  vm.sections = translations[vm.lang].sections;
  vm.profile = translations[vm.lang].profile;
  vm.lang = 'pl';
  vm.currentSection = vm.sections[0];
  vm.cookieAccepted = localStorage.getItem('cookieAccepted') === 'true';

  vm.selectSection = function(id) {
    vm.currentSection = vm.sections.find(section => section.id === id);
  };

  vm.setLang = function(lang) {
    const currentSectionId = vm.currentSection ? vm.currentSection.id : null;
    vm.lang = lang;
    vm.sections = translations[lang].sections;
    vm.profile = translations[lang].profile;

    vm.currentSection = vm.sections.find(section => section.id === currentSectionId) || vm.sections[0];
  };

  vm.translate = function(key) {
    return translations[vm.lang][key] || '';
  };

  vm.acceptCookies = function() {
    vm.cookieAccepted = true;
    localStorage.setItem('cookieAccepted', 'true');
  };
});
