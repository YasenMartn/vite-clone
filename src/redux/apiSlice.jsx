import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const cardsApi = createApi({
    reducerPath: "cardsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php/"}),
    endpoints: (builder) => ({
        getAllCards: builder.query({
            query: ({page = 0, numOfCards = 24, query = ""}) => 
            `?&fname=${query}&desc=${query}&sort=name&num=${numOfCards}&offset=${page}`
            ,
        }),
        getCard: builder.query({
            query: (id) => `?id=${id}&sort=name&num=10&offset=0`,
        }),
        getAll: builder.query({
            query: ({query = ""}) => 
            `?&fname=${query}&desc=${query}&sort=name`
            ,
        }),
    })
})

export const {useGetAllCardsQuery, useGetCardQuery, useGetAllQuery } = cardsApi;