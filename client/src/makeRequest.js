import axios from "axios"
export const makeRequest = axios.create({
    baseURL:"http://localhost:1337/api",
    headers:{
        Authorization: "bearer f2cabfdb92922d20481facc5717b067bbade5634fd24478d7cf3e670223c9e4085536e6d411ccce5a33b2dc8e94680aa486f099c235d1349cfc8307d62f6a33ef81bf80ac0e9f7cc943c2e0fcb35cb2a70d833b3a40cc28ce62c676d7b57325908c93848e0d21736c19b42ec55ea87f72350434297077000bce23e72ba50816b",
    }
})