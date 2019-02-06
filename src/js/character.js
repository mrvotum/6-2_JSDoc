/**
 * Функция для создания нового персонажа
 * 
 * @param {string} name - имя персонажа
 * @param {string} type - вид персонажа
 * @throws <описание генерируемой ошибки>
 */ 
function Character(name, type) {
  this.name = name;
  this.type = type;
}

export default Character;
