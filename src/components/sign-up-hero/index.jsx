import { SUBTITLE, TITLE } from "./consts";
import * as S from "./styled";

function SignUpHero() {
    return (
        <S.SignUpHero>
            <S.Title>{TITLE}</S.Title>
            <S.Subtitle>{SUBTITLE}</S.Subtitle>
        </S.SignUpHero>
    );
}

export { SignUpHero };
