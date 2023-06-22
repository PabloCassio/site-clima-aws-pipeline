const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const climaBox = document.querySelector('.clima-box');
const detalhesClima = document.querySelector('.detalhes-clima');
const error404 = document.querySelector('.not-found');
search.addEventListener('click', () => {

    const APIKey = 'fbf969456d9bbd51c07469789015eeee';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}&lang=pt_br`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.style.height = '400px';
                climaBox.style.display = 'none';
                detalhesClima.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.clima-box img');
            const temperatura = document.querySelector('.clima-box .temperatura');
            const descricao = document.querySelector('.clima-box .descricao');
            const umidade = document.querySelector('.detalhes-clima .umidade span');
            const vento = document.querySelector('.detalhes-clima .vento span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;

                case 'Rain':
                    image.src = 'images/rain.png';
                    break;

                case 'Snow':
                    image.src = 'images/snow.png';
                    break;

                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;

                case 'Haze':
                    image.src = 'images/mist.png';
                    break;

                default:
                    image.src = '';
            }

            temperatura.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            descricao.innerHTML = `${json.weather[0].description}`;
            umidade.innerHTML = `${json.main.humidity}%`;
            vento.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            climaBox.style.display = '';
            detalhesClima.style.display = '';
            climaBox.classList.add('fadeIn');
            detalhesClima.classList.add('fadeIn');
            container.style.height = '590px';


        });


});