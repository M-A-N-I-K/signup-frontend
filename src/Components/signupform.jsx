import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Example() {
	const [firstname, setFirstname] = useState("");
	const [middlename, setMiddlename] = useState("");
	const [lastname, setLastname] = useState("");
	const [organizationname, setOrganizationname] = useState("");
	const [gstnumber, setGSTnumber] = useState(0);
	const [address, setAddress] = useState("");
	const [mobilenumber, setMobilenumber] = useState(0);
	const [email, setEmail] = useState("");
	const api_key = "https://signup-form-backend.onrender.com";
	const onSubmit = async (event) => {
		event.preventDefault();
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
			<Card color="transparent" shadow={false}>
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
							onChange={(event) => setFirstname(event.target.value)}
							label="First Name"
							name="firstName"
						/>
						<Input
							size="lg"
							value={middlename}
							onChange={(event) => setMiddlename(event.target.value)}
							label="Middle Name"
							name="middleName"
						/>
						<Input
							size="lg"
							value={lastname}
							onChange={(event) => setLastname(event.target.value)}
							label="Last Name"
							name="lastName"
						/>
						<Input
							size="lg"
							value={organizationname}
							onChange={(event) =>
								setOrganizationname(event.target.value)
							}
							label="Organization Name"
							name="organizationName"
						/>
						<Input
							value={gstnumber}
							onChange={(event) => setGSTnumber(event.target.value)}
							size="lg"
							label="GST Number"
							name="gstNumber"
						/>
						<Input
							size="lg"
							value={address}
							onChange={(event) => setAddress(event.target.value)}
							label="Address"
							name="address"
						/>
						<Input
							type="number"
							value={mobilenumber}
							onChange={(event) => setMobilenumber(event.target.value)}
							size="lg"
							label="Mobile No."
							name="mobileNumber"
						/>
						<Input
							type="email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							size="lg"
							label="Email"
							name="emailId"
						/>
					</div>
					<Button className="mt-6" fullWidth onClick={onSubmit}>
						Register
					</Button>
				</form>
			</Card>
		</div>
	);
}
