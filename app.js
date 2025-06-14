angular.module('cvApp', [])
.controller('MainController', function($window, $location) {
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
        ]},
      ],
      linkText: 'Repaired and refurbished devices can be viewed and purchased',
      here: 'here',
      cookieMessage: 'This website uses cookies for informational purposes. By continuing to browse, you consent to this.',
      accept: 'OK'
    }
  };

  vm.sections = [];
  vm.currentSection = null;
  vm.profile = {};
  vm.cookieAccepted = false;

  // Funkcja do przełączania języka
  vm.setLang = function(lang) {
    vm.lang = lang;
    vm.loadData();
  };

  // Załaduj dane dla aktualnego języka
  vm.loadData = function() {
    const data = translations[vm.lang];
    vm.profile = data.profile;
    vm.sections = data.sections;
    // Jeśli aktualna sekcja nie istnieje lub nie jest w nowej liście, ustaw na pierwszą
    if (!vm.currentSection || !vm.sections.find(s => s.id === vm.currentSection.id)) {
      vm.currentSection = vm.sections[0];
      // Ustaw hash w URL na aktualną sekcję
      $window.location.hash = vm.currentSection.id;
    }
  };

  // Przełączanie sekcji po kliknięciu w menu
  vm.selectSection = function(id) {
    const found = vm.sections.find(s => s.id === id);
    if (found) {
      vm.currentSection = found;
      // Ustaw hash w URL
      $window.location.hash = id;
    }
  };

  // Sprawdzanie, czy akceptowano cookies (prosta symulacja)
  vm.acceptCookies = function() {
    vm.cookieAccepted = true;
  };

  // Tłumaczenie tekstów statycznych
  vm.translate = function(key) {
    const keys = key.split('.');
    let val = translations[vm.lang];
    keys.forEach(k => val = val ? val[k] : null);
    return val || key;
  };

  // Inicjalizacja
  vm.init = function() {
    // Sprawdź hash w URL i ustaw sekcję
    const hash = $window.location.hash.substring(1);
    vm.lang = 'pl';
    vm.loadData();

    if (hash) {
      const found = vm.sections.find(s => s.id === hash);
      if (found) {
        vm.currentSection = found;
      }
    }

    // Sprawdź cookie, tu na demo zawsze false, możesz dodać localStorage lub cookies
    vm.cookieAccepted = false;
  };

  vm.init();
});
