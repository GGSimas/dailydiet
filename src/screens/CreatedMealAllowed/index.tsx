import {
    Container,
    Heading,
    HeadingSubtitle,
    HeadingTitle,
    ImageContainer
} from './styles';

import okayimage from '@assets/is-okay.png';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function CreatedMealAllowed() {
    const navigator = useNavigation();

    function handleHomeGoBack() {
        navigator.navigate('home');
    }
    return (
        <Container>
            <Heading>
                <HeadingTitle>Continue assim!</HeadingTitle>
                <HeadingSubtitle>Você continua dentro da dieta. Muito bem</HeadingSubtitle>
            </Heading>

            <ImageContainer source={okayimage} />

            <Button title="Ir para página inicial"  onPress={handleHomeGoBack}/>
        </Container>
    )
}