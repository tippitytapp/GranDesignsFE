import { fakedata } from "./fakedata"

export const searchData = (search) => { 
    return fakedata.filter(product => product.tags.includes(search))
}

export const fetchData = (type) => { 
    return fakedata.filter(product => product.type === type)
}