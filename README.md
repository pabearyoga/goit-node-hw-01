# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"
https://monosnap.com/file/aeiLDtoM0IQ9BkEtreCifEkoPWaHcH

# Отримуємо контакт по id

node index.js --action="get" --id=5
https://monosnap.com/file/pKrfegIPX5dbVbvASI9LKWpAYcK0k1

# Додаємо контакт

node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
https://monosnap.com/file/ItjKd9TRS9Cpef6zIG3N0aUOJDMXnh

# Видаляємо контакт

node index.js --action="remove" --id=3
https://monosnap.com/file/WUELJzMe36rXKryRlyJmDm12YpJ4uv
