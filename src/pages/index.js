import React, { useState } from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import Spinner from "../components/Spinner"
import "./tailwind.css"
import "./index.scss"
import emailjs from "emailjs-com"

export default function IndexPage() {
  const NOT_SUBMITTED = 0
  const SUBMITTED = 1
  const SUBMITTING = 2
  const SUBMIT_FAILED = 3

  const [contactMethod, setContactMethod] = useState("")
  const [contactName, setContactName] = useState("")
  const [contactAddress, setContactAddress] = useState("")
  const [submitStatus, setSubmitStatus] = useState(0)


  emailjs.init("user_0bkLmMrkWZfCnMae4ky2z")

  return (
    <Layout>
      {submitStatus === NOT_SUBMITTED && (
        <form>
          <p className="text-2xl color-b font-bold text-center">
            Intresseanmälan
          </p>
          <div className="my-4">
            <label className="block color-b text-center" htmlFor="name">
              Namn
            </label>
            <input
              className="w-full h-12 border-gray-300 border-solid border-2 rounded text-center"
              placeholder="Anna Andersson"
              id="name"
              type="text"
              required="yes"
              onChange={e => {
                setContactName(e.target.value)
                console.log(e.target.value)
              }}
              className="w-full h-12 border-gray-300 border-solid border-2 rounded text-center"
              required="yes"
              defaultValue={""}
              onInvalid={e => {
                e.target.setCustomValidity("")
                if (!e.target.validity.valid) {
                  e.target.setCustomValidity("Du måste fylla i ditt namn.")
                }
              }}
            />
          </div>
          <div className="my-4">
            <label
              className="block color-b text-center"
              htmlFor="contact-option"
            >
              Hur vill du bli kontaktad?
            </label>
            <select
              onChange={e => {
                setContactMethod(e.target.value)
                console.log(e.target.value)
              }}
              className="w-full h-12 border-gray-300 border-solid border-2 rounded text-center"
              required="yes"
              defaultValue={""}
            >
              <option disabled={true} style={{ display: "none" }} value="">
                Välj ett alternativ
              </option>
              <option value="phone">Telefon</option>
              <option value="mail">E-post</option>
            </select>
          </div>
          {contactMethod.length > 0 && (
            <div className="my-4">
              <label
                className="block color-b text-center"
                htmlFor="contact-option"
              >
                {contactMethod === "phone" ? "Telefonnummer" : "E-post"}
              </label>
              <input
                className="w-full h-12 border-gray-300 border-solid border-2 rounded text-center"
                placeholder={
                  contactMethod === "phone"
                    ? "+46 712-345678"
                    : "anna.andersson@epost.se"
                }
                id="contactAddress"
                type={contactMethod === "phone" ? "tel" : "email"}
                required="yes"
                onChange={e => {
                  setContactAddress(e.target.value)
                  console.log(e.target.value)
                }}
                onInvalid={e => {
                  console.log("invalid")
                  e.target.setCustomValidity("")
                  if (!e.target.validity.valid) {
                    const text =
                      "Du måste fylla i " +
                      (contactMethod === "phone"
                        ? "ditt telefonnummer."
                        : "din e-post.")

                    e.target.setCustomValidity(text)
                  }
                }}
              />
            </div>
          )}
          <button
            type="button"
            className="w-full bg-color-b text-white h-12 mt-8 border-gray-300 border-solid border-2 rounded text-center"
            title="Skicka in anmälan"
            disabled={
              contactMethod.length === 0 ||
              contactName.length === 0 ||
              contactAddress === 0
            }
            onClick={() => {
              setSubmitStatus(SUBMITTING)
              emailjs
                .send("default_service", "template_I27ARLU2", {
                  contactName: contactName,
                  contactMethod:
                    contactMethod === "phone" ? "Telefonnummer: " : "E-mail:",
                  contactAddress: contactAddress,
                })
                .then(
                  function(response) {
                    setSubmitStatus(SUBMITTED)
                    console.log("SUCCESS!", response.status, response.text)
                  },
                  function(error) {
                    setSubmitStatus(SUBMIT_FAILED)
                    console.log("FAILED...", error)
                  }
                )
            }}
          >
            Skicka in anmälan
          </button>
        </form>
      )}
      {submitStatus === SUBMITTING && (
        <div className="text-center">
          <Spinner type="timer" />
          <p>Skickar in intresseanmälan.</p>
        </div>
      )}
      {submitStatus === SUBMITTED && (
        <div className="text-center">
          <p>Intresseanmälan inskickad. Vi hör av oss så fort vi kan. </p>
        </div>
      )}
    </Layout>
  )
}
