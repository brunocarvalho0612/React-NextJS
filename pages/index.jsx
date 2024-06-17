import Title from '../src/components/title/Title'
import Subtitle from "../src/components/subtitle/Subtitle"
function HomePage (){
  return (
    <div>
      <Title> Titulo 1 </Title>
      <Subtitle text = "Um subtitulo" />
      <p> paragráfo um </p>
      <Title> Titulo 2 </Title>
      <Subtitle text = "Um outro subtitulo" />
      <p> Outro paragráfo </p>
    </div>
  )
}

export default HomePage