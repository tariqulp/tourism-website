const { useState, useEffect } = require("react")

const useServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://polar-atoll-67991.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return {
        services,
        setServices
    }
}
export default useServices;