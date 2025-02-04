
import useAosAnimation from './useAosAnimation.js';

const Accordion = () => {

    useAosAnimation ();

    return (
        <div className="slideOut">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item " data-aos='slide-up' >
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button" id="accord-butt"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            What is Tech4All?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body">
                        Tech4 All is an inclusive tech school offering a wide range of courses, 
                        including software testing, project management, and front-end development. 
                        Our mission is to make tech education accessible to everyone, 
                        regardless of their background or prior experience.
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item" data-aos='slide-up'> 
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button" id="accord-butt"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                        >
                            How can I enroll in the program?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body">
                        Enrolling in Tech4All is a straightforward process. You can visit our website and click on the 
                        'Enroll Now' button. 
                        Follow the steps to create an account, choose your desired course, and complete the enrollment form.
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item" data-aos='slide-up'>
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button" id="accord-butt"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="true"
                            aria-controls="collapseThree"
                        >
                            How do I subscribe to the program?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse "
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        Payment details vary depending on the specific course you choose. Generally, you will be required
                         to make a payment during the enrollment process. We offer flexible payment options, including 
                         one-time payments and installment plans. 
                        Be sure to review the payment information provided during enrollment.
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item" data-aos='slide-up'>
                    <h2 className="accordion-header" id="headingFour">
                        <button
                            className="accordion-button" id="accord-butt"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="true"
                            aria-controls="collapseFour"
                        >
                            When will training start on the program i enrolled in?
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        Course start dates can vary based on the specific program you've chosen. Once you've completed your
                         enrollment and payment, you will receive an email confirmation with detailed information about the
                          course start date, schedule, and any pre-course materials or requirements. Typically, 
                        our courses have multiple start dates throughout the year to accommodate different learners' needs.
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item " data-aos='slide-up'>
                    <h2 className="accordion-header" id="headingFive">
                        <button
                            className="accordion-button" id="accord-butt"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="true"
                            aria-controls="collapseFive"
                        >
                            What is the program duration?
                        </button>
                    </h2>
                    <div
                        id="collapseFive"
                        className="accordion-collapse collapse "
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        The duration of our courses varies depending on the program and the level of proficiency
                         you aim to achieve. Generally, our courses range from a few weeks for introductory courses 
                         to several months for more comprehensive programs. You can find specific course durations 
                         on our website or in the course description during enrollment .


                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Accordion;