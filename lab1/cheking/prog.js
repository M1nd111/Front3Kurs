function changePage(className) {
    const elements = document.getElementsByClassName(className);

    Array.from(elements).forEach(element => {
        let children = element.children;
        let count = children.childElementCount;

        if (count === 0) {
            // Если нет детей, создаем 3 новых div
            for (let i = 0; i < 3; i++) {
                const parent = document.getElementByClassName('test');
                const child = document.createElement('div');
                child.textContent = 'Новый элемент';
                parent.appendChild(child);
            }
        } else if (count < 3) {
            // Если детей меньше 3, клонируем первый ребенок
            let firstChild = children[0];
            for (let i = count; i < 3; i++) {
                let newChild = firstChild.cloneNode(true);
                element.appendChild(newChild);
            }
        } else if (count > 3) {
            // Если детей больше 3, удаляем лишние с конца
            while (element.children.length > 3) {
                element.removeChild(element.lastChild);
            }
        }
    });
}
