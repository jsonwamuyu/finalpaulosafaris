import { info } from "console";
import { Metadata } from "next";

export const metadata:Metadata = {
    title:"Useful Safaris Travel Information - paulosafaris",
    description:"."
}

export default function Information(){
    return (
      <section className="w-full min-h-screen">
        <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8  p-16 pb-8 sm:pb-12 flex flex-col space-y-6 mt-10 sm:mt-16 lg:mt-24">
          <h2 className="text-4xl">Useful Information.</h2>
          <div className="w-full sm:max-w-5xl">
            <ul className="list-disc space-y-4 text-sm pl-4">
              <li>
                The standard child policy in properties in East Africa is that:
                Children aged 02 to 12 years pays 50% of adult rates in
                accommodation and park entrance fees when sharing a room with 02
                full paying adults(i.e in 3rd bed).Should the child under 12
                years share own room or with 01 adult, full adult rate will
                apply for accommodation, nevertheless, the under 12 years still
                get a child discount on park entrance fees.
              </li>
              <li>
                Hard currencies can be exchanged in cash or travelers cheques at
                banks and forex bureaus all over the countryand in most hotels.
                US Dollaers and Sterling Pounds are mostly acceptable. Banks are
                usually open from 9.00am to 4.00pm (Mondays - Fridays) and from
                9.00 am to 11.00am on Saturdays.
              </li>
              <li>
                All prices are to be in US$ unless where otherwise advised.{" "}
              </li>
              <li>
                Even though East Africa boast of generally frindly weather
                conditions conditions. However, malaria is endemic in certain
                areas and anti-malaria medications should be taken according to
                prescribed recommendations. Visitors requiring special
                medications should pack sufficient supplies in their hand
                luggage.
              </li>
              <li>
                In Aberdares and Mount Kenya National Parks, game viewing is
                normally done from the Tree Lodges precints, where animals are
                seen at the adjacent water holes. Salient game drives can be
                arraged in Aberdares on clients request and at an additional
                cost.
              </li>
              <li>
                Hotels and lodges provide safe and clear water in guest rooms.
                Bottled mineral water is also available in every restaurant and
                supermarket.
              </li>
              <li>
                Membership of the Flying Doctors Society is strongly
                recommended. In the event of accident or sickness while on
                safari, the society will fly patients by air ambulance to
                Nairobi for admittance to hospital at a fee.
              </li>
              <li>
                Although hotels and lodges include a service charge, it is
                customary to tip poters, waiters,, tax drivers and safari
                drivers/guides.
              </li>
              <li>
                In maters of security,normal precautions should be taken.
                Visitors are advised to make use of safe deposit boxes and safes
                to store their valuables. Reliable taxis are available at all
                the hotels. Before photographing seek the assistance of your
                driver/guide in this matter to avoid taking photos of restricted
                areas.{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
}
