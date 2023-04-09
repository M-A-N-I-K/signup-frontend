import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
export default function Example() {
	const [firstname, setFirstname] = useState("");
	const [middlename, setMiddlename] = useState("");
	const [lastname, setLastname] = useState("");
	const [organizationname, setOrganizationname] = useState("");
	const [gstnumber, setGSTnumber] = useState(0);
	const [address, setAddress] = useState("");
	const [mobilenumber, setMobilenumber] = useState(0);
	const [email, setEmail] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const api_key = "https://signup-form-backend.onrender.com";
	const onSubmit = async (info, event) => {
		console.log(info);
		const data = {
			firstName: firstname,
			middleName: middlename,
			lastName: lastname,
			organizationName: organizationname,
			gstNumber: gstnumber,
			address: address,
			mobileNumber: mobilenumber,
			emailId: email,
		};
		try {
			await axios.post(`${api_key}/auth/signup`, data);
			toast.success("User registered Successfully!", {
				position: "bottom-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} catch (err) {
			toast.error("User not registered!", {
				position: "bottom-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	};
	return (
		<div className="flex justify-center content-center pt-11">
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<Card color="transparent" shadow={false} handleSubmit={onSubmit}>
				<Typography variant="h4" color="blue-gray">
					Sign Up
				</Typography>
				<Typography color="gray" className="mt-1 font-normal">
					Enter your details to signup.
				</Typography>
				<form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
					<div className="mb-4 flex flex-col gap-6">
						<Input
							size="lg"
							value={firstname}
							label="First Name"
							name="firstName"
							{...register("firstName", {
								onChange: (event) => setFirstname(event.target.value),
								required: true,
								maxLength: 10,
							})}
						/>
						{errors.firstName && (
							<p className=" text-red-700 font-light">
								Please enter your First name
							</p>
						)}
						<Input
							size="lg"
							value={middlename}
							label="Middle Name"
							name="middleName"
							{...register("middleName", {
								onChange: (event) => setMiddlename(event.target.value),
							})}
						/>
						<Input
							size="lg"
							value={lastname}
							label="Last Name"
							name="lastName"
							{...register("lastName", {
								onChange: (event) => setLastname(event.target.value),
								required: true,
								maxLength: 10,
							})}
						/>
						{errors.lastName && (
							<p className=" text-red-700 font-light">
								Please enter your Last name
							</p>
						)}
						<Input
							size="lg"
							value={organizationname}
							label="Organization Name"
							name="organizationName"
							{...register("organizationName", {
								required: true,
								onChange: (event) =>
									setOrganizationname(event.target.value),
							})}
						/>
						{errors.organizationName && (
							<p className=" text-red-700 font-light">
								Please enter your organization name
							</p>
						)}
						<Input
							value={gstnumber}
							size="lg"
							label="GST Number"
							name="gstNumber"
							{...register("gstNumber", {
								required: true,
								maxLength: 15,
								onChange: (event) => setGSTnumber(event.target.value),
							})}
						/>
						{errors.gstNumber && (
							<p className=" text-red-700 font-light">
								Please enter a valid gst number
							</p>
						)}
						<Input
							size="lg"
							value={address}
							label="Address"
							name="address"
							{...register("address", {
								required: true,
								onChange: (event) => setAddress(event.target.value),
							})}
						/>
						{errors.address && (
							<p className=" text-red-700 font-light">
								Please enter your address
							</p>
						)}
						<Input
							type="number"
							value={mobilenumber}
							size="lg"
							label="Mobile No."
							name="mobileNumber"
							{...register("mobileNumber", {
								required: true,
								maxLength: 10,
								onChange: (event) =>
									setMobilenumber(event.target.value),
							})}
						/>
						{errors.mobileNumber && (
							<p className=" text-red-700 font-light">
								Please enter a valid Mobile Number
							</p>
						)}
						<Input
							type="email"
							value={email}
							size="lg"
							label="Email"
							name="emailId"
							{...register("emailId", {
								required: true,
								pattern:
									/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								onChange: (event) => setEmail(event.target.value),
							})}
						/>
						{errors.emailId && (
							<p className=" text-red-700 font-light">
								Please enter a valid email ID
							</p>
						)}
					</div>
					<Button
						className="mt-6"
						fullWidth
						onClick={handleSubmit(onSubmit)}
					>
						Register
					</Button>
				</form>
			</Card>
		</div>
	);
}
