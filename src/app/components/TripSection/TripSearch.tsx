'use client'

import DatePicker from '@/components/DatePicker'
import Input from '@/components/input'
import React from 'react'
import CurrencyInput from 'react-currency-input-field'

export const TripSearch = () => {
    return (
        <div className="container mx-auto">
            <h1 className="font-semibold text-2xl text-primaryDarker text-center">Encontre sua próxima <span className="text-primary">viagem!</span>
            </h1>

            <div className="flex flex-col gap-4 mt-5">
                <Input placeholder="Onde você quer ir?" className="px-5"/>

                <div className="flex gap-4">
                    <DatePicker placeholderText="Data de ida" onChange={() => {}} className="w-full"/>
                    <CurrencyInput placeholder="Orçamento"/>
                </div>

                <button>Buscar</button>
            </div>
        </div>
    )
}


export default TripSearch
