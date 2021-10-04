import React,{useState} from "react"
import {View, TextInput, Text,TouchableOpacity} from "react-native"
import ResultImc from "./ResultImc/"
import styles from "./style";

export default function Form(){
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha o Peso e Altura")
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
  //se peso e altura for igual  a null 
     setImc(null)
    setTextButton("Calcular")
    setMessageImc("Tem que preencher os campo para fazer o calculo ^^")
}

  return(
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>

        <TextInput style={styles.input}
          onChangeText={setHeight}
          value ={height}
          placeholder ="Ex. 1.75"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput  
        //toda vez que e clica e  digitar vai setando o peso
          style={styles.input}
          onChangeText={setWeight}
          value ={weight}
          placeholder ="Ex. 63.400"
          keyboardType="numeric"
        />
        <TouchableOpacity
            style ={styles.buttonCalculator}
            onPress={() =>{
            validationImc()}} >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
        
      </View>
      
     <ResultImc messageResultImc ={messageImc} resultImc={imc} />
    </View>
  )
}
// retornado o valores para a tela
//<ResultImc messageResultImc ={messageImc} resultImc={imc} />