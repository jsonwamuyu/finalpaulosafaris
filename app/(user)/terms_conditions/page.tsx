import { Metadata } from "next";
import Link from "next/link";

export const metadata:Metadata = {
    title:"Our Terms & Conditions - paulosafaris",
    description:"To reserve a safari destinations with us, you must do it 6 months prio the safari starting date. Once your reservation is confirmed, you are required to pay a minimum downpayment of 60% of the total amount charged for that particular safari."
}

const TermsConditions = () =>{
    return (
      <section className="w-full min-h-screen">
        <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8  p-16 pb-8 sm:pb-12 flex flex-col space-y-6 mt-10 sm:mt-16 lg:mt-24">
          <h2 className="text-4xl">Terms & Conditions.</h2>
          <div className="w-full space-y-12 sm:max-w-5xl">
            {/* Booking Terms  */}
            <div className="space-y-2">
              <h4 className="text-2xl">Safari Reservation</h4>
              <ul className="text-base space-y-4 list-disc pl-6">
                <li>
                  To{" "}
                  <Link
                    href="/reservation"
                    className="text-red underline cursor-pointer">
                    reserve{" "}
                  </Link>
                  a safari destination(s) with us, it is highly encouraged to do
                  so <span className="font-semibold">6(six) months</span> prio
                  the safari starting date. The intention is to give all the
                  involved parties ample time to carry out the required
                  arragements. Also for proper and sufficient preparitions.
                </li>
                <li>
                  Once your reservation is confirmed, you MUST pay a{" "}
                  <span className="font-semibold">
                    minimum downpayment of 60% of the total safari package price
                  </span>{" "}
                  .Then the balance MUST be cleared before or on the safari
                  starting date. Its totally acceptable if you prefers to pay
                  full amount.
                </li>
                <li>
                  Modes of payment: We accept both{" "}
                  <span className="font-semibold">
                    cash and bank deposits(Master Card or Visa Card){" "}
                  </span>
                  . Once your reservation(s) is/are confirmed, the payments
                  process and instructions will be communicated to you.
                </li>
              </ul>
            </div>

            {/* Cancelling Terms */}
            <div className="space-y-2">
              <h4 className="text-2xl">Safari Cancellation</h4>
              <p className="text-base pb-4">
                If you decide for whatever reason(s) to cancel your safari
                reservation(s), the amount refunded(in percentage of the package
                total) to you is as tabulated below.{" "}
              </p>

              {/* Refunds table */}
              <table className="table-auto w-full md:max-w-2xl border border-collapse border-gray-200">
                <thead className="p-5 bg-green text-white/70">
                  <tr>
                    <th className="text-start border border-gray-200 px-5">
                      Duration After Reserving
                    </th>
                    <th className="text-start border border-200 pl-5">
                      Amount Refunded(%)
                    </th>
                  </tr>
                </thead>
                <tbody className="p-5 bg-yellow-100 text-sm text-gray-600">
                  <tr>
                    <td className="pl-5 border border-gray-200">
                      3(three) Months
                    </td>
                    <td className="border border-gray-200 pl-5">50%</td>
                  </tr>
                  <tr>
                    <td className="pl-5 border border-gray-200"></td>
                    <td className="border border-gray-200 pl-5">25%</td>
                  </tr>
                  <tr>
                    <td className="pl-5 border border-gray-200"></td>
                    <td className="border border-gray-200 pl-5">5%</td>
                  </tr>
                  <tr>
                    <td className="pl-5 border border-gray-200 ">
                      Less than 5 days and No Show Up
                    </td>
                    <td className="border border-gray-200 pl-5">No Refund</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-sm pt-2">
                <span className="font-bold">NB</span>: Refund processing will be
                done within 30 days after reservation(s) cancellation.
              </p>
            </div>

            {/* Safari Alteration */}
            <div className="space-y-2">
              <h4 className="text-2xl">Safari Alterations</h4>
              <ul className="list-disc text-base pl-6">
                <li>
                  On the event that conditions arises that necessiate alteration
                  or cancellation of a scheduled tour, the company reserves the
                  rights to do so.
                </li>
                <li>
                  Prices are purely based on tariffs and any other operational
                  costs prevailing at the time of confirmation of the safari.
                </li>
                <li>
                  The company reserve the rights to decline to accept or retain
                  any person as a member of any tour at any given time, in which
                  case an equitable amount will be refunded.
                </li>
              </ul>
            </div>

            {/* Safety */}
            <div className="space-y-2">
              <h4 className="text-2xl">Safety and Responsibilty</h4>
              <ul className="list-disc pl-6 text-base">
                <li>
                  On the event of any unacceptable, careless or reckless
                  behaviour(s) by the tourist - that leads to any sort of
                  delays, loss, damage or injury. The company and its agents act
                  only as agents of the tour, transport, etc. therefore we shall
                  not be held responsible.
                </li>
                <li>
                  The company is liable to passengers ferried in its own
                  vehicle. We are governed only by the laws of that country in
                  which the tour takes place. This shall be expected of anyone
                  seeking to use or is using our services .
                </li>
                <li>
                  Sometimes the company needs to employ some subcontractors for
                  all or part of the services offered. We reserve the rights to
                  do so.
                </li>
                <li>
                  All claims are subjects to the jurisdiction of the courts of
                  the country in which the occurence took place
                </li>
              </ul>
            </div>

            {/* Accommodation */}
            {/* <div className="space-y-2">
                    <h4 className="text-2xl">Accommodation</h4>
                    <ul className="list-disc text-sm pl-6">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div> */}

            {/* Transport */}
            <div className="space-y-2">
              <h4 className="text-2xl">Transport</h4>
              <ul className="list-disc text-base pl-6">
                <li>
                  Tours car, pop up top safari minibus and 4x4 Land Cruiser
                  Jeeps will be provided depending on safari program/itinerary
                  and number of participants. The company reserves the rights to
                  employ of the same standard sub-contractor(s).{" "}
                </li>
                <li>
                  English, Swahili, French, German, Italian and Spanish-speaking
                  driver guides are provided.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
}
export default TermsConditions;