import React,{useState} from "react"
import {View, TextInput, Text,Button} from "react-native"
import ResultImc from "./ResultImc/"

export default function Form(){
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("preencha o peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")

  //calculo do IMC
function imcCalulator(){
  return setImc ((weight/(height*height)).toFixed(2))
}

// validando campos
function validationImc(){
  if(weight != null && height != null){
    imcCalulator()
    setHeight(null)
    setWeight(null)
    setMessageImc("Seu imc é igual:")
    setTextButton("Calcular Novamente")
    return
  }
     setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencha o peso e altura")
}

  return(
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput 
          onChangeText={setHeight}
          value ={height}
          placeholder ="Ex. 1.75"
          keyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput  
        //toda vez que e clica e vai digitando vai setando o peso
          onChangeText={setWeight}
          value ={weight}
          placeholder ="Ex. 63.400"
          keyboardType="numeric"
        />
        <Button 
        onPress={()=>validationImc()}
        title ={textButton} />
      </View>
     <ResultImc messageResultImc ={messageImc} resultImc={imc} />
    </View>
  )
}