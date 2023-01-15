import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"

const Header = () => {

    const [openDate,setOpenDate] = useState(false)
    const [date,setDate] = useState([
        {
            startDate:new Date(),
            endDate : new Date(),
            key:'selection'
        }
    ]);

    const [openOptions,setOpenOptions] = useState(false);
    const [options,setOptions] = useState({
        adult:1,
        children:0,
        room:0,
    })

    return (
        <div className='header'>
            <div className="headerContainer">


                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle">
                    A lifetime of discounts? It's Genuis.
                </h1>
                <p className="headerDesc">
                    Get rewarded for your travels unlock instant savings of 10% or more with a free Booking account
                </p>
                <button className="headerBtn">
                    Sign in / Register
                </button>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <input type="text" placeholder='where are you going?' className='headerSearchInput' />
                    </div>



                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>

                {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                />}

                    </div>


                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span className='headerSearchText'>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                    <div className="options">

                        <div className="optionItem">

                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                            <button className="optionCounterButton">-</button>
                            <span className="optionCounterNumber">1</span>
                            <button className="optionCounterButton">+</button>
                            </div>
                        </div>

                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                            <button className="optionCounterButton">-</button>
                            <span className="optionCounterNumber">0</span>
                            <button className="optionCounterButton">+</button>
                            </div>
                        </div>

                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                            <button className="optionCounterButton">-</button>
                            <span className="optionCounterNumber">1</span>
                            <button className="optionCounterButton">+</button>
                            </div>
                        </div>


                    </div>
                    </div>

                    <div className="headerSearchItem">
                       
                       <button className="headerBtn">
                        Search
                       </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
