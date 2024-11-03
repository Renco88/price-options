import PriceOpction from "../Priceopction/priceOpction";

const PriceOpctions = () => {
    const priceOpction = [
        {
            "id": 1,
            "name": "Basic",
            "price": 29.99,
            "features": [
                "Access to gym facilities",
                "Free locker usage",
                "One group fitness class per week",
                "Open gym access during weekdays",
                "Standard support during staffed hours",
                "Basic cardio and strength equipment",
                "Water fountain access",
                "Free Wi-Fi"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": 49.99,
            "features": [
                "Access to gym facilities",
                "Unlimited locker usage",
                "Three group fitness classes per week",
                "Full access to gym on all days",
                "10% discount on personal training sessions",
                "Extended support during staffed hours",
                "Access to cardio, strength, and functional equipment",
                "Steam room access",
                "Water fountain and juice bar discounts",
                "Free Wi-Fi",
                "Access to member-only workout app"
            ]
        },
        {
            "id": 3,
            "name": "Advanced",
            "price": 59.99,
            "features": [
                "All-day gym access",
                "Unlimited locker and sauna usage",
                "Five group fitness classes per week",
                "Priority access to peak hours",
                "Access to cardio, strength, and functional equipment",
                "Steam room and sauna access",
                "10% discount on personal and group training",
                "Free towels and workout mat service",
                "Access to member-only workout and nutrition app"
            ]
        },
        {
            "id": 4,
            "name": "Premium",
            "price": 79.99,
            "features": [
                "Access to all gym facilities",
                "Unlimited locker and sauna access",
                "Unlimited group fitness classes",
                "Access to premium equipment",
                "Two complimentary personal training sessions per month",
                "Priority access during peak hours",
                "24/7 member support",
                "Private sauna and steam room access",
                "Personalized workout and nutrition plans",
                "Free towel service",
                "Water fountain, juice bar, and smoothie bar discounts",
                "Member-only mobile app with premium content"
            ]
        },
        {
            "id": 5,
            "name": "VIP",
            "price": 119.99,
            "features": [
                "24/7 gym access",
                "Dedicated personal locker",
                "Unlimited group fitness and specialized classes",
                "Personal training sessions included",
                "Free nutritional and health assessments",
                "Complimentary guest passes",
                "Access to exclusive VIP lounge",
                "Priority booking for classes and equipment",
                "Customized workout and dietary plans with follow-ups",
                "Complimentary massage therapy sessions",
                "Premium juice and smoothie bar access",
                "Dedicated 24/7 personal support",
                "Member app with personal trainer chat access"
            ]
        },
        {
            "id": 6,
            "name": "Elite",
            "price": 159.99,
            "features": [
                "24/7 access with no restrictions",
                "Private locker and changing area",
                "Unlimited group and specialized classes",
                "Unlimited personal training sessions",
                "Monthly wellness and fitness assessments",
                "Access to VIP lounge and private rooms",
                "Dedicated concierge service",
                "Priority access to all facilities",
                "Custom meal and supplement plans",
                "Monthly massage and recovery sessions",
                "Unlimited access to juice and smoothie bar",
                "Personal trainer and dietitian access via app"
            ]
        }
    ];
    
    return (
        <div className="m-12">
            <h2 className="text-3xl m-3" >Best price in city</h2>
           <div className="grid md:grid-cols-3 gap-6">
           {
                priceOpction.map(opction => <PriceOpction key={opction.id} opction={opction} ></PriceOpction>)
            }
           </div>
        </div>
    );
};

export default PriceOpctions;