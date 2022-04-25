import React, { useState } from 'react';
import axios from "axios";
export const CreateEntity = () => {

    const [form, setForm] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("  http://localhost:8080/entities", form).then(() => {
            alert("data added successfully")

        })
    }

    const handleChange = (e) => {
        const {id, value} = e.target;
        setForm({...form, [id]: value})

    };

    return (
        <>
            <h3>Create Data</h3>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text"
                    id='name'
                    placeholder="Enter Name"
                    onChange={handleChange}
                /> <br />

                <label>City</label>
                <input type="text"
                    id='city'
                    placeholder="Enter City"
                    onChange={handleChange}
                /> <br />


                <label>Address</label>
                <input type="text"
                    id='address'
                    placeholder="Enter Addrress"
                    onChange={handleChange}
                /> <br />

                <label>Capacity</label>
                <input type="text"
                    id='capacity'
                    placeholder="Enter Capacity"
                    onChange={handleChange}
                /> <br />

                <label>Cost per day</label>
                <input type="text"
                    id='costPerDay'
                    placeholder="Enter Cost"
                    onChange={handleChange}
                /> <br />


                <label>Verified</label>
                <select type="text"
                    id='verified'
                    onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <br />

                <label>Rating</label>
                <input type="number"
                    id='rating'
                    placeholder="Enter Rating"
                    onChange={handleChange}
                />
                <br />
                <label>Image</label>
                <input type=" " id="image" placeholder="paste image url" />
                <br />

                <label>Title</label>
                <input type="text"
                    id='title'
                    placeholder="Enter title"
                    onChange={handleChange}
                />
                <br />
                <label>Accepted Pet Size</label>
                <input type="number"
                    id='petSize'
                    placeholder="Enter pet size"
                    onChange={handleChange}
                />
                <br />

                <label>Pet Type</label>

                <select id='petType' onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cats</option>
                    <option value="Rabbits">Rabbit</option>
                </select>
                <br />

                <label>Weight</label>

                <select id='weight' onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="1-5">1-5kg</option>
                    <option value="5-10">5-10kg</option>
                    <option value="10-20">10-20kg</option>
                    <option value="20-40">20-40kg</option>
                    <option value="40+kg">40+kg</option>
                </select>
                <br />

                <label>Level of adult supervision</label>

                <input type="text"
                    onChange={handleChange}
                    id="adultSupervision"
                    placeholder="Level of supervison"
                />
                <br />
                <label>Sleeping Place</label>
                <input type="text"
                    id="sleepingPlace"
                    onChange={handleChange} />
                <br />
                <label>Number of potty breaks per day</label>
                <input type="number"
                    id="pottyBreaks"
                    onChange={handleChange}
                />
                <br />

                <label>Number of Walks per day</label>
                <input type="number"
                    id="numberOfWalks"
                    onChange={handleChange}
                />
                <br />
                <label>Type of Home</label>

                <select id="typeOfHome" onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                </select>
                <br />

                <label>Outdoor Area Size</label>
                <select id="outdoorSize" onChange={handleChange}>
                    <option value="">select</option>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                </select>
                <br />
                <label >Emergency transport</label>
                <select id="transport" onChange={handleChange}>
                    <option value="">select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <br />
                <input type="submit" />



            </form>
        </>

    )
}
