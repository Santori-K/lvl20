import {users} from './data';

export function renderTable() {
  const tableBody = document.querySelector("#user-table tbody");

  // Очищаем таблицу перед добавлением новых данных
  tableBody.innerHTML = "";

  users.forEach((user) => {
    // Создаем строку
    const row = document.createElement("tr");

    // Заполняем ячейки данными пользователя
    row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${calculateAge(user.birthday)}</td>
        <td>${user.email}</td>
        <td>${user.country}</td>
        <td>${user.company}</td>
        <td>${user.birthday}</td>
      `;

    // Добавляем строку в таблицу
    tableBody.appendChild(row);
  });
}
function calculateAge(birthday) {
  // Разделяем дату рождения на день, месяц и год
  const [day, month, year] = birthday.split("/").map(Number);
  const birthDate = new Date(year, month - 1, day); // Месяцы в JS считаются с 0

  // Текущая дата
  const currentDate = new Date();

  // Вычисляем возраст
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // Проверяем, был ли день рождения в этом году или нет
  const isBirthdayPassed =
    currentDate.getMonth() > birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() >= birthDate.getDate());

  if (!isBirthdayPassed) {
    age--;
  }

  return age;
}
  
  // Вызов функции для отображения данных при загрузке страницы
  renderTable();