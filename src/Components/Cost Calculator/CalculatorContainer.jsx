import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Calculator from './Calculator';
import CalculatorInfo from './CalculatorInfo';

const CalculatorContainer = ({ theme, changeTheme }) => {
    const [precioFilamento, setPrecioFilamento] = useState(0);
    const [gramosUtilizados, setGramosUtilizados] = useState(0);
    const [horasDeImpresion, setHorasDeImpresion] = useState(0);
    const [luzXHora, setLuzXHora] = useState(0);
    const [costosExtra, setCostosExtra] = useState(0); // Estado para Costos Extra
    const [gastoEnergetico, setGastoEnergetico] = useState(0);
    const [costoMaterial, setCostoMaterial] = useState(0);
    const [costoTotal, setCostoTotal] = useState(0);
    const [gananciaNeta, setGananciaNeta] = useState(0);
    const [tipoImpresion, setTipoImpresion] = useState("no"); // Tipo de impresión: 'no' por defecto
    const [multiplicadorCosto, setMultiplicadorCosto] = useState(4); // Multiplicador de costo (4 para unicolor, 6 para multicolor)

    useEffect(() => {
        let actualizacionGastoEnergetico = horasDeImpresion * luzXHora;
        setGastoEnergetico(actualizacionGastoEnergetico);

        let actualizacionCostoMaterial = (gramosUtilizados * precioFilamento) / 1000;
        setCostoMaterial(actualizacionCostoMaterial);

        // Ajustamos el multiplicador dependiendo de tipoImpresion
        let multiplicador = tipoImpresion === "multicolor" ? 6 : 4;
        setMultiplicadorCosto(multiplicador);

        // Calculamos el costo total usando el multiplicador
        let costoTotalCalculado = actualizacionCostoMaterial * multiplicador + (costosExtra * 2); // Se agrega el doble de costosExtra al costoTotal
        setCostoTotal(costoTotalCalculado);

        // Calculamos la ganancia neta sumando los costos extra
        let gananciaCalculada = (costoTotalCalculado / 2) + costosExtra; // Se suma los costosExtra a la ganancia neta
        setGananciaNeta(gananciaCalculada);

    }, [horasDeImpresion, luzXHora, gramosUtilizados, precioFilamento, tipoImpresion, costosExtra]);

    const handleButtonClick = (e) => {
        e.preventDefault();
        const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
        const ValoresInputs = [];
        let focusSet = false;

        inputs.forEach((input) => {
            if (input.value.trim() === '') {
                if (!focusSet) {
                    input.focus();
                    focusSet = true;
                }
            } else {
                ValoresInputs.push(input.value);
            }
        });

        processData(ValoresInputs);
    };

    function processData(ValoresInputs) {
        console.log("Valores de los inputs:", ValoresInputs);
        if (ValoresInputs.length === 5) { // Ahora esperamos 5 valores (incluyendo costos extra)
            asingValues(ValoresInputs);
        } else {
            console.log('Hubo un error: Algunos campos están vacíos o incorrectos');
        }
    }

    async function asingValues(ValoresInputs) {
        const precio = parseFloat(ValoresInputs[0]);
        const gramos = parseFloat(ValoresInputs[1]);
        const horas = parseFloat(ValoresInputs[2]);
        const luz = parseFloat(ValoresInputs[3]);
        const extra = parseFloat(ValoresInputs[4]); // Agregamos el valor de costos extra

        if (isNaN(precio) || isNaN(gramos) || isNaN(horas) || isNaN(luz) || isNaN(extra)) {
            console.log("Error: alguno de los valores no es válido");
            return;
        }

        setPrecioFilamento(precio);
        setGramosUtilizados(gramos);
        setHorasDeImpresion(horas);
        setLuzXHora(luz);
        setCostosExtra(extra); // Actualizamos el estado de costos extra
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar theme={theme} changeTheme={changeTheme} />
            
            <div className="flex gap-2 flex-col md:flex-row flex-1 justify-center">
                <section className="basis-1/3 sm:basis-[40%] p-5 m-4 border border-fuchsia-950 border-3 rounded-lg bg-slate-950/40">
                    <Calculator 
                        handleButtonClick={handleButtonClick} 
                        tipoImpresion={tipoImpresion} 
                        setTipoImpresion={setTipoImpresion}
                        setCostosExtra={setCostosExtra} // Pasamos el setter de costosExtra a Calculator
                        costosExtra={costosExtra} // Pasamos costosExtra a Calculator
                    />
                </section>

                <section className="basis-1/3 sm:basis-[40%] p-5 m-4 border border-fuchsia-950 border-3 rounded-lg bg-slate-950/40">
                    <CalculatorInfo
                        costoMaterial={costoMaterial}
                        gastoEnergetico={gastoEnergetico}
                        costoTotal={costoTotal}
                        gananciaNeta={gananciaNeta}
                    />
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default CalculatorContainer;
