import { useFormik } from "formik";
import { Fragment } from "react";
import * as yup from "yup";

const NewsLetterForm = ({ btnColor = "primary", btnText = "Send" }) => {
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: { email: "" },
			validationSchema: yup.object().shape({
				email: yup
					.string()
					.email("Please enter a valid email")
					.required("Please fill out this field"),
			}),
			onSubmit: async (_v, a) => {
				a.resetForm();
			},
		});

	return (
		<Fragment>
			{touched.email && errors.email && <ErrorMsg msg={errors.email} />}
			<form
				className="flex items-center justify-between w-full rounded overflow-hidden h-[2.4rem] bg-white"
				onSubmit={handleSubmit}>
				<div className="flex flex-grow flex-col h-full">
					<div className="flex items-center justify-between h-full rounded-sm bg-whiteColor border border-gray-300 focus-within:border">
						<input
							type="email"
							name="email"
							placeholder="Email address"
							className="flex-grow w-full border-0 outline-0 px-2 h-full bg-transparent text-gray-900"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</div>
				</div>
				<button
					className={`primaryBtn h-full rounded-none ${
						btnColor !== "primary" &&
						"!bg-gray-900 !hover:bg-gray-800"
					}`}>
					<span>{btnText}</span>
				</button>
			</form>
		</Fragment>
	);
};

const ErrorMsg = ({ msg }) => {
	return <span className="text-xs text-red-500">{msg}</span>;
};

export default NewsLetterForm;
