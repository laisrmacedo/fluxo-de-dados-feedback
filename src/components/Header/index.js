import {TitleHeader, ImgPerfil} from './styled'


export const Header = (props) => {

    return(
        <TitleHeader>
                <ImgPerfil src={props.dadosLogin.foto}/>
                {/* https://media-exp1.licdn.com/dms/image/C4D03AQERWEn98bnBug/profile-displayphoto-shrink_800_800/0/1647821206581?e=1671667200&v=beta&t=ZIGkflfGbsqZAaKtCUapZ9xBlms6F0dyfX54gbYX3PY */}
                <p>{props.dadosLogin.nome}</p>
            <h4>Insta4</h4>
        </TitleHeader>
    )
}