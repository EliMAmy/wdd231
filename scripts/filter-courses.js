//COURSES
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function createCard(courses) {
    document.querySelector(".courses").innerHTML = "";
    let text = document.createElement("p");
    let value = credits(courses);
    text.innerHTML = `<span class="label">The total credits for course listed above is ${value}</span>`;
    courses.forEach(course => {
        let card = document.createElement("section");
        let nameCourse = document.createElement("p");
        if (course.completed)
        {
            card.setAttribute("class","color")
        }

        nameCourse.textContent = course.subject + course.number;

        card.appendChild(nameCourse);

        document.querySelector(".courses").appendChild(card);

    });
    document.querySelector(".courses").appendChild(text);


}


const options = [
    {
        name:"All",
    },
    {
        name:"CSE",
    },
    {
        name:"WDD",
    }
]

createOption(options);
function createOption(options) {
    document.querySelector(".option").innerHTML = "";
    let newCard = document.createElement("section");
    
    options.forEach(option => {

        let nameOption = document.createElement("button");
        nameOption.addEventListener("click", () => {
            if (option.name == "All") {
                createCard(courses);
            }
            else if(option.name == "WDD")
            {
                createCard(courses.filter(course => course.subject.includes("WDD")));
            }
            else if(option.name=="CSE")
            {
                createCard(courses.filter(course => course.subject.includes("CSE")));
            }

        });
        nameOption.textContent = option.name;
        newCard.appendChild(nameOption);

        document.querySelector(".option").appendChild(newCard);
    });

}

function credits(courses) {
    const array1 = [];
    courses.forEach(course => {
        let number = course.credits;
        array1.push(number)
    });
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );
    return sumWithInitial;
}
