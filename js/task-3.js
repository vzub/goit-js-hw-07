const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    const name = nameInput.value.trim();
    if (name !== '') {
        return nameOutput.textContent = name;
    }
        else {
            return nameOutput.textContent = 'Anonymous';
        }
});