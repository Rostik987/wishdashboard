const user = {
  name: "Ростик",
  surname: "Скатченко",
  userPhoto: "avatar.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "game.jpg", alt: "зробити власну комп'ютерну гру" },
    { src: "web site.jpg", alt: "Зробити крутий веб-сайт" },
    { src: "trip.webp", alt: "Подорож на Балі " },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500,
  700,
  800,
  1000,
  2000,
  2000,
  4000,
  7000,
  8000,
  15000,
  20000,
  80000,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "JavaScript" },
  { month: "Липень", skill: "Java" },
  { month: "Серпень", skill: "Python" },
  { month: "Вересень", skill: "Самостійність" },
  { month: "Жовтень", skill: "Прагнення" },
  { month: "Листопад", skill: "Тайм-менеджмент" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "Критичне мислення" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Командоутворення" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
