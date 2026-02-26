import { useEffect } from "react";

export default function UnderMaintenance() {
    useEffect(() => {
        window.location.replace("https://satyendrachaudhary.in");
    }, []);

    return null;
}