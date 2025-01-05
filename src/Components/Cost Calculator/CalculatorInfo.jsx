import React from "react"
const CalculatorInfo = ({ costoMaterial, gastoEnergetico , costoTotal })=>{
    let total = costoTotal / 2
   return (<>
            <div className="flex flex-col items-around text-gray-200 h-full justify-around text-2xl">
                
                <div className="flex justify-between">
                    <p>Costo de Material utilizado:</p>
                    <p>{`$${costoMaterial}`}</p>
                </div>
                
                <div className="flex justify-between">
                    <p>Gasto energetico:</p>
                    <p>{`$${gastoEnergetico}`}</p>
                </div>

            
                <div className="flex justify-between">
                    <p>Ganancia neta</p>
                    <p>{`$${total}`}</p>
                </div>
                
                <div className="flex justify-between">
                    <p>Precio total de la pieza</p>
                    <p>{`$${costoTotal}`}</p>
                </div> 
                
            </div>
           
          </>
    

   ) 
}

export default CalculatorInfo