import { FaArrowRight } from "react-icons/fa";
import InputCalculator from './InputCalculator';
import { Link } from 'react-router-dom';

const Calculator = ({ handleButtonClick }) => {
    return (
        <>
            <form
                action=""
                className="flex flex-col items-center gap-4 h-full justify-around"
            >
                {/* Precio Filamento por Kg */}
                <InputCalculator label={"Precio Filamento por Kg"} id={"PrecioFilamento"} />

                {/* Gramos Utilizados */}
                <InputCalculator label={"Gramos utilizados"} id={"GramosPieza"} />

                {/* Horas de Impresión */}
                <InputCalculator label={"Horas de Impresión"} id={"HorasDeImpresion"} />

                {/* Gasto de Luz y Enlace */}
                <div className='w-full flex justify-between items-center'>
                    <InputCalculator label={"Gasto de Luz por Hora"} id={"NombreDeLaPieza"} />
                    
                </div>

                {/* Botón Calcular */}
                <button
                    className="w-52 border-black-2 border-black border-2 p-2 rounded-md bg-gradient-to-r from-[#4f3763] to-[#88629c] shadow mt-4 text-slate-100"
                    onClick={handleButtonClick}
                >
                    Calcular
                </button>
            </form>
        </>
    );
}

export default Calculator;
