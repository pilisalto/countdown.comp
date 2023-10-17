import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
    const [secValue, setSecValue] = useState(59);
    const [minValue, setMinValue] = useState(59);
    const [hourValue, setHourValue] = useState(23);
    const [dayValue, setDayValue] = useState(6);

    useEffect(() => {
    const timeFunction = setInterval(() => {
        setSecValue((prev) => {
        if (prev === 0) {
            setMinValue((minPrev) => {
            if (minPrev === 0) {
                setHourValue((hourPrev) => {
                if (hourPrev === 0) {
                    setDayValue((dayPrev) => {
                    if (dayPrev === 0) {
                        clearInterval(timeFunction);
                        return 0;
                    }
                    return dayPrev - 1;
                    });
                    return 24;
                }
                return hourPrev - 1;
                });
                return 60;
            }
            return minPrev - 1;
            });
            return 60;
            }
        return prev - 1;
        });
    }, 1000);

    return () => {
        clearInterval(timeFunction);
    };
}, []);

return (
    <section className="container">
        <img src="images/Sirena.gif" alt="fondo" className="image" />
        <nav className="navbar">
        <a className="navbar-brand" href="https://www.tiendafuencarral.com.ar/" rel="noreferrer">
        <img src="images/fcrrl blanco.png" alt="logo" width="220" className="logo"/></a>
        </nav>
        <header>FUENCASALE 2023 it's coming</header>
        <p>
        Fuencasale Argentina 2023: 6, 7 y 8 de Noviembre. Preparate para las
        mejores ofertas.
        </p>
        <div className="time-content">
        <div className="time days">
            <span className="number">{dayValue < 10 ? `0${dayValue}` : dayValue}</span>
            <span className="text">dias</span>
        </div>
        <div className="time hours">
            <span className="number">{hourValue < 10 ? `0${hourValue}` : hourValue}</span>
            <span className="text">horas</span>
        </div>
        <div className="time minutes">
            <span className="number">{minValue < 10 ? `0${minValue}` : minValue}</span>
            <span className="text">minutos</span>
        </div>
        <div className="time seconds">
            <span className="number">{secValue < 10 ? `0${secValue}` : secValue}</span>
            <span className="text">segundos</span>
        </div>
        </div>
        <div className="email-content">
        <p>Suscribite y enterate antes que nadie de las novedades!</p>
        <div className="input-box">
            <input type="email" placeholder="email..." />
            <button>Suscribirme</button>
        </div>
        </div>
    </section>
    );
};

export default Countdown;