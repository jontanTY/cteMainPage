import PageTemplate from '../components/PageTemplate';

export default function FashionPage() {
    //const VideoPlayer = () => {
    //const videoRef = useRef<VideoRef>(null);
    return (
        <PageTemplate
            class='Fashion'
            info='Foundations of Fashion & Artisan Design is an introductory course designed to inform students about careers in fashion and craftwork design. This Level 1 course serves as the foundation course for the Fashion & Artisan Design program of study. Upon completion of the course, a proficient student will be able to explain the impact of fashion and craftwork on art, explain and utilize design elements, and create simple fashion or craftwork design artifacts. A student will also be able to describe various occupations and outline the steps necessary to advance in specific careers. As part of a student’s program of study progression, the student will create a digital program of study portfolio, providing evidence of mastery of course standards and readiness to advance and complete the program of study.'
            image={require('../assets/fashionBackground.png')}
        />
    );
}

