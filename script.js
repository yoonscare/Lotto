document.getElementById('drawButton').addEventListener('click', function() {
    const numbers = [];
    while (numbers.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    numbers.sort((a, b) => a - b);
    
    const lottoNumbersContainer = document.getElementById('lottoNumbers');
    lottoNumbersContainer.innerHTML = ''; // 기존 번호 초기화

    numbers.forEach((number, index) => {
        setTimeout(() => {
            const numberCircle = document.createElement('div');
            numberCircle.className = 'bg-blue-200 rounded-full w-24 h-24 flex items-center justify-center text-2xl font-bold text-blue-800';
            numberCircle.innerText = number;
            lottoNumbersContainer.appendChild(numberCircle);
        }, index * 1000); // 1초 간격으로 번호 표시
    });
});
