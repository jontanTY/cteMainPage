
import PageTemplate from "../components/PageTemplate";

export default function themScreensTemplate() {
    const classes = [
        { id: 1, name: "Marketing", description: 1 },
        { id: 2, name: "Entrepreneurship", description: 3 },
        { id: 3, name: "Financial Management", description: 7 },
    ];

    const subClasses = [
        { id: 1, name: "Advertising & Public Relations", description: 1 },
        { id: 2, name: "Entrepreneurship 1", description: 3 },
        { id: 3, name: "Principles of Finance", description: 7 },
    ];

    const finalClasses = [
        { id: 1, name: "Digital Marketing & Analytics", description: 1 },
        { id: 2, name: "Entrepreneurship 2", description: 3 },
        { id: 3, name: "Accounting", description: 7 },
    ];


    return (
        <PageTemplate
            class='Business'
            info='Foundations of Business & Marketing is an introductory course designed to inform students about careers in various sectors of business, as well as basic business concepts. This Level 1 course serves as the foundation course for the Business Management, Entrepreneurship, Financial Management, Marketing Management, and Supply Chain and Logistics Technology programs of study. Upon completion of the course, a proficient student will have foundational knowledge of business and business-related occupations and concepts, including management, finance, marketing, and entrepreneurship and how each intertwines. Recommended for students who seek a general background and overview of business.'
            image={require('../assets/businessBackground.png')}
            foundationClass='Foundations of Business & Marketing'
            foundationDescription="This course introduces students to business operations, marketing strategies, financial literacy, and entrepreneurship. Through hands-on projects and real-world applications, students develop critical thinking and problem-solving skills for future studies or careers."
            classes={classes}
            subClasses={subClasses}
            finalClasses={finalClasses}
            club={'DECA'}
            clubDescription="DECA is an organization that prepares emerging leaders and entrepreneurs in marketing, finance, hospitality, and management. Through competitive events, leadership training, and networking opportunities, DECA members develop essential skills for success in their future careers."
            decaImage={require('../assets/DECA.jpg')}  
        />
    );
}

