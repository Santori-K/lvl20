import {users} from './data';

export function renderTable() {
    const tableBody = document.querySelector('#user-table tbody');
    
    // Очищаем таблицу перед добавлением новых данных
    tableBody.innerHTML = '';
  
    users.forEach(user => {
      // Создаем строку
      const row = document.createElement('tr');
  
      // Заполняем ячейки данными пользователя
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.country}</td>
        <td>${user.company}</td>
        <td>${user.birthday}</td>
      `;
  
      // Добавляем строку в таблицу
      tableBody.appendChild(row);
    });
  }
  
  // Вызов функции для отображения данных при загрузке страницы
  renderTable();