import { useState } from "react";
const TechForm = () => {


    const [techFormData, setTechFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTechFormData({
            ...techFormData, [name]: value,
        });
    }

    return (
        <form >
            <div className="formNameEmail" >
                <div>
                    <label htmlFor="name" className="label"> Name </label>
                    <br />
                    <input type="text" id="name" name="name"
                        values={techFormData.name} // controlled input 
                        onChange={handleInputChange} // Handle input change
                        required className="input" placeholder="Your full name" autoComplete="name"
                    />
                </div>


                <div>
                    <label htmlFor="email" className="label"> Email </label>
                    <br />
                    <input type="email" id="email" values={techFormData.email} onChange={handleInputChange}
                        required className="input" placeholder="E.g: abc@gmail.com" autoComplete="email" />
                </div>

            </div>

            <div>
                <label htmlFor="subject" className="label"> Subject </label>
                <br />
                <input type="text" id="subject" values={techFormData.subject} onChange={handleInputChange}
                    required className="input3" placeholder="Give your message a subject" />
            </div>

            <div>
                <label htmlFor="message" className="label"> Message </label>
                <br />
                <textarea type="text" id="message" values={techFormData.message} onChange={handleInputChange}
                    required className="input4" placeholder="Freely express yourself" />
            </div>

            <div className="button-div">
            <button type="submit" className="btn btn-md rounded-pill form-button ">Send Message</button>

            </div>


        </form>
    )
}

export default TechForm;