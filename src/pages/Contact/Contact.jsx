import { Helmet } from "react-helmet-async";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {

    const handleOnClick = e => {
        e.preventDefault()
    }

    return (
        <div className="container mx-auto px-4 my-[120px]">
            <Helmet>
                <title>Diyafah || Contact Us</title>
            </Helmet>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0F172A]">Contact. <span className="text-[#6B7280]">Get in Touch</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-[80px]">
                <div className="bg-orange-50 rounded-xl text-center py-10">
                    <FaLocationDot className="mx-auto text-3xl text-red-400"/>
                    <div>
                        <h1 className="text-[#0F172A] text-xl font-semibold pt-4">Address</h1>
                        <span className="text-sm text-[#6B7280] font-semibold">Los Angeles, CA</span>
                    </div>
                </div>
                <div className="bg-blue-50 rounded-xl text-center py-10">
                    <MdEmail className="mx-auto text-3xl text-red-400"/>
                    <div>
                        <h1 className="text-[#0F172A] text-xl font-semibold pt-4">Email</h1>
                        <span className="text-sm text-[#6B7280] font-semibold">diyafah@info.com</span>
                    </div>
                </div>
                <div className="bg-lime-50 rounded-xl text-center py-10">
                    <FaPhone className="mx-auto text-3xl text-red-400"/>
                    <div>
                        <h1 className="text-[#0F172A] text-xl font-semibold pt-4">Phone</h1>
                        <span className="text-sm text-[#6B7280] font-semibold">555-123-4567</span>
                    </div>
                </div>
            </div>

            <div className="mt-[80px]">
                <div className="text-center">
                    <h1 className="text-[#0F172A] text-3xl font-semibold">Have Any Question?</h1>
                    <p className="text-[#6B7280] text-base font-medium max-w-xl mx-auto mt-4">We&apos;re here to help! Feel free to reach out to us with any inquiries or concerns, and our team will get back to you as soon as possible.</p>

                    <div className="max-w-3xl mx-auto lg:px-4 border mt-6 rounded-2xl">
                        <form className="card-body">
                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="form-control lg:flex-1">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name here..." className="input input-bordered" required />
                                </div>
                                <div className="form-control lg:flex-1">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email here..." className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-end gap-6">
                                <div className="form-control lg:flex-1">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" name="address" placeholder="address here..." className="input input-bordered" required />
                                </div>
                                <div className="lg:flex-1">
                                    <div className="flex flex-wrap items-center gap-6">
                                        <div className="lg:flex-1">
                                            <select defaultValue="Technical Support" name="type" className="select select-ghost w-full">
                                                <option disabled>Select the Reason</option>
                                                <option defaultValue='Technical Support'>Technical Support</option>
                                                <option defaultValue="Billing or Payment Concerns">Billing or Payment Concerns</option>
                                                <option defaultValue="Account Management">Account Management</option>
                                                <option defaultValue="Product or Service Feedback">Product or Service Feedback</option>
                                                <option defaultValue="Order Status and Tracking">Order Status and Tracking</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea input-bordered" placeholder="Message" ></textarea>
                                </div>
                            </div>
                            <div className="form-control mt-6 max-w-xs mx-auto">
                                <button onClick={handleOnClick} className="btn bg-[#0F172A] text-white text-bold ">Get in Touch</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;