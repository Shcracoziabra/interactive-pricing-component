document.addEventListener('DOMContentLoaded', ()=> {
    const rangeInput = document.querySelector('.pricing-card__range');
    const switchInput = document.querySelector('.pricing-card__switch');

    const viewsElem = document.querySelector('.pricing-card__viewscount');
    const priceElem = document.querySelector('.pricing-card__price');

    const startBtn = document.querySelector('.pricing-card__btn');

    rangeInput.addEventListener('input', (e)=>{
        e.preventDefault();
        const value = rangeInput.value;
        const progressWidth = value * 100 / rangeInput.max;
        const restWidth = 100 - progressWidth;
        rangeInput.style.backgroundImage = `linear-gradient(to right, #a5f3eb 0 ${progressWidth}%, #eaeefb ${progressWidth}% ${restWidth}%)`;

        const useDiscount = switchInput.checked;

        if(value >= 0 && value < 25) {
            viewsElem.innerText = '10k';
            priceElem.innerText = useDiscount ? '$6.00': '$8.00';
        } else if (value >= 25 && value < 50) {
            viewsElem.innerText = '50k';
            priceElem.innerText = useDiscount ? '$9.00': '$12.00';
        } else if (value >= 50 && value < 75) {
            viewsElem.innerText = '100k';
            priceElem.innerText = useDiscount ? '$12.00': '$16.00';
        } else if (value >= 75 && value < 100) {
            viewsElem.innerText = '500k';
            priceElem.innerText = useDiscount ? '$18.00': '$24.00';
        } else {
            viewsElem.innerText = '1m';
            priceElem.innerText = useDiscount ? '$27.00': '$36.00';
        }

    });

    rangeInput.addEventListener('focus', (e)=> {
        e.target.style.outline = '2px solid hsl(174, 77%, 80%)';
        setTimeout(()=> {
            e.target.style.outline = ''
        }, 3000)
    });

    switchInput.addEventListener('change', ()=> {
        const price = +priceElem.textContent.slice(1);
        if(switchInput.checked) {
            priceElem.innerText = `$${price * 0.75}.00`
        } else {
            priceElem.innerText = `$${price * 4 / 3}.00`
        }
        switchInput.blur();
    });

    switchInput.addEventListener('keydown', (e)=> {
        if(e.key === 'Enter') {
            e.target.checked = !e.target.checked;
            const price = +priceElem.textContent.slice(1);
            if(switchInput.checked) {
                priceElem.innerText = `$${price * 0.75}.00`
            } else {
                priceElem.innerText = `$${price * 4 / 3}.00`
            }
        }
    });

    startBtn.addEventListener('keydown', (e)=> {
        if(e.key === 'Enter') {
            e.target.style.backgroundColor = 'hsl(174, 86%, 45%)';
        }
    });

    startBtn.addEventListener('keyup', (e)=> {
        if(e.key === 'Enter') {
            e.target.style.backgroundColor = '';
        }
    });

});