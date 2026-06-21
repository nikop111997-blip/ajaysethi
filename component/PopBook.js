"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"

import {
  Clock3,
  Video,
  Globe,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowUpRight,
  X,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"

const getTrackingData = () => {
  const params = new URLSearchParams(window.location.search)

  return {
    source: params.get("utm_source") || "direct",
    medium: params.get("utm_medium") || "website",
    campaign: params.get("utm_campaign") || "default",
  }
}

export default function BookingComponent() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const [step, setStep] = useState(1)

  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const [currentMonth, setCurrentMonth] = useState(
    new Date().getMonth()
  )

  const [currentYear, setCurrentYear] = useState(
    new Date().getFullYear()
  )

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    fitnessGoal: "",
    program: "",
    notes: "",
  })

  useEffect(() => {
    setMounted(true)

    const handleOpen = (e) => {
      const trigger = e.target.closest(".open-booking-modal")

      if (trigger) {
        setIsOpen(true)
      }
    }

    document.addEventListener("click", handleOpen)

    return () => {
      document.removeEventListener("click", handleOpen)
    }
  }, [])

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNamesShort = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
  ]

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate()

  const firstDayOfMonth = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay()

  const timeSlots = [
    "12:00pm",
    "12:30pm",
    "1:00pm",
    "1:30pm",
    "2:00pm",
    "2:30pm",
    "3:00pm",
    "3:30pm",
    "4:00pm",
    "4:30pm",
    "5:00pm",
    "5:30pm",
    "6:00pm",
    "6:30pm",
    "7:00pm",
    "7:30pm",
    "10:00pm",
    "10:30pm",
    "11:00pm",
  ]

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear((prev) => prev - 1)
    } else {
      setCurrentMonth((prev) => prev - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear((prev) => prev + 1)
    } else {
      setCurrentMonth((prev) => prev + 1)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const closeModal = () => {
    setIsOpen(false)

    setTimeout(() => {
      setStep(1)
      setSelectedDate(null)
      setSelectedTime(null)
      setSubmitSuccess(false)
      setSubmitError("")
    }, 300)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsSubmitting(true)
    setSubmitError("")

    const tracking = getTrackingData()

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            bookingDate: selectedDate,
            bookingTime: selectedTime,
            source: tracking.source,
            medium: tracking.medium,
            campaign: tracking.campaign,
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to submit booking")
      }

      setSubmitSuccess(true)

      setTimeout(() => {
        closeModal()
      }, 3000)
    } catch (error) {
      setSubmitError(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const generateDays = () => {
    const days = []

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} />)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i)

      const isSelected =
        selectedDate?.toDateString() ===
        date.toDateString()

      const isToday =
        new Date().toDateString() ===
        date.toDateString()

      days.push(
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          key={i}
          onClick={() => setSelectedDate(date)}
          className={`
            w-11 h-11 rounded-md cursor-pointer text-sm transition-all
            flex items-center justify-center
            ${isSelected
              ? "bg-[#ff6a3d] text-white shadow-lg"
              : "hover:bg-gray-100 text-gray-700"
            }
            ${!isSelected && isToday
              ? "font-bold text-[#ff6a3d]"
              : ""
            }
          `}
        >
          {i}
        </motion.button>
      )
    }

    return days
  }

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999999] bg-black/50 font-manrope backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white w-full max-w-6xl rounded-[8px] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* MOBILE HEADER */}
            <div className="md:hidden flex items-center justify-between p-5 border-b">
              <h2 className="font-semibold text-lg text-gray-800">
                {step === 1
                  ? "Select Date & Time"
                  : "Your Details"}
              </h2>

              <button onClick={closeModal}>
                <X size={22} />
              </button>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="grid md:grid-cols-[320px_1fr_300px]">
                {/* LEFT SIDEBAR */}
                <div className="p-8 border-r border-gray-100 relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-7 right-5 hidden md:flex w-10 h-10 rounded-full hover:bg-gray-100 items-center justify-center transition"
                  >
                    <X size={18} />
                  </button>

                  <div className="flex items-center gap-3 text-sm font-medium text-gray-800 mb-6">
                    <div className="w-9 h-9 rounded-full bg-[#ff6a3d]/10 flex items-center justify-center text-[#ff6a3d]">
                      <Clock3 size={16} />
                    </div>

                    Mr. Ajay Sethi
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-5">
                    Consultation
                  </h2>

                  <p className="text-gray-800 text-sm leading-relaxed mb-6">
                    This consultation evaluates your fitness
                    goals, lifestyle, and nutrition strategy,
                    and outlines the appropriate next steps
                    for your wellness journey.
                  </p>

                  <div className="space-y-3 mt-auto">
                    <div className="flex items-center gap-3 text-gray-800">
                      <Clock3 size={18} />
                      30m
                    </div>

                    <div className="flex items-center gap-3 text-gray-800">
                      <Video size={18} />
                      Google Meet / Voice Call
                    </div>

                    <div className="flex items-center gap-3 text-gray-800">
                      <Globe size={18} />
                      Asia/Kolkata
                    </div>
                  </div>
                </div>

                {/* CALENDAR */}
                <div className="p-8 border-r border-gray-100">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {monthNames[currentMonth]}
                      <span className="text-[#ff6a3d] font-semibold ml-2 font-normal">
                        {currentYear}
                      </span>
                    </h3>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrevMonth}
                        className="w-10 h-10 text-gray-700 rounded-full hover:bg-[#ff6a3d] hover:text-white flex items-center justify-center transition"
                      >
                        <ChevronLeft size={18} />
                      </button>

                      <button
                        onClick={handleNextMonth}
                        className="w-10 h-10 text-gray-700  rounded-full hover:bg-[#ff6a3d] hover:text-white flex items-center justify-center transition"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {dayNamesShort.map((day) => (
                      <div
                        key={day}
                        className="text-center text-xs font-semibold tracking-wider text-gray-400"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-y-3 gap-x-1">
                    {generateDays()}
                  </div>
                </div>

                {/* TIMES */}
                <div className="p-8 bg-gray-50">
                  {selectedDate ? (
                    <>
                      <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                        {timeSlots.map((time) => (
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            key={time}
                            onClick={() => {
                              setSelectedTime(time)
                              setStep(2)
                            }}
                            className="w-full border border-[#003460]/20 bg-white hover:border-[#ff6a3d] hover:bg-[#ff6a3d]/5 transition rounded-lg py-2 text-[#000000] text-sm"
                          >
                            {time}
                          </motion.button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
                      <Calendar
                        size={42}
                        strokeWidth={1.5}
                        className="mb-4"
                      />

                      <p>
                        Select a date to view available
                        times
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="p-8 md:p-12 relative">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition mb-4"
                >
                  <ChevronLeft size={18} />
                  Back
                </button>

                <button
                  onClick={closeModal}
                  className="absolute top-8 right-8 hidden md:flex w-10 h-10 rounded-full hover:bg-gray-100 items-center justify-center transition"
                >
                  <X size={18} />
                </button>

                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Almost there
                  </h2>

                  <p className="text-gray-600 text-md">
                    {selectedDate?.toLocaleDateString()} at{" "}
                    {selectedTime}
                  </p>
                </div>

                {submitSuccess ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={42} />
                    </div>

                    <h3 className="text-3xl font-bold mb-3">
                      Booking Confirmed!
                    </h3>

                    <p className="text-gray-500">
                      We've sent a confirmation email.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-2xl px-5 py-3 flex gap-3 text-red-700 mb-8">
                        <AlertCircle size={20} />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-3">
                      <Input
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Jane Smith"
                      />

                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jane@gmail.com"
                      />

                      <Input
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9999999999"
                      />

                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">
                          Selected Slot
                        </label>

                        <input
                          readOnly
                          value={`${selectedDate?.toLocaleDateString()} - ${selectedTime}`}
                          className="w-full border border-gray-200 rounded-lg h-12 px-5 bg-gray-50 outline-none"
                        />
                      </div>

                      <Select
                        label="Fitness Goal"
                        name="fitnessGoal"
                        value={formData.fitnessGoal}
                        onChange={handleInputChange}
                        options={[
                          "Lose Weight",
                          "Build Muscle",
                          "Increase Mobility",
                          "Nutrition",
                        ]}
                      />

                      <Select
                        label="Program"
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        options={[
                          "Pro",
                          "Elite",
                          "Platinum",
                        ]}
                      />
                    </div>

                    <div className="mt-6">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Notes
                      </label>

                      <textarea
                        rows={5}
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Write your message..."
                        className="w-full border border-gray-200 rounded-lg p-5 outline-none focus:border-[#003460]"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-8 inline-flex items-center gap-3 bg-[#ff6a3d] hover:bg-[#1a1a1a] cursor-pointer transition text-white px-18 py-4 rounded-lg font-semibold"
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "Submit Form"}

                      {!isSubmitting && (
                        <ArrowUpRight size={18} />
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <>
      {mounted &&
        createPortal(modalContent, document.body)}
    </>
  )
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-2 block">
        {label}
      </label>

      <input
        {...props}
        className="w-full border border-gray-200 rounded-lg h-12 px-5 outline-none focus:border-[#003460] transition"
      />
    </div>
  )
}

function Select({
  label,
  options,
  ...props
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-2 block">
        {label}
      </label>

      <select
        {...props}
        className="w-full border border-gray-200 rounded-lg h-12 px-5 outline-none focus:border-[#003460] transition"
      >
        <option value="">Select...</option>

        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}