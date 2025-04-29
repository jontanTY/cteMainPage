import PageTemplate from '../components/PageTemplate';

export default function FashionPage() {
    //const VideoPlayer = () => {
    //const videoRef = useRef<VideoRef>(null);
    return (
        <PageTemplate
            class='Fashion'
            info='This class is about fashion'
            image={require('../assets/fashionBackground.png')}
        />
    );
}

