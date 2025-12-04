import React from 'react';

const Contact = () => {
    return (
        <div className="m-5 mt-10 flex flex-col justify-center items-center ">
              <div>
                <h1 className="text-4xl text-center text-sky-800 font-bold mb-4 animate__animated animate__fadeInDown">
                  For any quiry Contact With Us
                </h1>
              </div>
              <div className=" bg-black w-full max-w-sm shrink-0 shadow-2xl items-center">
                <div className="card-body pr-5 mr-5 ">
                  <fieldset className="fieldset ">
                    <label className="label font-bold text-gray-200 ">Name</label>
                    <input
                      type="Name"
                      className="input "
                      placeholder="Name"
                      required
                    />
                    <label className="label font-bold text-gray-200">Email</label>
                    <input
                      type="email"
                      className="input"
                      placeholder="Email"
                      required
                    />
                    <label className="label font-bold text-gray-200">
                      Mobile No
                    </label>
                    <input
                      type="Mobile"
                      className="input"
                      placeholder="Mobile No"
                      required
                    />
                    <label className="label font-bold text-gray-200">
                      Message
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Message"
                    />
                    <button className="btn text-white bg-sky-800 w-80 hover:bg-indigo-300 mt-4">
                      Submit
                    </button>
                  </fieldset>
                </div>
              </div>
            </div>
    );
};

export default Contact;