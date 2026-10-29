// Sadržaj preuzet iz postojećih lekcija kursa. Indeksi ostaju stabilni za buduće čuvanje rezultata.
export const questions = [
  "Često kažem „da“, iako zapravo želim da kažem „ne“.",
  "Branim svoja prava ne ugrožavajući prava drugih.",
  "Radije krijem svoje misli i osećanja ako osobu ne poznajem dovoljno.",
  "Prilično sam autoritativan i odlučan.",
  "Obično je lakše i pametnije postupiti preko posrednika nego direktno.",
  "Ne bojim se da kritikujem i kažem ljudima šta mislim.",
  "Ne usuđujem se da odbijem zadatke koji očigledno ne odgovaraju mojim sposobnostima i veštinama.",
  "Ne bojim se da iznesem svoje mišljenje čak i pred neprijateljski nastrojenim sagovornicima.",
  "Kada postoji rasprava, radije se povučem da vidim šta će se dogoditi.",
  "Ponekad me optužuju da se protivurečim.",
  "Teško mi je da slušam druge.",
  "Znam kako da se približim uticajnim ljudima; to mi je često bilo korisno.",
  "Smatraju me pametnim i snalažljivim kada je reč o odnosima.",
  "Komuniciram s drugima na osnovu poverenja, a ne dominacije ili računice.",
  "Radije ne tražim pomoć kolega, jer bi mogli da pomisle da nisam dovoljno kompetentan.",
  "Stidljiv/a sam i osećam se sputano kada se suočim s neobičnom situacijom.",
  "Kažu da brzo planem; naljutim se i drugi mi se smeju.",
  "Dobro se snalazim u komunikaciji „lice u lice“.",
  "Često glumim; kako drugačije da postigneš ono što želiš?",
  "Brbljiv/a sam i imam običaj da prekidam druge, a da to ni ne primetim na vreme.",
  "Ambiciozan/a sam i spreman/a da uradim sve što je potrebno da dođem tamo gde želim.",
  "Uopšte znam koga treba da vidim i kada; to je važno ako želiš da uspeš.",
  "U slučaju neslaganja, tražim realne kompromise zasnovane na obostranim interesima.",
  "U raspravi radije iznosim sve karte na sto.",
  "Sklon/a sam odlaganju zadataka.",
  "Često napustim posao pre nego što ga završim.",
  "Uglavnom se predstavljam onakvim/om kakav/va jesam, ne skrivajući svoja osećanja.",
  "Potrebno je mnogo da me neko zastraši.",
  "Zastrašivanje drugih je često dobar način da se osvoji moć.",
  "Kada me neko prevari, znam kako da se osvetim.",
  "Da bih kritikovao/la nekoga, efikasno je optužiti ga da ne poštuje sopstvene principe. Moraće da se složi.",
  "Znam kako da obezbedim lične prednosti zahvaljujući svojoj snalažljivosti.",
  "Znam da budem ono što jesam, a da budem društveno prihvaćen/a u isto vreme.",
  "Kada se ne slažem, trudim se da moje mišljenje bude jasno čujno.",
  "Uvek pazim da ne uznemirim druge.",
  "Teško mi je da se opredelim ili izaberem stranu.",
  "Ne volim da budem jedini/a s drugačijim mišljenjem u grupi; u tom slučaju radije ćutim.",
  "Javni nastup me ne zastrašuje.",
  "Život je stalna borba i promena ravnoteže moći.",
  "Ne bojim se da prihvatim opasne i rizične izazove.",
  "Ponekad je održavanje konflikta efikasnije nego smirivanje tenzija.",
  "Otvorena igra je dobar način da se izgradi poverenje.",
  "Dobro slušam i ne prekidam ljude dok govore.",
  "Uvek dovršim ono što sam odlučio/la da uradim.",
  "Ne bojim se da izrazim svoja osećanja.",
  "Znam kako da privolim ljude da prihvate moje ideje.",
  "Malo laskanja je i dalje dobar način da dobiješ ono što želiš.",
  "Teško mi je da kontrolišem vreme koje zauzmem dok govorim.",
  "Znam da dam ironične primedbe.",
  "Prijatan/a sam i druželjubiv/a, ali ponekad me drugi iskorišćavaju.",
  "Radije posmatram nego učestvujem.",
  "Više volim da budem u pozadini nego u prvom planu.",
  "Ne mislim da je manipulacija efikasno rešenje.",
  "Ne treba prebrzo otkrivati svoje namere, to je nespretno.",
  "Često šokiram ljude svojim predlozima i mislima.",
  "Radije bih bio/bila vuk nego jagnje.",
  "Manipulisanje drugima je često jedini praktičan način da se postigne ono što želiš.",
  "Znam kako da efikasno protestujem, bez preterane agresije.",
  "Smatram da se problemi ne mogu rešiti bez traženja njihovih uzroka.",
  "Ne volim da drugi loše misle o meni."
];

export const scoringMap = {
  flight:       [1, 7, 15, 16, 17, 25, 26, 35, 36, 37, 50, 51, 52, 59, 60],
  attack:       [4, 6, 10, 11, 20, 21, 28, 29, 30, 39, 40, 48, 49, 55, 56],
  manipulation: [3, 5, 9, 12, 13, 19, 22, 31, 32, 41, 42, 46, 47, 54, 57],
  harmonious:   [2, 8, 14, 18, 23, 24, 27, 33, 34, 38, 43, 44, 45, 53, 58],
};

export const situations = [
  {
    description: "Vaš kolega je stigao sat vremena kasnije na poslovnu večeru...",
    responses: [
      "U redu je. Hoćemo da jedemo sada?",
      "Čekao/la sam sat vremena. Značilo bi mi da si mi javio da ćeš kasniti.",
      "Baš imaš obraza da toliko kasniš!",
      "U redu je. (I onda nađete izgovor da odete u svoju sobu...)"
    ],
  },
  {
    description: "Vaša koleginica Suzana konstantno vam daje njen posao...",
    responses: [
      "Veoma sam zauzet/a. Ali ako nisi u mogućnosti da završiš...",
      "„OK“, kažete, i onda se požalite šefu.",
      "Zaboravi. Krajnje je vreme da uradiš svoj posao...",
      "Ne, Suzana. Neću više raditi tvoj deo posla..."
    ],
  },
  {
    description: "Kolega vam je uputio kompliment za vaš novi komad odeće...",
    responses: [
      "Hvala ti.",
      "Hvala. Mogao bi da razmisliš o obnavljanju svoje garderobe...",
      "Pa, kupio/la sam to na rasprodaji.",
      "Imam sreće da mogu da kupim markiranu odeću za moj posao."
    ],
  },
  {
    description: "Vaš pretpostavljeni vam je upravo dao prosečnu ocenu rada...",
    responses: [
      "Razumem. Možda bi obim posla mogao biti manji.",
      "Cenim vaš feedback i voleo/la bih da znam kako mogu unaprediti...",
      "Mislim da vam se ne sviđam. Možda bih trebao/la dati otkaz.",
      "Spustite glavu kao odgovor."
    ],
  },
];

export const styles = [
  "Asertivno",
  "Agresivno",
  "Pasivno",
  "Pasivno-agresivno"
];

export const rights = [
  {
    id: 1,
    text: "Ja imam pravo na vrednost i da budem voljen/a.",
    past: "Zabrana na vrijednost i odluka da se ne vrijedi.",
  },
  {
    id: 2,
    text: "Ja imam pravo da postojim.",
    past: "Zabrana postojanja i odluka da se umre.",
  },
  {
    id: 3,
    text: "Ja imam pravo da budem dete.",
    past: "Zabrana na odrastanje i odluka da se ne bude dete.",
  },
  {
    id: 4,
    text: "Ja imam pravo na samostalnost.",
    past: "Zabrana na samostalnost i odluka da se ostane uz roditelje.",
  },
  {
    id: 5,
    text: "Ja imam pravo da mislim svojom glavom.",
    past: "Zabrana na mišljenje i odluka da se ne misli svojom glavom.",
  },
  {
    id: 6,
    text: "Ja imam pravo na uspeh.",
    past: "Zabrana na uspeh i odluka da se bude neuspešan.",
  },
  {
    id: 7,
    text: "Ja imam pravo da osećam svoja osećanja.",
    past: "Zabrana na osećanje i odluka da se ne oseća osećanje.",
  },
  {
    id: 8,
    text: "Ja imam pravo da verujem ljudima.",
    past: "Zabrana na povjerenje i odluka da se nikom ne vjeruje.",
  },
  {
    id: 9,
    text: "Ja imam pravo na bliskost.",
    past: "Zabrana na bliskost i odluka da se ne ulazi u bliske veze.",
  },
  {
    id: 10,
    text: "Ja imam pravo na svoju seksualnost.",
    past: "Zabrana na seksualnost i odluka da se bude aseksualen.",
  },
  {
    id: 11,
    text: "Ja imam pravo da budem slab i bolestan.",
    past: "Zabrana na bolest i slabost i odluka da se uvijek bude zdrav.",
  },
  {
    id: 12,
    text: "Ja imam pravo da budem zdrav.",
    past: "Zabrana na zdravlje i odluka da se bude bolestan.",
  },
];

export const demands = [
  {
    id: 13,
    text: "Ja imam pravo da ne budem savršen/a.",
    past: "Budi savršen.",
  },
  {
    id: 14,
    text: "Ja imam pravo da budem slab/a.",
    past: "Budi jak.",
  },
  {
    id: 15,
    text: "Ja imam pravo da se odmaram i uživam.",
    past: "Radi naporno.",
  },
  {
    id: 16,
    text: "Ja imam pravo da ne ugađam svima.",
    past: "Ugađaj drugima.",
  },
  {
    id: 17,
    text: "Ja imam pravo da ne ispunjavam sve svoje želje odmah.",
    past: "Ugađaj sebi.",
  },
  {
    id: 18,
    text: "Ja imam pravo da ne uspem u svemu.",
    past: "Moram uspeti.",
  },
  {
    id: 19,
    text: "Ja imam pravo da usporim.",
    past: "Budi brz.",
  },
];

export const skills = [
  "Gledam u oči",
  "Primim kritiku",
  "Uputim kritiku",
  "Primim pohvalu",
  "Uputim pohvalu",
  "Kažem šta zaista mislim",
  "Izrazim svoje neslaganje",
  "Odbijem zahtev",
  "Tražim uslugu",
];

export const people = [
  "Partner/supružnik",
  "Roditelji",
  "Braća, sestre",
  "Deca",
  "Rođaci",
  "Roditelji partnera",
  "Prijatelji",
  "Stariji ljudi",
  "Komšije",
  "Poznanici",
  "Nepoznati ljudi",
  "Osobe suprotnog pola",
  "Poslodavci",
  "Kolege, saradnici",
  "Nastavnici, profesori",
  "Službenici",
  "Prodavci",
  "Konobari",
  "Majstori",
  "Doktori",
];

