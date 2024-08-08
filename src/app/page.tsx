"use client";
import { Form, Formik } from "formik";

export default function Home() {
  const handleSubmit = async (values: any) => {
    const response = await fetch("/api/ssh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
    });
    const result = await response.json();
    console.log(result);
  };
  return (
    <main className="flex min-h-screen items-center justify-between p-24 bg-black">
      <Formik
        initialValues={{
          username: "",
          password: "",
          serverIP: "",
          privateKey: "",
          message: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
          <Form className="">
            <div className="w-full flex flex-col gap-3 ">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="serverIP"
                placeholder="Server IP"
                value={values.serverIP}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
              <textarea
                name="privateKey"
                placeholder="Private Key (Optional)"
                value={values.privateKey}
                onChange={handleChange}
              />
              <button className="bg-green-600 text-white">Connect</button>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
}
