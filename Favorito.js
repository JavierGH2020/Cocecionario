function addFav(carName) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = favorites.find(car => car.name === carName);

    if (!exists) {
        favorites.push({name: carName});
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${carName} añadido a favoritos!`);
    } else {
        alert(`${carName} ya está en favoritos.`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('List');
    if (taskList) {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        favorites.forEach(car => {
            const taskItem = document.createElement('li');
            taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';

            const carInfo = document.createElement('div');
            carInfo.className = 'd-flex align-items-center gap-3';

            const carName = document.createElement('span');
            carName.textContent = car.name;

            carInfo.appendChild(carName);

            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-danger btn-sm';
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', () => {
                taskItem.remove();
                removeFromFavorites(car.name);
            });

            taskItem.appendChild(carInfo);
            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
        });
    }
});

function removeFromFavorites(carName) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(car => car.name !== carName);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}