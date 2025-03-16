import styles from "./SobreMim.module.css"
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.jpg";


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >

            <h3 className={styles.subtitulo}>
                Olá
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Leandro sorrindo"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou desenvolvedor Front-end e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Formado em Técnico em Eletrônica, tenho experiência com consertos de equipamentos eletrônicos diversos e suporte técnico em configurações de equipamentos de segurança eletrônica como centrais de alarmes, cercas elétricas , CFTV, automação, sistemas de incêndio, controle de acesso, redes e informática.
            </p>
            <p className={styles.paragrafo}>
                Por gostar muito de tecnologias, aprender coisas novas, encontrar soluções e resolver problemas, percebi que tenho o perfil ideal para me tornar um desenvolvedor e tenho me dedicado a isso atualmente.
            </p>

            <p className={styles.paragrafo}>
                Meu primeiro passo foi aprender sobre lógica de programação e me apaixonei pelo processo, então eu me matriculei na Alura, que é considerada a maior escola on-line de tecnologia do Brasil e tenho evoluído bastante. 
            </p>
            <p className={styles.paragrafo}>
                Minha intenção é estar cada vez mais preparado para as oportunidades que aparecerem, por isso, todos os dias eu procuro dedicar um tempo de qualidade para meus estudos conciliando com o meu trabalho atual e as obrigações diárias.
            </p>
                 
            <p className={styles.paragrafo}>
                 Minha vida tem sido aprenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. Atualmente eu também sou aluno da UniCesumar onde estou cursando Análise e desenvolvimento de sistemas.
            </p>
        </PostModelo>

    )
}