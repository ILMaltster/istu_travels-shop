import { useGetTrips } from "entities/Trip";
import { useState } from "react";
import { TripFilter, TripList, TripSearch } from "widgets/Home";

export const Home = () => {
    const [countryId, setCountryId] = useState<string | null>(null)
    const [cityName, setCityName] = useState<string | null>(null)

    const { data: tripsPaged, isLoading: isLoadingTripsPages, error: errorTripsPaged } = useGetTrips({ countryId, titleOfCity: cityName });

    const setCountryFilter = (countryId: string) => {
        setCountryId(countryId);
    }

    const setCityFilter = (countryId: string) => {
        setCityName(countryId);
    }
    console.log(tripsPaged);
    return (
        <div className="row">
            <TripFilter onChange={setCountryFilter} />
            <div className="col-xl-9 col-lg-8 col-md-7">
                <TripSearch onChange={setCityFilter} />
                <TripList tripsPaged={tripsPaged} isLoading={isLoadingTripsPages} />
            </div>
        </div>
    );
}