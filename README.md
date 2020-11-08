# Uncontrolled Form (UNFORM)

  Performance
  Lida com largas e complexas estruturas de dados

## Motivo do nome
  Conceito que diz que não se deve anotar os dados de input enquanto o usuário digita

## Conceitos
  
  ### useField()
    - API que conect o input com o Unform
  
  ### fieldName
    - Nome final do input quando há um número grande de caminhos
  
  ### registerField
    - Disparar sempre que o component for montado
    - usando o clássico useEffect(() => {}, [])

  ### Não usar o onChange() no input
    - Desnecessário
    - usar o 'ref' é melhor, pois conseguimos obter o valor do input a qualquer momento
  
  ### Examples
    `useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value", // prop que contém o valor do input dentro da ref
    });
  }, [fieldName, registerField]);`
