
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
            info='This class is about Business'
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

