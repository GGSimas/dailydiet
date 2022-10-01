import {
    Container,
    Heading,
    HeadingSubtitle,
    HeadingTitle,
    ImageContainer
} from './styles';

import okayimage from '@assets/not-okay.png';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function CreatedMealNotAllowed() {
    const navigator = useNavigation();

    function handleHomeGoBack() {
        navigator.navigate('home');
    }
    
    return (
        <Container>
            <Heading>
                <HeadingTitle>Que pena!</HeadingTitle>
                <HeadingSubtitle>Você saiu da dieta dessa vez, mas continue se esforçando e não desista!</HeadingSubtitle>
            </Heading>

            <ImageContainer source={okayimage} />

            <Button title="Ir para página inicial" onPress={handleHomeGoBack} />
        </Container>
    )
}