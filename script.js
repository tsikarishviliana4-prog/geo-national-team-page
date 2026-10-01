/**
 * საქართველოს ეროვნული საფეხბურთო ნაკრები — Interactive App Script
 * Features: Dynamic Squad Filtering, Latin/Georgian Search, Player Detail Modal,
 * Interactive Fan Zone Poll & Trivia Quiz, Dark/Light Mode.
 */

// ---------------------------------------------------------------------------
// 1. Full Squad Dataset (26+ Players)
// ---------------------------------------------------------------------------
const SQUAD_DATA = [
  // --- GOALKEEPERS (მეკარეები) ---
  {
    id: "mamardashvili",
    number: 25,
    nameKa: "გიორგი მამარდაშვილი",
    nameEn: "Giorgi Mamardashvili",
    position: "GK",
    positionNameKa: "მეკარე",
    age: 24,
    birthDate: "29 სექტემბერი, 2000",
    birthPlace: "თბილისი, საქართველო",
    height: "199 სმ",
    club: "ვალენსია / ლივერპული",
    clubCountry: "ესპანეთი",
    clubFlag: "🇪🇸",
    caps: 25,
    goals: 0,
    marketValue: "€45.00M",
    highlight: "ევრო 2024-ის საუკეთესო მეკარე (30 სეივი)",
    bio: "მსოფლიოს ერთ-ერთი ყველაზე ძვირადღირებული მეკარე. ევრო 2024-ის მთავარი გმირი, რომელმაც ტურნირის რეკორდი დაამყარა სეივების რაოდენობით. 2024 წელს გააფორმა კონტრაქტი „ლივერპულთან“."
  },
  {
    id: "loria",
    number: 1,
    nameKa: "გიორგი ლორია",
    nameEn: "Giorgi Loria",
    position: "GK",
    positionNameKa: "მეკარე",
    age: 38,
    birthDate: "27 იანვარი, 1986",
    birthPlace: "თბილისი, საქართველო",
    height: "197 სმ",
    club: "ომონია არადიპუ",
    clubCountry: "კვიპროსი",
    clubFlag: "🇨🇾",
    caps: 78,
    goals: 0,
    marketValue: "€100K",
    highlight: "ნაკრების გამოცდილი ვეტერანი",
    bio: "საქართველოს ნაკრების ერთ-ერთი ყველაზე ერთგული და გამოცდილი მეკარე, რომელმაც ეროვნული გუნდის ღირსება 78-ზე მეტ შეხვედრაში დაიცვა."
  },
  {
    id: "gugeshashvili",
    number: 12,
    nameKa: "ლუკა გუგეშაშვილი",
    nameEn: "Luka Gugeshashvili",
    position: "GK",
    positionNameKa: "მეკარე",
    age: 25,
    birthDate: "29 აპრილი, 1999",
    birthPlace: "თბილისი, საქართველო",
    height: "196 სმ",
    club: "პანსერაიკოსი",
    clubCountry: "საბერძნეთი",
    clubFlag: "🇬🇷",
    caps: 2,
    goals: 0,
    marketValue: "€600K",
    highlight: "საიმედო მეკარე",
    bio: "ნიჭიერი მეკარე, რომელმაც წარმატებული პერიოდი გაატარა აზერბაიჯანის „ყარაბაღში“ და ჩემპიონთა ლიგის საკვალიფიკაციო ეტაპებზე, ამჟამად კი საბერძნეთში ასპარეზობს."
  },

  // --- DEFENDERS (მცველები) ---
  {
    id: "kashia",
    number: 4,
    nameKa: "გურამ კაშია",
    nameEn: "Guram Kashia",
    position: "DEF",
    positionNameKa: "ცენტრალური მცველი",
    age: 37,
    birthDate: "4 ივლისი, 1987",
    birthPlace: "თბილისი, საქართველო",
    height: "185 სმ",
    club: "სლოვანი ბრატისლავა",
    clubCountry: "სლოვაკეთი",
    clubFlag: "🇸🇰",
    caps: 122,
    goals: 3,
    marketValue: "€300K",
    highlight: "ნაკრების კაპიტანი & რეკორდსმენი",
    bio: "ნაკრების ლეგენდარული კაპიტანი, რომელსაც 120-ზე მეტი სანაკრებო მატჩი აქვს ჩატარებული. დაცვის ხაზის ურყევი ლიდერი და ქართული ფეხბურთის ნამდვილი სიმბოლო."
  },
  {
    id: "kakabadze",
    number: 2,
    nameKa: "ოთარ კაკაბაძე",
    nameEn: "Otar Kakabadze",
    position: "DEF",
    positionNameKa: "მარჯვენა მცველი",
    age: 29,
    birthDate: "27 ივნისი, 1995",
    birthPlace: "თბილისი, საქართველო",
    height: "186 სმ",
    club: "კრაკოვია",
    clubCountry: "პოლონეთი",
    clubFlag: "🇵🇱",
    caps: 68,
    goals: 0,
    marketValue: "€1.20M",
    highlight: "ევრო 2024-ის ერთ-ერთი საუკეთესო მცველი",
    bio: "ფლანგის უსწრაფესი და დაუღალავი მცველი. ევრო 2024-ზე შესანიშნავი თამაშით საერთაშორისო ექსპერტების დიდი მოწონება დაიმსახურა."
  },
  {
    id: "dvali",
    number: 3,
    nameKa: "ლაშა დვალი",
    nameEn: "Lasha Dvali",
    position: "DEF",
    positionNameKa: "ცენტრალური მცველი",
    age: 29,
    birthDate: "14 მაისი, 1995",
    birthPlace: "თბილისი, საქართველო",
    height: "191 სმ",
    club: "აპოელი ნიქოზია",
    clubCountry: "კვიპროსი",
    clubFlag: "🇨🇾",
    caps: 38,
    goals: 1,
    marketValue: "€1.00M",
    highlight: "ევრო 2024-ის დაცვის ბურჯი",
    bio: "ცენტრალური მცველი, რომელმაც ევროპის ჩემპიონატზე უმაღლესი დონის საიმედოობა აჩვენა პორტუგალიასთან, ჩეხეთთან და ესპანეთთან შეხვედრებში."
  },
  {
    id: "lochoshvili",
    number: 14,
    nameKa: "ლუკა ლოჩოშვილი",
    nameEn: "Luka Lochoshvili",
    position: "DEF",
    positionNameKa: "ცენტრალური / მარცხენა მცველი",
    age: 26,
    birthDate: "29 მაისი, 1998",
    birthPlace: "თბილისი, საქართველო",
    height: "192 სმ",
    club: "კრემონეზე",
    clubCountry: "იტალია",
    clubFlag: "🇮🇹",
    caps: 18,
    goals: 1,
    marketValue: "€1.50M",
    highlight: "FIFA Fair Play ჯილდოს მფლობელი",
    bio: "ფიზიკურად უძლიერესი მცველი. ცნობილია თავისი გმირობით (მოწინააღმდეგე ფეხბურთელის სიცოცხლის გადარჩენით), რისთვისაც ფიფას სპეციალური ჯილდო გადაეცა."
  },
  {
    id: "gvelesiani",
    number: 15,
    nameKa: "გიორგი გველესიანი",
    nameEn: "Giorgi Gvelesiani",
    position: "DEF",
    positionNameKa: "ცენტრალური მცველი",
    age: 33,
    birthDate: "5 მაისი, 1991",
    birthPlace: "თბილისი, საქართველო",
    height: "193 სმ",
    club: "პერსეპოლისი",
    clubCountry: "ირანი",
    clubFlag: "🇮🇷",
    caps: 6,
    goals: 0,
    marketValue: "€400K",
    highlight: "ევრო 2024-ის სენსაციური დებიუტანტი",
    bio: "ირანის ჩემპიონატის ორგზის გამარჯვებული. 33 წლის ასაკში ჰქონდა ზღაპრული დებიუტი ევროპის ჩემპიონატზე, სადაც პორტუგალიასთან გამარჯვებაში უდიდესი როლი ითამაშა."
  },
  {
    id: "goglichidze",
    number: 5,
    nameKa: "საბა გოგლიჩიძე",
    nameEn: "Saba Goglichidze",
    position: "DEF",
    positionNameKa: "ცენტრალური მცველი",
    age: 20,
    birthDate: "25 ივნისი, 2004",
    birthPlace: "ქუთაისი, საქართველო",
    height: "188 სმ",
    club: "ემპოლი",
    clubCountry: "იტალია",
    clubFlag: "🇮🇹",
    caps: 2,
    goals: 0,
    marketValue: "€5.00M",
    highlight: "იტალიის სერია A-ს ამომავალი ვარსკვლავი",
    bio: "ქართული ფეხბურთის ერთ-ერთი ყველაზე პერსპექტიული ცენტრალური მცველი. 2024 წელს დაიმკვიდრა ადგილი სერია A-ს „ემპოლის“ ძირითად შემადგენლობაში."
  },
  {
    id: "gocholeishvili",
    number: 13,
    nameKa: "გიორგი გოჩოლეიშვილი",
    nameEn: "Giorgi Gocholeishvili",
    position: "DEF",
    positionNameKa: "მარჯვენა მცველი",
    age: 23,
    birthDate: "14 თებერვალი, 2001",
    birthPlace: "ქუთაისი, საქართველო",
    height: "178 სმ",
    club: "კოპენჰაგენი",
    clubCountry: "დანია",
    clubFlag: "🇩🇰",
    caps: 10,
    goals: 0,
    marketValue: "€2.50M",
    highlight: "ჩემპიონთა ლიგის გამოცდილება",
    bio: "შეტევაში უაღრესად პროდუქტიული და ენერგიული ფლანგის მცველი, რომელიც ევროტურნირებზე რეგულარულად ასპარეზობს."
  },
  {
    id: "azarovi",
    number: 18,
    nameKa: "ირაკლი აზაროვი",
    nameEn: "Irakli Azarovi",
    position: "DEF",
    positionNameKa: "მარცხენა მცველი",
    age: 22,
    birthDate: "21 თებერვალი, 2002",
    birthPlace: "ბათუმი, საქართველო",
    height: "179 სმ",
    club: "შახტარი დონეცკი",
    clubCountry: "უკრაინა",
    clubFlag: "🇺🇦",
    caps: 18,
    goals: 0,
    marketValue: "€5.00M",
    highlight: "ევროპის ჩემპიონთა ლიგის ასისტისტი",
    bio: "უმაღლესი ტექნიკითა და ჩაწოდებებით გამორჩეული მარცხენა მცველი. დონეცკის „შახტარის“ შემადგენლობაში ევროპის წამყვან გუნდებთან არაერთი ბრწყინვალე მატჩი აქვს ჩატარებული."
  },
  {
    id: "kvirkvelia",
    number: 21,
    nameKa: "სოლომონ კვირკველია",
    nameEn: "Solomon Kvirkvelia",
    position: "DEF",
    positionNameKa: "ცენტრალური მცველი",
    age: 32,
    birthDate: "6 თებერვალი, 1992",
    birthPlace: "სამტრედია, საქართველო",
    height: "196 სმ",
    club: "დინამო თბილისი",
    clubCountry: "საქართველო",
    clubFlag: "🇬🇪",
    caps: 62,
    goals: 0,
    marketValue: "€700K",
    highlight: "60+ მატჩი ეროვნულ ნაკრებში",
    bio: "წლების განმავლობაში ეროვნული გუნდის შეუცვლელი ცენტრალური მცველი, რომელმაც დიდი წვლილი შეიტანა ნაკრების ევრო 2024-ზე გასვლაში."
  },
  {
    id: "tabidze",
    number: 24,
    nameKa: "ჯემალ ტაბიძე",
    nameEn: "Jemal Tabidze",
    position: "DEF",
    positionNameKa: "ცენტრალური მცველი",
    age: 28,
    birthDate: "18 მარტი, 1996",
    birthPlace: "სამტრედია, საქართველო",
    height: "187 სმ",
    club: "დინამო მახაჩყალა",
    clubCountry: "რუსეთი",
    clubFlag: "🇷🇺",
    caps: 15,
    goals: 1,
    marketValue: "€800K",
    highlight: "მებრძოლი ხასიათის მცველი",
    bio: "მებრძოლი სულისკვეთებითა და პოზიციური თამაშით გამორჩეული მცველი, ევრო 2024-ის განაცხადის წევრი."
  },

  // --- MIDFIELDERS (ნახევარმცველები) ---
  {
    id: "chakvetadze",
    number: 10,
    nameKa: "გიორგი ჩაკვეტაძე",
    nameEn: "Giorgi Chakvetadze",
    position: "MID",
    positionNameKa: "შემტევი ნახევარმცველი",
    age: 25,
    birthDate: "29 აგვისტო, 1999",
    birthPlace: "თბილისი, საქართველო",
    height: "183 სმ",
    club: "უოტფორდი",
    clubCountry: "ინგლისი",
    clubFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    caps: 31,
    goals: 9,
    marketValue: "€4.50M",
    highlight: "ნაკრების მთავარი გამთამაშებელი",
    bio: "ქართული ფეხბურთის მაესტრო. ფენომენალური დრიბლინგითა და გამჭოლი პასებით ის ინგლისის ჩემპიონშიპსა და ეროვნულ ნაკრებში შეტევების მთავარი მამოძრავებელი ძალაა."
  },
  {
    id: "kiteishvili",
    number: 17,
    nameKa: "ოთარ კიტეიშვილი",
    nameEn: "Otar Kiteishvili",
    position: "MID",
    positionNameKa: "ცენტრალური ნახევარმცველი",
    age: 28,
    birthDate: "26 მარტი, 1996",
    birthPlace: "რუსთავი, საქართველო",
    height: "173 სმ",
    club: "შტურმი გრაცი",
    clubCountry: "ავსტრია",
    clubFlag: "🇦🇹",
    caps: 40,
    goals: 3,
    marketValue: "€5.00M",
    highlight: "ავსტრიის ბუნდესლიგის სეზონის საუკეთესო მოთამაშე",
    bio: "ნახევარდაცვის ტვინი და ძრავი. 2023/24 სეზონში „შტურმთან“ ერთად ავსტრიის ჩემპიონი გახდა და ბუნდესლიგის საუკეთესო ფეხბურთელად დასახელდა."
  },
  {
    id: "kochorashvili",
    number: 6,
    nameKa: "გიორგი ქოჩორაშვილი",
    nameEn: "Giorgi Kochorashvili",
    position: "MID",
    positionNameKa: "ცენტრალური ნახევარმცველი",
    age: 25,
    birthDate: "19 ივნისი, 1999",
    birthPlace: "თბილისი, საქართველო",
    height: "176 სმ",
    club: "ლევანტე",
    clubCountry: "ესპანეთი",
    clubFlag: "🇪🇸",
    caps: 16,
    goals: 2,
    marketValue: "€4.00M",
    highlight: "ევრო 2024-ის ერთ-ერთი მთავარი აღმოჩენა",
    bio: "დაუღალავი შრომისუნარიანობით, ტაქტიკური განსჯითა და ულამაზესი გოლებით (თურქეთთან და ალბანეთთან) ევროპის ყურადღების ცენტრში მოექცა."
  },
  {
    id: "davitashvili",
    number: 9,
    nameKa: "ზურიკო დავითაშვილი",
    nameEn: "Zuriko Davitashvili",
    position: "MID",
    positionNameKa: "ვინგერი / შემტევი",
    age: 23,
    birthDate: "15 თებერვალი, 2001",
    birthPlace: "თბილისი, საქართველო",
    height: "175 სმ",
    club: "სენტ-ეტიენი",
    clubCountry: "საფრანგეთი",
    clubFlag: "🇫🇷",
    caps: 41,
    goals: 6,
    marketValue: "€5.00M",
    highlight: "საფრანგეთის ლიგა 1-ის ჰეთ-თრიკის ავტორი",
    bio: "სწრაფი, აფეთქებადი და ტექნიკური ვინგერი. 2024 წელს საფრანგეთის ლიგა 1-ის „სენტ-ეტიენში“ გადავიდა და მალევე ჰეთ-თრიკი შეასრულა."
  },
  {
    id: "tsitaishvili",
    number: 11,
    nameKa: "გიორგი წიტაიშვილი",
    nameEn: "Giorgi Tsitaishvili",
    position: "MID",
    positionNameKa: "ფლანგის შემტევი",
    age: 23,
    birthDate: "18 ნოემბერი, 2000",
    birthPlace: "რიშონ-ლე-ციონი",
    height: "171 სმ",
    club: "გრანადა",
    clubCountry: "ესპანეთი",
    clubFlag: "🇪🇸",
    caps: 21,
    goals: 1,
    marketValue: "€1.80M",
    highlight: "U20 მსოფლიო ჩემპიონი",
    bio: "განსაკუთრებული სისწრაფისა და ინდივიდუალური ოსტატობის მქონე მოთამაშე. შეუძლია როგორც შეტევაში, ისე მარცხენა ფლანგის მთელ სიგრძეზე თამაში."
  },
  {
    id: "mekvabishvili",
    number: 16,
    nameKa: "ანზორ მექვაბიშვილი",
    nameEn: "Anzor Mekvabishvili",
    position: "MID",
    positionNameKa: "საყრდენი ნახევარმცველი",
    age: 23,
    birthDate: "5 ივნისი, 2001",
    birthPlace: "თბილისი, საქართველო",
    height: "177 სმ",
    club: "უნივერსიტატეა კრაიოვა",
    clubCountry: "რუმინეთი",
    clubFlag: "🇷🇴",
    caps: 19,
    goals: 0,
    marketValue: "€1.80M",
    highlight: "ნახევარდაცვის საიმედო ჩამშლელი",
    bio: "დისციპლინირებული საყრდენი ნახევარმცველი, რომელმაც ევრო 2024-ის ყველა შეხვედრაში დამაჯერებლად იასპარეზა."
  },
  {
    id: "altunashvili",
    number: 20,
    nameKa: "სანდრო ალთუნაშვილი",
    nameEn: "Sandro Altunashvili",
    position: "MID",
    positionNameKa: "ცენტრალური ნახევარმცველი",
    age: 27,
    birthDate: "19 მაისი, 1997",
    birthPlace: "თბილისი, საქართველო",
    height: "179 სმ",
    club: "ვოლფსბერგერი",
    clubCountry: "ავსტრია",
    clubFlag: "🇦🇹",
    caps: 8,
    goals: 0,
    marketValue: "€1.00M",
    highlight: "ავსტრიის ბუნდესლიგის მოთამაშე",
    bio: "შრომისმოყვარე ცენტრალური ნახევარმცველი მაღალი საფეხბურთო ინტელექტით და პასის კულტურით."
  },
  {
    id: "kvekveskiri",
    number: 7,
    nameKa: "ნიკა კვეკვესკირი",
    nameEn: "Nika Kvekveskiri",
    position: "MID",
    positionNameKa: "საყრდენი ნახევარმცველი",
    age: 32,
    birthDate: "29 მაისი, 1992",
    birthPlace: "ზუგდიდი, საქართველო",
    height: "186 სმ",
    club: "ნირეგიჰაზა",
    clubCountry: "უნგრეთი",
    clubFlag: "🇭🇺",
    caps: 61,
    goals: 0,
    marketValue: "€500K",
    highlight: "ისტორიული პენალტის ავტორი (ევრო 2024)",
    bio: "ფეხბურთელი, რომლის ზუსტმა პენალტმა საბერძნეთის წინააღმდეგ საქართველო ისტორიაში პირველად გაიყვანა ევროპის ჩემპიონატზე."
  },
  {
    id: "shengelia",
    number: 19,
    nameKa: "ლევან შენგელია",
    nameEn: "Levan Shengelia",
    position: "MID",
    positionNameKa: "ვინგერი",
    age: 28,
    birthDate: "27 ოქტომბერი, 1995",
    birthPlace: "სამტრედია, საქართველო",
    height: "183 სმ",
    club: "ოფი კრეტა",
    clubCountry: "საბერძნეთი",
    clubFlag: "🇬🇷",
    caps: 17,
    goals: 1,
    marketValue: "€900K",
    highlight: "შესანიშნავი სტანდარტების შემსრულებელი",
    bio: "მარცხენა ფლანგის უნივერსალი, რომლის ზუსტი პასებით ნაკრებმა არაერთი გადამწყვეტი გოლი გაიტანა საკვალიფიკაციო ეტაპზე."
  },
  {
    id: "lobjanidze",
    number: 23,
    nameKa: "საბა ლობჟანიძე",
    nameEn: "Saba Lobjanidze",
    position: "MID",
    positionNameKa: "ვინგერი",
    age: 29,
    birthDate: "18 დეკემბერი, 1994",
    birthPlace: "თბილისი, საქართველო",
    height: "176 სმ",
    club: "ატლანტა იუნაიტედი",
    clubCountry: "აშშ (MLS)",
    clubFlag: "🇺🇸",
    caps: 37,
    goals: 3,
    marketValue: "€3.00M",
    highlight: "MLS-ის ერთ-ერთი ყველაზე შედეგიანი მოთამაშე",
    bio: "ამერიკის MLS-ში მოთამაშე ქართველი ვარსკვლავი, ცნობილი თავისი წარმოუდგენელი სისწრაფითა და შეტევაში დინამიკით."
  },

  // --- FORWARDS (თავდამსხმელები) ---
  {
    id: "kvaratskhelia",
    number: 7,
    nameKa: "ხვიჩა კვარაცხელია",
    nameEn: "Khvicha Kvaratskhelia",
    position: "FWD",
    positionNameKa: "მარცხენა ვინგერი / თავდამსხმელი",
    age: 23,
    birthDate: "12 თებერვალი, 2001",
    birthPlace: "თბილისი, საქართველო",
    height: "183 სმ",
    club: "ნაპოლი",
    clubCountry: "იტალია",
    clubFlag: "🇮🇹",
    caps: 38,
    goals: 17,
    marketValue: "€80.00M",
    highlight: "სერია A-ს MVP & იტალიის ჩემპიონი",
    bio: "მსოფლიო დონის სუპერვარსკვლავი („კვარადონა“). „ნაპოლისთან“ ერთად მოიგო სკუდეტო და დასახელდა სერია A-ს სეზონის საუკეთესო ფეხბურთელად. ევრო 2024-ზე პორტუგალიასთან ისტორიული გამარჯვების მომტანი პირველი გოლის ავტორი."
  },
  {
    id: "mikautadze",
    number: 22,
    nameKa: "გიორგი მიქაუტაძე",
    nameEn: "Georges Mikautadze",
    position: "FWD",
    positionNameKa: "ცენტრალური თავდამსხმელი",
    age: 23,
    birthDate: "31 ოქტომბერი, 2000",
    birthPlace: "ლიონი, საფრანგეთი",
    height: "176 სმ",
    club: "ოლიმპიკ ლიონი",
    clubCountry: "საფრანგეთი",
    clubFlag: "🇫🇷",
    caps: 33,
    goals: 15,
    marketValue: "€20.00M",
    highlight: "UEFA EURO 2024-ის ბომბარდირი (ოქროს ბუცი)",
    bio: "ევრო 2024-ის ოქროს ბუცის მფლობელი (3 გოლი, 1 საგოლე გადაცემა). მსოფლიო კლასის ფინიშერი და ლიონის „ოლიმპიკის“ მთავარი დამრტყმელი ძალა."
  },
  {
    id: "zivzivadze",
    number: 8,
    nameKa: "ბუდუ ზივზივაძე",
    nameEn: "Budu Zivzivadze",
    position: "FWD",
    positionNameKa: "ცენტრალური თავდამსხმელი",
    age: 30,
    birthDate: "10 მარტი, 1994",
    birthPlace: "ქუთაისი, საქართველო",
    height: "189 სმ",
    club: "კარლსრუე",
    clubCountry: "გერმანია",
    clubFlag: "🇩🇪",
    caps: 32,
    goals: 8,
    marketValue: "€1.20M",
    highlight: "ევრო 2024-ის პლეი-ოფის გმირი",
    bio: "გულშემატკივართა უსაყვარლესი ფორვარდი. ლუქსემბურგთან ნახევარფინალში დუბლის ავტორი, რომელმაც გადამწყვეტი ნაბიჯი გადაადგმევინა ქვეყანას ევროპის ჩემპიონატისკენ."
  }
];

// ---------------------------------------------------------------------------
// 2. State & DOM Elements
// ---------------------------------------------------------------------------
let currentPosition = "ALL";
let searchQuery = "";
let currentSort = "number-asc";

const squadGrid = document.getElementById("squad-grid");
const searchInput = document.getElementById("player-search");
const clearSearchBtn = document.getElementById("clear-search");
const filterTabs = document.querySelectorAll(".filter-tab");
const sortSelect = document.getElementById("sort-select");
const resultsCount = document.getElementById("results-count");
const resetFilterBtn = document.getElementById("reset-filter-btn");
const noResultsBox = document.getElementById("no-results");
const emptyResetBtn = document.getElementById("empty-reset-btn");

// Modal Elements
const modalBackdrop = document.getElementById("player-modal-backdrop");
const modalContent = document.getElementById("modal-content");
const modalCloseBtn = document.getElementById("modal-close-btn");

// Theme Toggle & Mobile Menu
const themeToggleBtn = document.getElementById("theme-toggle");
const mobileToggleBtn = document.getElementById("mobile-toggle");
const mobileDrawer = document.getElementById("mobile-drawer");
const mobileLinks = document.querySelectorAll(".mobile-link");

// ---------------------------------------------------------------------------
// 3. Latin <-> Georgian Transliteration Helper
// ---------------------------------------------------------------------------
const GEO_LATIN_MAP = {
  a: "ა", b: "ბ", g: "გ", d: "დ", e: "ე", v: "ვ", z: "ზ", t: "თ",
  i: "ი", k: "კ", l: "ლ", m: "მ", n: "ნ", o: "ო", p: "პ", r: "რ",
  s: "ს", u: "უ", f: "ფ", q: "ქ", y: "ყ", sh: "შ", ch: "ჩ", ts: "ც",
  dz: "ძ", w: "წ", c: "ჭ", kh: "ხ", j: "ჯ", h: "ჰ"
};

function transliterateLatinToGeo(str) {
  let lower = str.toLowerCase();
  // handle multi-chars first
  lower = lower.replace(/sh/g, "შ")
               .replace(/ch/g, "ჩ")
               .replace(/ts/g, "ც")
               .replace(/dz/g, "ძ")
               .replace(/kh/g, "ხ");

  let result = "";
  for (let char of lower) {
    result += GEO_LATIN_MAP[char] || char;
  }
  return result;
}

// ---------------------------------------------------------------------------
// 4. Filter & Sort Logic
// ---------------------------------------------------------------------------
function getFilteredSquad() {
  const query = searchQuery.trim().toLowerCase();
  const geoQuery = transliterateLatinToGeo(query);

  let filtered = SQUAD_DATA.filter(player => {
    // 1. Position match
    const matchPos = (currentPosition === "ALL" || player.position === currentPosition);
    if (!matchPos) return false;

    // 2. Search query match
    if (!query) return true;

    const nameKa = player.nameKa.toLowerCase();
    const nameEn = player.nameEn.toLowerCase();
    const club = player.club.toLowerCase();
    const posKa = player.positionNameKa.toLowerCase();

    return nameKa.includes(query) ||
           nameKa.includes(geoQuery) ||
           nameEn.includes(query) ||
           club.includes(query) ||
           posKa.includes(query);
  });

  // Sort
  filtered.sort((a, b) => {
    if (currentSort === "number-asc") return a.number - b.number;
    if (currentSort === "age-asc") return a.age - b.age;
    if (currentSort === "age-desc") return b.age - a.age;
    if (currentSort === "name-asc") return a.nameKa.localeCompare(b.nameKa, 'ka');
    if (currentSort === "market-desc") {
      const valA = parseFloat(a.marketValue.replace(/[^0-9.]/g, '')) * (a.marketValue.includes('M') ? 1000000 : 1000);
      const valB = parseFloat(b.marketValue.replace(/[^0-9.]/g, '')) * (b.marketValue.includes('M') ? 1000000 : 1000);
      return valB - valA;
    }
    return 0;
  });

  return filtered;
}

// ---------------------------------------------------------------------------
// 5. Render Squad Cards
// ---------------------------------------------------------------------------
function getAvatarClass(pos) {
  if (pos === "GK") return "gk-avatar";
  if (pos === "DEF") return "def-avatar";
  if (pos === "MID") return "mid-avatar";
  return "fwd-avatar";
}

function getPosTagClass(pos) {
  return `pos-${pos.toLowerCase()}`;
}

function renderSquad() {
  const players = getFilteredSquad();

  // Update counts
  resultsCount.textContent = `ნაჩვენებია ${players.length} ფეხბურთელი`;
  resetFilterBtn.style.display = (currentPosition !== "ALL" || searchQuery.length > 0) ? "inline-block" : "none";

  if (players.length === 0) {
    squadGrid.innerHTML = "";
    noResultsBox.style.display = "block";
    return;
  }

  noResultsBox.style.display = "none";

  squadGrid.innerHTML = players.map(player => {
    const initials = player.nameKa.split(" ").map(w => w[0]).join("");
    return `
      <article class="player-card" data-id="${player.id}" tabindex="0" role="button" aria-label="${player.nameKa} — დეტალების ნახვა">
        <div class="card-top">
          <div class="jersey-badge">#${player.number}</div>
          <span class="pos-tag ${getPosTagClass(player.position)}">${player.positionNameKa}</span>
        </div>

        <div class="card-identity">
          <div class="player-avatar ${getAvatarClass(player.position)}">
            <span class="avatar-initials">${initials}</span>
          </div>
          <div class="player-names">
            <h3 class="player-name-ka">${player.nameKa}</h3>
            <span class="player-name-en">${player.nameEn}</span>
          </div>
        </div>

        <div class="card-club-row">
          <span class="club-flag">${player.clubFlag}</span>
          <span class="club-name">${player.club}</span>
        </div>

        <div class="card-stats">
          <div class="c-stat-box">
            <div class="c-stat-val">${player.age}</div>
            <div class="c-stat-lbl">ასაკი</div>
          </div>
          <div class="c-stat-box">
            <div class="c-stat-val">${player.caps}</div>
            <div class="c-stat-lbl">მატჩი</div>
          </div>
          <div class="c-stat-box">
            <div class="c-stat-val">${player.goals}</div>
            <div class="c-stat-lbl">გოლი</div>
          </div>
        </div>

        ${player.highlight ? `
          <div class="player-highlight-badge">
            <span>⭐</span>
            <span>${player.highlight}</span>
          </div>
        ` : ''}

        <button class="card-btn" aria-hidden="true" tabindex="-1">
          <span>დაწვრილებით</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </article>
    `;
  }).join("");

  // Attach card click handlers
  document.querySelectorAll(".player-card").forEach(card => {
    card.addEventListener("click", () => {
      const pid = card.getAttribute("data-id");
      openPlayerModal(pid);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const pid = card.getAttribute("data-id");
        openPlayerModal(pid);
      }
    });
  });
}

// ---------------------------------------------------------------------------
// 6. Player Modal Logic
// ---------------------------------------------------------------------------
function openPlayerModal(playerId) {
  const p = SQUAD_DATA.find(x => x.id === playerId);
  if (!p) return;

  const initials = p.nameKa.split(" ").map(w => w[0]).join("");

  modalContent.innerHTML = `
    <div class="modal-jersey-bg">#${p.number}</div>

    <div class="modal-header-section">
      <div class="modal-avatar ${getAvatarClass(p.position)}">
        <span>${initials}</span>
      </div>
      <div class="modal-titles">
        <h2 class="modal-player-name" id="modal-player-name">${p.nameKa}</h2>
        <div class="modal-player-en">${p.nameEn} • #${p.number}</div>
        <div class="modal-badges-row">
          <span class="pos-tag ${getPosTagClass(p.position)}">${p.positionNameKa}</span>
          <span class="crew-pill">${p.clubFlag} ${p.club}</span>
        </div>
      </div>
    </div>

    <div class="modal-info-grid">
      <div class="info-item">
        <span class="info-lbl">ასაკი</span>
        <span class="info-val">${p.age} წლის (${p.birthDate})</span>
      </div>
      <div class="info-item">
        <span class="info-lbl">დაბადების ადგილი</span>
        <span class="info-val">${p.birthPlace}</span>
      </div>
      <div class="info-item">
        <span class="info-lbl">სიმაღლე</span>
        <span class="info-val">${p.height}</span>
      </div>
      <div class="info-item">
        <span class="info-lbl">საბაზრო ღირებულება</span>
        <span class="info-val" style="color: var(--geo-gold);">${p.marketValue}</span>
      </div>
    </div>

    <div class="modal-stats-row">
      <div class="m-stat-box">
        <div class="m-stat-num">${p.caps}</div>
        <div class="m-stat-txt">სანაკრებო მატჩი</div>
      </div>
      <div class="m-stat-box">
        <div class="m-stat-num">${p.goals}</div>
        <div class="m-stat-txt">გოლი ნაკრებში</div>
      </div>
      <div class="m-stat-box">
        <div class="m-stat-num">#${p.number}</div>
        <div class="m-stat-txt">ნომერი</div>
      </div>
    </div>

    <div class="modal-bio-box">
      <div class="modal-bio-title">მოთამაშის შესახებ & მიღწევები</div>
      <p class="modal-bio-text">${p.bio}</p>
    </div>

    ${p.highlight ? `
      <div class="player-highlight-badge" style="justify-content: center; font-size: 0.9rem; padding: 10px;">
        <span>🏆</span>
        <span>${p.highlight}</span>
      </div>
    ` : ''}
  `;

  modalBackdrop.classList.add("active");
  modalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePlayerModal() {
  modalBackdrop.classList.remove("active");
  modalBackdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ---------------------------------------------------------------------------
// 7. Event Listeners (Search, Filter, Sort, Modal)
// ---------------------------------------------------------------------------
// Search Input
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  clearSearchBtn.style.display = searchQuery ? "flex" : "none";
  renderSquad();
});

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  searchQuery = "";
  clearSearchBtn.style.display = "none";
  searchInput.focus();
  renderSquad();
});

// Position Filter Tabs
filterTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    filterTabs.forEach(t => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    currentPosition = tab.getAttribute("data-position");
    renderSquad();
  });
});

// Sort Selector
sortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderSquad();
});

// Reset Filters
function resetAllFilters() {
  currentPosition = "ALL";
  searchQuery = "";
  searchInput.value = "";
  clearSearchBtn.style.display = "none";

  filterTabs.forEach(t => {
    t.classList.toggle("active", t.getAttribute("data-position") === "ALL");
    t.setAttribute("aria-selected", t.getAttribute("data-position") === "ALL" ? "true" : "false");
  });

  renderSquad();
}

resetFilterBtn.addEventListener("click", resetAllFilters);
emptyResetBtn.addEventListener("click", resetAllFilters);

// Global position filter helper (for footer links)
window.filterByPosition = function(pos) {
  const targetTab = document.querySelector(`.filter-tab[data-position="${pos}"]`);
  if (targetTab) {
    targetTab.click();
    document.getElementById("squad").scrollIntoView({ behavior: "smooth" });
  }
};

// Modal Close Listeners
modalCloseBtn.addEventListener("click", closePlayerModal);
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) {
    closePlayerModal();
  }
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalBackdrop.classList.contains("active")) {
    closePlayerModal();
  }
});

// ---------------------------------------------------------------------------
// 8. Dark / Light Mode Toggle
// ---------------------------------------------------------------------------
function initTheme() {
  const savedTheme = localStorage.getItem("geo_team_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

themeToggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("geo_team_theme", next);
});

// ---------------------------------------------------------------------------
// 9. Mobile Navigation Drawer
// ---------------------------------------------------------------------------
mobileToggleBtn.addEventListener("click", () => {
  const isOpen = mobileDrawer.classList.toggle("open");
  mobileToggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  mobileDrawer.setAttribute("aria-hidden", isOpen ? "false" : "true");
});

mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileDrawer.classList.remove("open");
    mobileToggleBtn.setAttribute("aria-expanded", "false");
    mobileDrawer.setAttribute("aria-hidden", "true");
  });
});

// ---------------------------------------------------------------------------
// 10. Fan Zone: Interactive MVP Voting
// ---------------------------------------------------------------------------
const pollButtons = document.querySelectorAll(".poll-btn");
const voteFeedback = document.getElementById("vote-feedback");

let votes = {
  kvara: 460,
  mamarda: 310,
  mikautadze: 150,
  chakve: 80
};

function updatePollUI() {
  const total = Object.values(votes).reduce((a, b) => a + b, 0);
  Object.keys(votes).forEach(key => {
    const pct = Math.round((votes[key] / total) * 100);
    const el = document.getElementById(`vote-${key}`);
    if (el) el.textContent = `${pct}%`;
  });
}

pollButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const playerKey = btn.getAttribute("data-player");
    if (votes[playerKey] !== undefined) {
      votes[playerKey] += 10;
      updatePollUI();

      pollButtons.forEach(b => b.classList.remove("voted"));
      btn.classList.add("voted");

      voteFeedback.style.display = "block";
      setTimeout(() => {
        voteFeedback.style.display = "none";
      }, 4000);
    }
  });
});

// ---------------------------------------------------------------------------
// 11. Fan Zone: Interactive Trivia Quiz
// ---------------------------------------------------------------------------
const QUIZ_QUESTIONS = [
  {
    question: "ვინ გახდა ევრო 2024-ის ოქროს ბუცის მფლობელი (ტურნირის თანაბომბარდირი) საქართველოს ნაკრებიდან?",
    options: [
      "ხვიჩა კვარაცხელია",
      "გიორგი მიქაუტაძე",
      "ბუდუ ზივზივაძე",
      "გიორგი ჩაკვეტაძე"
    ],
    correct: 1
  },
  {
    question: "რამდენი სეივი შეასრულა გიორგი მამარდაშვილმა ევრო 2024-ის 4 შეხვედრაში?",
    options: [
      "18 სეივი",
      "22 სეივი",
      "30 სეივი",
      "35 სეივი"
    ],
    correct: 2
  },
  {
    question: "რომელ წელს მოიპოვა საქართველოს ნაკრებმა ისტორიაში პირველად ევროპის ჩემპიონატის საგზური?",
    options: [
      "2020 წელს",
      "2022 წელს",
      "2024 წელს",
      "2018 წელს"
    ],
    correct: 2
  }
];

let currentQuizIdx = 0;
let quizScore = 0;

const quizQuestionText = document.getElementById("quiz-question-text");
const quizAnswersBox = document.getElementById("quiz-answers");
const quizProgress = document.getElementById("quiz-progress");
const quizResultBox = document.getElementById("quiz-result");
const resultScoreText = document.getElementById("result-score-text");
const restartQuizBtn = document.getElementById("restart-quiz-btn");

function renderQuizQuestion() {
  const q = QUIZ_QUESTIONS[currentQuizIdx];
  quizProgress.textContent = `კითხვა ${currentQuizIdx + 1} / ${QUIZ_QUESTIONS.length}`;
  quizQuestionText.textContent = q.question;

  quizAnswersBox.innerHTML = q.options.map((opt, i) => `
    <button class="quiz-opt-btn" data-index="${i}">${opt}</button>
  `).join("");

  document.querySelectorAll(".quiz-opt-btn").forEach(btn => {
    btn.addEventListener("click", () => handleQuizAnswer(parseInt(btn.getAttribute("data-index"), 10)));
  });
}

function handleQuizAnswer(selectedIdx) {
  const q = QUIZ_QUESTIONS[currentQuizIdx];
  const allBtns = document.querySelectorAll(".quiz-opt-btn");

  allBtns.forEach(btn => btn.disabled = true);

  if (selectedIdx === q.correct) {
    allBtns[selectedIdx].classList.add("correct");
    quizScore++;
  } else {
    allBtns[selectedIdx].classList.add("wrong");
    allBtns[q.correct].classList.add("correct");
  }

  setTimeout(() => {
    currentQuizIdx++;
    if (currentQuizIdx < QUIZ_QUESTIONS.length) {
      renderQuizQuestion();
    } else {
      showQuizResult();
    }
  }, 1200);
}

function showQuizResult() {
  quizProgress.style.display = "none";
  quizQuestionText.style.display = "none";
  quizAnswersBox.style.display = "none";

  quizResultBox.style.display = "block";
  resultScoreText.textContent = `თქვენი შედეგია: ${quizScore} / ${QUIZ_QUESTIONS.length} სწორი პასუხი! 🇬🇪`;
}

restartQuizBtn.addEventListener("click", () => {
  currentQuizIdx = 0;
  quizScore = 0;
  quizProgress.style.display = "block";
  quizQuestionText.style.display = "block";
  quizAnswersBox.style.display = "flex";
  quizResultBox.style.display = "none";
  renderQuizQuestion();
});

// ---------------------------------------------------------------------------
// 12. Active Navbar Link on Scroll
// ---------------------------------------------------------------------------
const sections = document.querySelectorAll("section[id]");
const navLinksList = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach(sec => {
    const sectionHeight = sec.offsetHeight;
    const sectionTop = sec.offsetTop - 120;
    const sectionId = sec.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinksList.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// ---------------------------------------------------------------------------
// 13. Initialization
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderSquad();
  renderQuizQuestion();
  updatePollUI();
});
