import React, { useState } from "react";
import axios from "axios";

export default function JobApplication() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [portfolio, setPortfolio] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = () => {
    if (!file) {
      alert("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("about", about);
    formData.append("portfolio", portfolio);

    axios
      .post("http://localhost:4000/application/upload", formData)
      .then((res) => {
        console.log(res.data);
        alert("File uploaded successfully");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to upload file");
      });
  };

  return (
<div className="flex justify-center">
  <div className="flex flex-col items-start gap-8 border-2 my-[5%] px-[5%] py-[3%] w-full sm:w-auto">
    <form onSubmit={handleSubmit} className="w-full">
      <p className="font-bold text-3xl text-center sm:text-left">Application form</p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input
            onChange={(event) => setName(event.target.value)}
            placeholder="David"
            value={name}
            className="border-2 rounded-md pl-2 w-full sm:w-96 h-9"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            placeholder="davidkoen@gmail.com"
            value={email}
            className="border-2 rounded-md pl-2 w-full sm:w-96 h-9"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Phone number</label>
          <input
            onChange={(event) => setPhone(event.target.value)}
            placeholder="067 180 6200"
            value={phone}
            className="border-2 rounded-md pl-2 w-full sm:w-96 h-9"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>About</label>
          <input
            type="text"
            onChange={(event) => setAbout(event.target.value)}
            placeholder="Software engineer with 2 years work experience..."
            value={about}
            className="border-2 rounded-md pl-2 w-full sm:w-96 h-9"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Attach CV</label>
          <input
            type="file"
            onChange={(event) =>
              setFile(event.target.files ? event.target.files[0] : null)
            }
            className="border-2 rounded-md pl-2 w-full sm:w-96 h-9"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Portfolio Link</label>
          <input
            onChange={(event) => setPortfolio(event.target.value)}
            placeholder="https://example.portfolio.com"
            value={portfolio}
            className="border-2 rounded-md pl-2 w-full sm:w-96 h-9"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold flex justify-end self-end"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</div>

  );
}
