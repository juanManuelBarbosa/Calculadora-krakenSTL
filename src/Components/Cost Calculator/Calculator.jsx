import { FaArrowRight } from "react-icons/fa";
import InputCalculator from './InputCalculator';

const Calculator = ({ handleButtonClick, tipoImpresion, setTipoImpresion }) => {
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

                {/* Gasto de Luz */}
                <div className='w-full flex justify-between items-center'>
                    <InputCalculator label={"Gasto de Luz por Hora"} id={"NombreDeLaPieza"} />
                </div>

                {/* Selector de tipo de impresión (Unicolor o Multicolor) */}
                <div className="flex justify-between w-full">
                    <label htmlFor="tipoImpresion">Tipo de impresión:</label>
                    <div className="flex gap-4">
                        <label>
                            <input 
                                type="radio" 
                                name="tipoImpresion" 
                                value="unicolor" 
                                checked={tipoImpresion === "unicolor"} 
                                onChange={() => setTipoImpresion("unicolor")} 
                            />
                            Unicolor
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="tipoImpresion" 
                                value="multicolor" 
                                checked={tipoImpresion === "multicolor"} 
                                onChange={() => setTipoImpresion("multicolor")} 
                            />
                            Multicolor
                        </label>
                    </div>
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
};

export default Calculator;
