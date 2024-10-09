const path = require('path');

module.exports = {
  entry: './src/index.js', // Входная точка твоего приложения
  output: {
    filename: 'bundle.js', // Имя собранного файла
    path: path.resolve(__dirname, 'dist'), // Путь для выходных файлов
  },
  mode: 'development', // Режим разработки
  devServer: {
    static: './dist', // Папка для статических файлов
    open: true, // Автоматически открывать браузер
  },
};