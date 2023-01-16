import React from 'react'
import { Destination } from '../destination/destination.component'
import { Luxury } from '../luxury/luxury.component'
import { Places } from '../places/places.component'
import { Slider } from '../slider/slider.component'
import { VideoSearch } from '../videosearch/videosearch.component'


export function HomeIndex(){

    return(
        <>
        <VideoSearch></VideoSearch>
        <Destination></Destination>
        <Luxury></Luxury>
        <Places></Places>
        <Slider></Slider>
        </>
    )
}