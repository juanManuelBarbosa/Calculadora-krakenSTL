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
    const [gastoEnergetico, setGastoEnergetico] = useState(0);
    const [costoMaterial, setCostoMaterial] = useState(0);
    const [costoTotal, setCostoTotal] = useState(0);
    const [gananciaNeta, setGananciaNeta] = useState(0);

    // Calculando los valores del gasto energético y costo del material sin los valores de 'pintado' y 'costoExtra'
    useEffect(() => {
        let actualizacionGastoEnergetico = horasDeImpresion * luzXHora;
        setGastoEnergetico(actualizacionGastoEnergetico);

        let actualizacionCostoMaterial = (gramosUtilizados * precioFilamento) / 1000;
        setCostoMaterial(actualizacionCostoMaterial);

        // Calculamos el costo total
        let costoTotalCalculado = actualizacionGastoEnergetico + actualizacionCostoMaterial * 4;
        setCostoTotal(costoTotalCalculado);

        // Calculamos la ganancia neta como la mitad del costo total
        let gananciaCalculada = costoTotalCalculado / 2;
        setGananciaNeta(gananciaCalculada);
    }, [horasDeImpresion, luzXHora, gramosUtilizados, precioFilamento]);

    function processData(ValoresInputs) {
        console.log("Valores de los inputs:", ValoresInputs);
        if (ValoresInputs.length === 4) {  // Ahora esperamos solo 4 valores
            asingValues(ValoresInputs);
        } else {
            console.log('Hubo un error: Algunos campos están vacíos o incorrectos');
        }
    }

    async function asingValues(ValoresInputs) {
        // Asegurarse de que los valores sean números válidos
        const precio = parseFloat(ValoresInputs[0]);
        const gramos = parseFloat(ValoresInputs[1]);
        const horas = parseFloat(ValoresInputs[2]);
        const luz = parseFloat(ValoresInputs[3]);

        // Verificamos si los valores son válidos antes de asignarlos
        if (isNaN(precio) || isNaN(gramos) || isNaN(horas) || isNaN(luz)) {
            console.log("Error: alguno de los valores no es válido");
            return;
        }

        // Asignamos los valores solo si son números válidos
        setPrecioFilamento(precio);
        setGramosUtilizados(gramos);
        setHorasDeImpresion(horas);
        setLuzXHora(luz);
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
        const ValoresInputs = [];
        let focusSet = false;

        // Recoger los valores de los inputs
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

        // Procesar los datos recogidos
        processData(ValoresInputs);
    };

    return (
        <div className="flex  flex-col min-h-screen">
            <Navbar theme={theme} changeTheme={changeTheme} />
            
            <div className="flex gap-2 flex-col md:flex-row flex-1 justify-center">
                {/* Aquí puedes ajustar los márgenes y el tamaño de los contenedores */}
                <section className="basis-1/3 sm:basis-[40%] p-5 m-4 border border-fuchsia-950 border-3 rounded-lg bg-slate-950/40">
                    <Calculator theme={theme} handleButtonClick={handleButtonClick} />
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
