import React from 'react'

const Settings = () => {
    return (
        <>
            {/* In this section all the details of the user / billing history / what are the most visited stores / coupons  */}

            <section className="flex flex-col w-full h-full bg-red-300 items-center justify-center">
                {/* User details */}
                <div className="flex">User details</div>

                {/* Billing history */}
                <div className="flex">Billing history</div>

                {/* Most liked stores */}
                <div className="flex">Most liked stores</div>

                {/* cupons scratch cards */}
                <div className="flex">cupons scratch cards</div>
            </section>
        </>
    )
}

export default Settings