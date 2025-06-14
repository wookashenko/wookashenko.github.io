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
        { id: 'o-mnie', title: 'O mnie', content: 'Cześć, nazywam się Łukasz i od kilku miesięcy zajmuję się odnową urządzeń mobilnych, głównie telefonów firmy Apple. Interesuję się sportem, polityką i motoryzacją. Wolny czas lubię spędzać na graniu w gry komputerowe, oglądaniu seriali i czytaniu książęk typu thriller/kryminał. Jestem osobą dokładną i precyzyjną, dbam o detale i jakość wykonywanej przeze mnie pracy. Chętnie uczę się nowych rzeczy i lubię doskonalić swoje umiejętności.' },
        { id: 'wyksztalcenie', title: 'Wykształcenie', tags: ['2022–obecnie: Szkoła Główna Gospodarstwa Wiejskiego, Informatyka']},
        { id: 'doswiadczenie', title: 'Doświadczenie', tags: ['lipiec 2023–październik 2024: Tester wyświetlaczy - GSMOK', 'październik 2024–styczeń 2025: Młodszy specjalista ds. wsparcia IT - moreBIT (grupa Symfonia)', 'luty 2025–obecnie: Młodszy specjalista ds. odnowy urządzeń mobilnych - Bolttech Repairs Poland']},
        { id: 'umiejetnosci', title: 'Umiejętności', items: [
          { name: 'Programowanie', stars: 3 },
          { name: 'Zdolności manualne', stars: 5 },
          { name: 'Dokładność', stars: 5 },
          { name: 'Prawo jazdy: kategorie B i T', stars: 5 },
          { name: 'Język angielski', stars: 4 },
          { name: 'Język rosyjski', stars: 2 }
        ]},
        { id: 'zainteresowania', title: 'Zainteresowania', items: [
          { name: 'Technologia', stars: 5 },
          { name: 'Polityka', stars: 5 },
          { name: 'Motoryzacja', stars: 4 },
          { name: 'Sport', stars: 4 },
          { name: 'Historia', stars: 4 }
        ]},
        { id: 'linki', title: 'Linki', link: 'https://luxtrade.pl/', socials: [
          { icon: 'images/facebook.svg', href: 'https://www.facebook.com/profile.php?id=100008666132198&locale=pl_PL' },
          { icon: 'images/x.svg', href: 'https://x.com/wookashenko' }
        ]}
      ],
      linkText: 'Naprawione i odnowione przeze mnie urządzenia możesz obejrzeć i zakupić',
      here: 'tutaj',
      cookieMessage: 'Ta strona używa plików cookie w celach informacyjnych. Kontynuując przeglądanie, wyrażasz na to zgodę.',
      accept: 'OK'
    },
    en: {
      profile: {
        name: 'Łukasz Bartnik',
        title: 'Junior refurb specialist of mobile devices'
      },
      sections: [
        { id: 'o-mnie', title: 'About Me', content: 'Hi, my name is Łukasz and for a few months now I have been dealing with the refurbishment of mobile devices, mainly Apple phones. I am interested in sports, politics and motoring. I like to spend my free time playing computer games, watching series and reading thriller/crime books. I am a precise and accurate person, I care about details and the quality of the work I do. I am eager to learn new things and I like to improve my skills.' },
        { id: 'wyksztalcenie', title: 'Education', tags: ['2022–currently: Warsaw University of Life Sciences, Computer Science'] },
        { id: 'doswiadczenie', title: 'Experience', tags: ['july 2023–october 2024: Display tester - GSMOK', 'october 2024–january 2025: Junior helpdesk IT specialist - moreBIT (group Symfonia)', 'february 2025–currently: Junior refurb specialist of mobile devices - Bolttech Repairs Poland']},
        { id: 'umiejetnosci', title: 'Skills', items: [
          { name: 'Programming', stars: 3 },
          { name: 'Manual Dexterity', stars: 5 },
          { name: 'Precision', stars: 5 },
          { name: 'Driving License: categories B and T', stars: 5 },
          { name: 'English language', stars: 4 },
          { name: 'Russian language', stars: 2 }
        ]},
        { id: 'zainteresowania', title: 'Interests', items: [
          { name: 'Technology', stars: 5 },
          { name: 'Politics', stars: 5 },
          { name: 'Automotive', stars: 4 },
          { name: 'Sport', stars: 4 },
          { name: 'History', stars: 4 }
        ]},
        { id: 'linki', title: 'Links', link: 'https://luxtrade.pl/', socials: [
          { icon: 'images/facebook.svg', href: 'https://www.facebook.com/profile.php?id=100008666132198&locale=pl_PL' },
          { icon: 'images/x.svg', href: 'https://x.com/wookashenko' }
        ]}
      ],
      linkText: 'You can view and purchase my refurbished devices',
      here: 'here',
      cookieMessage: 'This website uses cookies for informational purposes. By continuing to browse, you consent to their use.',
      accept: 'OK'
    }
  };

  vm.cookieAccepted = false;

  vm.profile = {};
  vm.sections = [];
  vm.currentSection = null;

  vm.setLang = function(lang) {
    vm.lang = lang;
    vm.loadContent(vm.currentSection?.id);
  };

  vm.translate = function(key) {
    return translations[vm.lang][key] || '';
  };

  vm.loadContent = function(selectedId) {
    const t = translations[vm.lang];
    vm.profile = t.profile;
    vm.sections = t.sections;
    vm.currentSection = t.sections.find(s => s.id === selectedId) || t.sections[0];
  };

  vm.selectSection = function(id) {
    vm.currentSection = vm.sections.find(s => s.id === id);
  };

  vm.acceptCookies = function() {
    vm.cookieAccepted = true;
  };

  vm.setLang('pl'); // default
});
